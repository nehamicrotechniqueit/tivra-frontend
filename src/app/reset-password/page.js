'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Lock, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import toast from 'react-hot-toast';
import useAuthStore from '@/store/authStore';

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { resetPasswordConfirm } = useAuthStore();

  const [uid, setUid] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const urlUid = searchParams.get('uid');
    const urlToken = searchParams.get('token');

    console.log('URL PARAMS:', {
      uid: urlUid,
      token: urlToken,
    });

    if (urlUid && urlToken) {
      setUid(urlUid);
      setToken(urlToken);
    } else {
      toast.error('Invalid or expired reset link');
    }
  }, [searchParams]);

  const handleResetSubmit = async (e) => {
    e.preventDefault();

    console.log('===== RESET BUTTON CLICKED =====');
    console.log('UID:', uid);
    console.log('TOKEN:', token);
    console.log('PASSWORD:', newPassword);

    if (!uid || !token) {
      console.log('UID OR TOKEN MISSING');
      toast.error('Authorization components missing.');
      return;
    }

    if (newPassword.length < 8) {
      console.log('PASSWORD TOO SHORT');
      toast.error('Password must be at least 8 characters.');
      return;
    }

    try {
      setIsLoading(true);

      const result = await resetPasswordConfirm(
        uid,
        token,
        newPassword
      );

      console.log('RESET RESULT:', result);

      if (result.success) {
        toast.success('Password updated successfully');

        setTimeout(() => {
          router.push('/login');
        }, 1500);
      } else {
        toast.error(result.error || 'Password reset failed');
      }
    } catch (error) {
      console.error('RESET ERROR:', error);
      toast.error('Unexpected error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-2xl">

      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">
          Reset Password
        </h1>

        <p className="text-sm text-gray-500">
          Enter your new password
        </p>
      </div>

      {/* DEBUG INFO */}
      <div className="mb-3 text-xs text-red-500 break-all">
      </div>

      <div className="mb-5 text-xs text-blue-500 break-all">
      </div>

      <form
        onSubmit={handleResetSubmit}
        className="space-y-5"
      >
        <div className="relative">
          <Lock className="absolute left-4 top-4 h-5 w-5 text-gray-400" />

          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter New Password"
            value={newPassword}
            onChange={(e) =>
              setNewPassword(e.target.value)
            }
            className="w-full pl-12 pr-12 py-3 border rounded-xl"
            required
          />

          <button
            type="button"
            className="absolute right-4 top-4"
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl"
        >
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck size={18} />

            {isLoading
              ? 'Updating Password...'
              : 'Reset Password'}
          </div>
        </button>

      </form>
    </div>
  );
}


function ResetPasswordContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordForm />
    </Suspense>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <ResetPasswordContent />
    </div>
  );
}