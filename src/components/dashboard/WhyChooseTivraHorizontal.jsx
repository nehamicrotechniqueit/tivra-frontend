'use client';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  'All-in-One Business Growth Platform',
  'Official WhatsApp & Meta Partner',
  'AI-Powered Automation & Insights',
  'Secure, Reliable & Scalable',
  'Built for Modern Businesses',
];

export default function WhyChooseTivra() {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col h-full">
      {/* Header */}
      <h3 className="font-black text-slate-800 text-[15px] mb-3 leading-tight">
        Why Choose <span className="text-orange-500">TIVRA</span>?
      </h3>

      {/* Reasons list */}
      <div className="space-y-2.5 flex-1">
        {reasons.map((r) => (
          <div key={r} className="flex items-start gap-2">
            <CheckCircle2
              size={14}
              className="text-green-500 flex-shrink-0 mt-0.5"
              strokeWidth={2.5}
            />
            <span className="text-[11.5px] text-slate-700 font-medium leading-snug">{r}</span>
          </div>
        ))}
      </div>

      {/* Illustration — matches Image 2 bottom-right illustration */}
      <div className="mt-4 flex justify-end items-end">
        <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-36 h-24">
          {/* Orange circle background accent */}
          <circle cx="105" cy="50" r="42" fill="#FFF7ED" />

          {/* Bar chart — 3 bars */}
          <rect x="6"  y="68" width="14" height="22" rx="2" fill="#3B82F6" opacity="0.6"/>
          <rect x="24" y="52" width="14" height="38" rx="2" fill="#3B82F6" opacity="0.75"/>
          <rect x="42" y="38" width="14" height="52" rx="2" fill="#3B82F6"/>

          {/* Trend arrow line going up */}
          <polyline
            points="13,68 31,52 49,38 70,22"
            stroke="#F97316"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Arrow head */}
          <polyline
            points="62,18 70,22 66,30"
            stroke="#F97316"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Person body */}
          {/* Head */}
          <circle cx="108" cy="28" r="10" fill="#F97316"/>
          {/* Hair */}
          <path d="M98 24 Q100 18 108 19 Q116 18 118 24" fill="#1E293B"/>
          {/* Collar / neck */}
          <rect x="104" y="37" width="8" height="5" rx="1" fill="#FED7AA"/>

          {/* Orange jacket / torso */}
          <path d="M88 90 Q90 58 100 54 L108 57 L116 54 Q126 58 128 90 Z" fill="#F97316"/>

          {/* White shirt underneath */}
          <path d="M100 54 L108 57 L116 54 L114 72 L102 72 Z" fill="white" opacity="0.9"/>

          {/* Left arm holding laptop */}
          <path d="M88 60 Q82 65 80 72 Q84 74 88 72 Q90 65 94 60 Z" fill="#F97316"/>

          {/* Laptop base */}
          <rect x="74" y="70" width="32" height="20" rx="3" fill="#1E293B"/>
          {/* Laptop screen */}
          <rect x="76" y="72" width="28" height="14" rx="2" fill="#3B82F6" opacity="0.5"/>
          {/* Tiny chart on laptop */}
          <rect x="79" y="78" width="3" height="5" rx="0.5" fill="#60A5FA"/>
          <rect x="84" y="75" width="3" height="8" rx="0.5" fill="#60A5FA"/>
          <rect x="89" y="77" width="3" height="6" rx="0.5" fill="#60A5FA"/>
          {/* Laptop hinge */}
          <rect x="84" y="89" width="18" height="2" rx="1" fill="#334155"/>

          {/* Right arm */}
          <path d="M128 60 Q134 65 136 72 Q132 74 128 72 Q126 65 122 60 Z" fill="#F97316"/>

          {/* Target / bullseye icon top right */}
          <circle cx="128" cy="14" r="9"  fill="none" stroke="#F97316" strokeWidth="2"/>
          <circle cx="128" cy="14" r="5"  fill="none" stroke="#F97316" strokeWidth="2"/>
          <circle cx="128" cy="14" r="2"  fill="#F97316"/>
          {/* Arrow into bullseye */}
          <line x1="138" y1="4" x2="130" y2="12" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round"/>
          <polyline points="133,4 138,4 138,9" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </div>
    </div>
  );
}