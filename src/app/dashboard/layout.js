'use client';
import { AuthProvider } from '@/context/AuthContext';

export default function DashboardLayout({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}