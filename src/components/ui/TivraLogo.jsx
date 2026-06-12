'use client';

import Image from 'next/image';

export default function TivraLogo() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/images/tivra-logo.jpg"
        alt="TIVRA"
        width={220}
        height={220}
        priority
      />

      <p className="mt-2 text-xs uppercase tracking-[4px] text-gray-400">
        Enterprise Cloud CRM
      </p>
    </div>
  );
}