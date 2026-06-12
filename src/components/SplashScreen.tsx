'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/store/authStore';

export default function Home() {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isAuthenticated) {
        router.push('/dashboard');
      } else {
        router.push('/home');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">

      <Image
        src="/images/tivra-logo.jpg"
        alt="TIVRA Logo"
        width={400}
        height={400}
        priority
        className="animate-pulse"
      />

    </div>
  );
}