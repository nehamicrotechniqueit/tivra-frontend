'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Mail, Lock, LogIn, X } from 'lucide-react';
import toast from 'react-hot-toast';
import useAuthStore from '@/store/authStore';
import TivraLogo from '@/components/ui/TivraLogo';

export default function LoginPage() {
  const router = useRouter();
  const { login, forgotPassword, isLoading } = useAuthStore();

  const [showPassword, setShowPassword] = useState(false);
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [isForgotLoading, setIsForgotLoading] = useState(false);

  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error('All fields are mandatory!');
      return;
    }

    const result = await login(formData.email, formData.password);

    if (result.success) {
      toast.success('Login authorized successfully');
      router.push('/dashboard');
    } else {
      toast.error(result.error); // 👈 अब सही एरर मैसेज यहाँ पॉप अप होगा
    }
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    if (!forgotEmail) {
      toast.error('Email field cannot be blank.');
      return;
    }
    setIsForgotLoading(true);
    const result = await forgotPassword(forgotEmail);
    setIsForgotLoading(false);

    if (result.success) {
      toast.success(result.message || 'Reset link dispatched.');
      setIsForgotModalOpen(false);
      setForgotEmail('');
    } else {
      toast.error(result.error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-2xl">
        <TivraLogo />

        <div className="mt-8 text-center">
          <h1 className="text-3xl font-bold text-[#1E2229]">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Sign in to your workspace</p>
        </div>

        <form className="space-y-5 mt-8" onSubmit={handleSubmit}>
          <div className="relative">
            <Mail className="absolute left-4 top-4 text-gray-400 h-5 w-5" />
            <input
              type="email"
              placeholder="Business Email"
              className="w-full pl-12 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-orange-500 outline-none text-sm"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-4 text-gray-400 h-5 w-5" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-orange-500 outline-none text-sm"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <button
              type="button"
              className="absolute right-4 top-4 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Forgot Password Trigger Button */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setIsForgotModalOpen(true)}
              className="text-xs font-semibold text-orange-500 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            disabled={isLoading}
            className="w-full bg-[#1E2229] hover:bg-[#2d333d] text-white py-3 rounded-xl font-semibold flex justify-center gap-2 items-center text-sm transition-all"
          >
            <LogIn size={18} />
            {isLoading ? 'Authenticating...' : 'Secure Sign In'}
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-500">
          New to Tivra?
          <Link href="/register" className="text-orange-500 font-bold ml-2 hover:underline">
            Create account
          </Link>
        </p>
      </div>

      {/* ================= FORGOT PASSWORD MODAL POPUP ================= */}
      {isForgotModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl relative animate-in zoom-in-95 duration-150">
            <button 
              onClick={() => setIsForgotModalOpen(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>
            <h2 className="text-lg font-bold text-slate-800 mb-2">Reset Password</h2>
            <p className="text-xs text-gray-500 mb-4">Provide your registered workspace email to recover password link.</p>
            
            <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-gray-400 h-4 w-4" />
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full pl-10 pr-4 py-2.5 text-xs border border-gray-200 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-orange-500"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isForgotLoading}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-xl text-xs font-semibold transition-all"
              >
                {isForgotLoading ? 'Processing Request...' : 'Send Recovery Link'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}