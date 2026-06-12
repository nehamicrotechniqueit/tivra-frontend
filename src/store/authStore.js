// store/authStore.js

import { create } from 'zustand';

const API_URL = 'http://localhost:8000/api';

const useAuthStore = create((set) => ({
  user: null,
  access_token:
    typeof window !== 'undefined'
      ? localStorage.getItem('tivra_access_token')
      : null,

  refresh_token:
    typeof window !== 'undefined'
      ? localStorage.getItem('tivra_refresh_token')
      : null,

  isLoading: false,

  isAuthenticated:
    typeof window !== 'undefined'
      ? !!localStorage.getItem('tivra_access_token')
      : false,

  login: async (email, password) => {
    set({ isLoading: true });

    try {
      const response = await fetch(`${API_URL}/auth/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      localStorage.setItem('tivra_access_token', data.access);
      localStorage.setItem('tivra_refresh_token', data.refresh);
      localStorage.setItem('tivra_user', JSON.stringify(data.user));

      set({
        user: data.user,
        access_token: data.access,
        refresh_token: data.refresh,
        isAuthenticated: true,
        isLoading: false,
      });

      return { success: true };
    } catch (error) {
      set({ isLoading: false });

      return {
        success: false,
        error: error.message,
      };
    }
  },

  register: async (userData) => {
    set({ isLoading: true });

    try {
      const response = await fetch(`${API_URL}/auth/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      localStorage.setItem('tivra_access_token', data.access);
      localStorage.setItem('tivra_refresh_token', data.refresh);
      localStorage.setItem('tivra_user', JSON.stringify(data.user));

      set({
        user: data.user,
        access_token: data.access,
        refresh_token: data.refresh,
        isAuthenticated: true,
        isLoading: false,
      });

      return { success: true };
    } catch (error) {
      set({ isLoading: false });

      return {
        success: false,
        error: error.message,
      };
    }
  },

  forgotPassword: async (email) => {
    try {
      console.log('FORGOT PASSWORD REQUEST');

      const response = await fetch(
        `${API_URL}/auth/forgot-password/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      const data = await response.json();

      console.log('FORGOT PASSWORD RESPONSE', data);

      if (!response.ok) {
        throw new Error(data.error || 'Forgot password failed');
      }

      return {
        success: true,
        message: data.message,
      };
    } catch (error) {
      console.error(error);

      return {
        success: false,
        error: error.message,
      };
    }
  },

  resetPasswordConfirm: async (
    uid,
    token,
    newPassword
  ) => {
    try {
      console.log('====================');
      console.log('RESET STARTED');
      console.log('UID:', uid);
      console.log('TOKEN:', token);
      console.log('PASSWORD:', newPassword);

      const payload = {
        uid,
        token,
        new_password: newPassword,
      };

      console.log('PAYLOAD:', payload);

      const response = await fetch(
        `${API_URL}/auth/reset-password-confirm/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      console.log('STATUS:', response.status);

      const data = await response.json();

      console.log('SERVER RESPONSE:', data);

      if (!response.ok) {
        throw new Error(
          data.error || 'Password reset failed'
        );
      }

      return {
        success: true,
        message: data.message,
      };
    } catch (error) {
      console.error('RESET ERROR:', error);

      return {
        success: false,
        error: error.message,
      };
    }
  },

  logout: () => {
    localStorage.removeItem('tivra_access_token');
    localStorage.removeItem('tivra_refresh_token');
    localStorage.removeItem('tivra_user');

    set({
      user: null,
      access_token: null,
      refresh_token: null,
      isAuthenticated: false,
    });
  },
}));

export default useAuthStore;