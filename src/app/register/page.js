'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { User, Mail, Phone, Building, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';
import TivraLogo from '@/components/ui/TivraLogo';
import useAuthStore from '@/store/authStore';

export default function RegisterPage() {
  const router = useRouter();
  const { register, isLoading } = useAuthStore();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    company_name: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.full_name || !formData.email || !formData.password) {
      toast.error('Please fill all mandatory fields.');
      return;
    }

    if (formData.password.length < 8) {
      toast.error('Security alert: Password length must be minimum 8 characters.');
      return;
    }

    const result = await register(formData);

    if (result.success) {
      toast.success('Workspace synchronized successfully!');
      router.push('/dashboard');
    } else {
      toast.error(result.error); // 👈 अब डुप्लीकेट ईमेल एरर यहाँ साफ दिखेगी
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-2xl">
        <TivraLogo />

        <div className="text-center mt-5">
          <h1 className="text-3xl font-bold text-[#1E2229]">Start Free Trial</h1>
          <p className="text-gray-500 mt-2">Setup your CRM in less than 2 minutes</p>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5 mt-8">
          <div className="relative flex items-center">
            <User className="absolute left-4 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Full Name *"
              className="w-full pl-12 pr-4 py-3 border rounded-xl bg-gray-50 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
              value={formData.full_name}
              onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
              required
            />
          </div>

          <div className="relative flex items-center">
            <Mail className="absolute left-4 text-gray-400 h-5 w-5" />
            <input
              type="email"
              placeholder="Business Email *"
              className="w-full pl-12 pr-4 py-3 border rounded-xl bg-gray-50 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="relative flex items-center">
            <Phone className="absolute left-4 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Phone Number (Optional)"
              className="w-full pl-12 pr-4 py-3 border rounded-xl bg-gray-50 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
              value={formData.phone_number}
              onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
            />
          </div>

          <div className="relative flex items-center">
            <Building className="absolute left-4 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Company Name (Optional)"
              className="w-full pl-12 pr-4 py-3 border rounded-xl bg-gray-50 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
              value={formData.company_name}
              onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
            />
          </div>

          <div className="md:col-span-2 relative flex items-center">
            <Lock className="absolute left-4 h-5 w-5 text-gray-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password * (Minimum 8 characters)"
              className="w-full pl-12 pr-12 py-3 border rounded-xl bg-gray-50 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <button
              type="button"
              className="absolute right-4 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          <div className="md:col-span-2">
            <button
              disabled={isLoading}
              className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold flex items-center justify-center gap-2 text-sm transition-all"
            >
              <ArrowRight size={18} />
              {isLoading ? 'Deploying Workspace...' : 'Create Workspace'}
            </button>
          </div>
        </form>

        <p className="text-center mt-6 text-sm text-gray-500">
          Already have an account?
          <Link href="/login" className="ml-2 font-bold text-[#1E2229] hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}