'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState('Amit Mishra');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for token
    const storedToken = localStorage.getItem('tivra_token') || 'demo_token';
    setToken(storedToken);
    setLoading(false);
  }, []);

  // 1. Define the missing registration function here 👇
  const registerUser = async (username, email, password) => {
    try {
      // Replace this block with your actual API endpoint logic when ready
      console.log("Registering system node:", { username, email, password });
      
      // Simulating a successful API response
      return { success: true };
      
    } catch (error) {
      return { success: false, error: error.message || "Initialization failed." };
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('tivra_token');
    setToken(null);
  };

  return (
    // 2. Add registerUser to your provider value bundle here 👇
    <AuthContext.Provider value={{ token, user, loading, logoutUser, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}