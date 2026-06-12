'use client';
import { ExternalLink, Mic, MessageCircle, TrendingUp, BarChart2, PenTool, PhoneCall, Clock } from 'lucide-react';

/* ─── Data ─── */
const integrations = [
  [
    {
      name: 'Facebook Ads',
      bg: '#1877F2',
      url: 'https://www.facebook.com/business/ads',
      svg: (
        <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12.073h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12.073h2.773l-.443 2.89h-2.33v6.988C20.343 21.128 24 16.991 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Instagram Ads',
      gradientId: 'ig',
      url: 'https://www.instagram.com/',
      svg: (
        <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'Google Ads',
      bg: '#fff',
      border: true,
      url: 'https://ads.google.com/',
      svg: (
        <svg viewBox="0 0 24 24" width="16" height="16">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp API',
      bg: '#25D366',
      url: 'https://business.whatsapp.com/',
      svg: (
        <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
  ],
  [
    { name: 'SMS Gateway', bg: '#3B82F6', url: 'https://www.twilio.com/', svg: <svg viewBox="0 0 24 24" fill="white" width="14" height="14"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg> },
    { name: 'Email Services', bg: '#EAB308', url: 'https://mailchimp.com/', svg: <svg viewBox="0 0 24 24" fill="white" width="14" height="14"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg> },
    { name: 'Zapier', bg: '#FF4A00', url: 'https://zapier.com/', svg: <svg viewBox="0 0 24 24" fill="white" width="14" height="14"><path d="M11.987 0C5.372 0 0 5.373 0 11.988c0 6.616 5.372 11.989 11.987 11.989C18.602 23.977 24 18.604 24 11.988 24 5.373 18.602 0 11.987 0zm.021 19.5l-2.175-3.75L7.5 19.5l-3.75-6.5h3.75V9.5H3.75L7.5 3l2.333 4.25L12.008 3l3.75 6.5H12v3.5h3.75L12.008 19.5z" /></svg> },
    { name: 'Webhook', bg: '#334155', url: 'https://webhook.site/', svg: <span className="text-white text-[9px] font-bold leading-none">{'{}'}</span> },
  ],
  [
    { name: 'Payment Gateway', bg: '#16A34A', url: 'https://stripe.com/', svg: <svg viewBox="0 0 24 24" fill="white" width="14" height="14"><path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" /></svg> },
    { name: 'Razorpay', bg: '#fff', border: true, url: 'https://razorpay.com/', svg: <span className="text-blue-700 font-black text-[11px]">R</span> },
    { name: 'Google Analytics', bg: '#F97316', url: 'https://analytics.google.com/', svg: <svg viewBox="0 0 24 24" fill="white" width="14" height="14"><path d="M22.84 2.998C21.615 1.773 19.497 1 17.5 1c-4.694 0-8.5 3.806-8.5 8.5 0 1.997.773 4.115 1.998 5.34L22.84 2.998zM1.16 21.002C2.385 22.227 4.503 23 6.5 23c4.694 0 8.5-3.806 8.5-8.5 0-1.997-.773-4.115-1.998-5.34L1.16 21.002z" /></svg> },
    { name: 'And More', bg: '#E2E8F0', url: '#', svg: <span className="text-slate-500 font-bold text-[13px]">···</span> },
  ],
];

const aiFeatures = [
  {
    icon: <Mic size={13} className="text-blue-600" />,
    bg: 'bg-blue-100',
    title: 'AI Voice Calling Agent',
    badge: 'New',
    badgeColor: 'bg-green-500',
    desc: 'AI calls & qualifies them',
    url: 'https://tivra.in/',
  },
  {
    icon: <MessageCircle size={13} className="text-green-600" />,
    bg: 'bg-green-100',
    title: 'AI WhatsApp Agent',
    desc: '24x7 AI Chatbot for Engage & Support',
    url: 'https://business.whatsapp.com/',
  },
  {
    icon: <TrendingUp size={13} className="text-orange-600" />,
    bg: 'bg-orange-100',
    title: 'AI Lead Scoring',
    desc: 'Automatically score & rank your leads',
    url: 'https://tivra.in/',
  },
  {
    icon: <BarChart2 size={13} className="text-purple-600" />,
    bg: 'bg-purple-100',
    title: 'AI Predictive Analytics',
    desc: 'Predict conversion & revenue',
    url: 'https://tivra.in/',
  },
  {
    icon: <PenTool size={13} className="text-red-600" />,
    bg: 'bg-red-100',
    title: 'AI Content Generator',
    desc: 'Generate content for ads, email, WhatsApp',
    url: 'https://tivra.in/',
  },
  {
    icon: <PhoneCall size={13} className="text-cyan-600" />,
    bg: 'bg-cyan-100',
    title: 'AI Sales Coach',
    desc: 'Analyze calls & improve sales',
    url: 'https://tivra.in/',
  },
];

const activities = [
  { name: 'Rahul Sharma', initials: 'RS', avatarBg: 'bg-blue-500', action: 'Submitted Lead Form', time: '2 min ago' },
  { name: 'Priya Singh', initials: 'PS', avatarBg: 'bg-pink-500', action: 'WhatsApp Replied', time: '10 min ago' },
  { name: 'Vikash Kumar', initials: 'VK', avatarBg: 'bg-green-500', action: 'Email Opened', time: '30 min ago' },
  { name: 'Aman Verma', initials: 'AV', avatarBg: 'bg-orange-500', action: 'Interested in Product', time: '1 hr ago' },
];

/* ─── Component ─── */
export default function RightSidebarWidgets() {
  return (
    <div className="pt-16 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
      <div className="p-3 space-y-6">
        {/* Integrations */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-slate-800 text-[13px]">Integrations</span>
            <a
              href="https://tivra.in/integrations"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-blue-600 font-semibold hover:underline flex items-center gap-0.5"
            >
              View All <ExternalLink size={9} />
            </a>
          </div>

          <div className="space-y-3">
            {integrations.map((row, ri) => (
              <div key={ri} className="grid grid-cols-4 gap-2">
                {row.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1 group"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform ${
                        item.border ? 'border border-slate-200' : ''
                      }`}
                      style={{
                        background: item.gradientId
                          ? 'linear-gradient(135deg, #E1306C, #833AB4, #F56040)'
                          : item.bg || '#fff',
                      }}
                    >
                      {item.svg}
                    </div>
                    <span className="text-[8px] text-slate-500 text-center leading-tight font-medium">
                      {item.name}
                    </span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* AI Powered Features */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-blue-600 text-[13px]">AI Powered Features</span>
            <a
              href="https://tivra.in/ai-features"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-blue-600 font-semibold hover:underline flex items-center gap-0.5"
            >
              View All <ExternalLink size={9} />
            </a>
          </div>

          <div className="space-y-1">
            {aiFeatures.map((f, i) => (
              <a
                key={i}
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className={`w-7 h-7 rounded-lg ${f.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  {f.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[11px] font-bold text-slate-800 leading-tight">
                      {f.title}
                    </span>
                    {f.badge && (
                      <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full text-white ${f.badgeColor}`}>
                        {f.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[9.5px] text-slate-500 leading-tight mt-0.5">{f.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Lead Activity */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-slate-800 text-[13px]">Lead Activity (Recent)</span>
            <button className="text-[10px] text-blue-600 font-semibold hover:underline">
              View All
            </button>
          </div>

          <div className="space-y-2.5">
            {activities.map((a, i) => (
              <div
                key={i}
                className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 rounded-lg p-1 -mx-1 transition-colors"
              >
                <div className={`w-8 h-8 rounded-full ${a.avatarBg} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>
                  {a.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-bold text-slate-800 truncate">{a.name}</div>
                  <div className="text-[10px] text-slate-500 truncate">{a.action}</div>
                </div>
                <div className="text-[9px] text-slate-400 flex items-center gap-0.5 flex-shrink-0 whitespace-nowrap">
                  <Clock size={8} />
                  {a.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile App */}
        <div>
          <div className="mb-1">
            <span className="font-bold text-slate-800 text-[13px]">Mobile App</span>
          </div>
          <p className="text-[10px] text-slate-500 mb-3 leading-relaxed">
            Manage your business on the go!
          </p>

          <div className="flex gap-3 mb-3">
            {/* Phone Mockup */}
            <div className="flex-shrink-0 w-[68px] h-[105px] bg-slate-900 rounded-[14px] border-2 border-slate-700 shadow-lg overflow-hidden flex flex-col items-center pt-2 pb-1.5">
              <div className="w-7 h-[3px] bg-slate-600 rounded-full mb-1" />
              <div className="w-[52px] h-[65px] bg-slate-950 rounded-md overflow-hidden p-1">
                <div className="grid grid-cols-2 gap-0.5 mb-1">
                  {[
                    ['#3B82F6', '70,466'],
                    ['#10B981', '+1.86%'],
                    ['#F59E0B', '₹1,186'],
                    ['#EF4444', '+16.3%'],
                  ].map(([c, v], i) => (
                    <div key={i} className="rounded-sm p-[2px]" style={{ backgroundColor: c + '25' }}>
                      <div className="text-[4.5px] font-bold" style={{ color: c }}>{v}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-end gap-[2px] h-[28px] mt-0.5">
                  {[30, 50, 40, 70, 55, 85, 65].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-[1px]"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i === 5 ? '#F97316' : '#3B82F6',
                        opacity: 0.85,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-1 w-4 h-[3px] bg-slate-600 rounded-full" />
            </div>

            {/* QR Code */}
            <div className="flex-1 bg-white border border-slate-200 rounded-xl flex flex-col items-center justify-center py-1.5 px-1">
              <svg viewBox="0 0 60 60" width="68" height="68" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="16" height="16" rx="2" fill="#0F172A" />
                <rect x="4" y="4" width="12" height="12" rx="1" fill="white" />
                <rect x="6" y="6" width="8" height="8" rx="0.5" fill="#0F172A" />
                <rect x="42" y="2" width="16" height="16" rx="2" fill="#0F172A" />
                <rect x="44" y="4" width="12" height="12" rx="1" fill="white" />
                <rect x="46" y="6" width="8" height="8" rx="0.5" fill="#0F172A" />
                <rect x="2" y="42" width="16" height="16" rx="2" fill="#0F172A" />
                <rect x="4" y="44" width="12" height="12" rx="1" fill="white" />
                <rect x="6" y="46" width="8" height="8" rx="0.5" fill="#0F172A" />
                {/* QR blocks */}
                {[
                  [22,2],[26,2],[30,2],[34,2],[38,2],
                  [22,6],[28,6],[34,6],[38,6],
                  [22,10],[24,10],[28,10],[32,10],[36,10],
                  [22,14],[26,14],[32,14],[36,14],
                  [22,18],[24,18],[30,18],[34,18],[38,18],
                  [2,22],[6,22],[12,22],[18,22],[24,22],[30,22],[34,22],[38,22],[44,22],[50,22],[54,22],
                  [4,26],[10,26],[16,26],[22,26],[28,26],[34,26],[40,26],[46,26],[52,26],
                  [2,30],[8,30],[14,30],[20,30],[26,30],[32,30],[38,30],[44,30],[50,30],[56,30],
                  [4,34],[10,34],[18,34],[24,34],[30,34],[36,34],[42,34],[48,34],[54,34],
                  [22,38],[26,38],[32,38],[38,38],[44,38],[50,38],[56,38],
                  [24,42],[28,42],[34,42],[40,42],[46,42],[52,42],
                  [22,46],[28,46],[34,46],[38,46],[44,46],[50,46],[56,46],
                  [24,50],[30,50],[36,50],[42,50],[48,50],[54,50],
                  [22,54],[26,54],[32,54],[38,54],[44,54],[50,54],[56,54],
                  [24,58],[30,58],[34,58],[40,58],[46,58],[52,58],
                ].map(([x, y], i) => (
                  <rect key={i} x={x} y={y} width="3" height="3" rx="0.5" fill="#0F172A" />
                ))}
              </svg>
              <span className="text-[8px] text-slate-500 font-medium mt-0.5">Scan to Download</span>
            </div>
          </div>

          <div className="space-y-2">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-slate-900 rounded-xl px-3 py-2 hover:bg-slate-800 transition-colors w-full"
            >
              <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                <path d="M3.18 23.76c.31.17.66.24 1.02.18l12.35-12.35L13 8.04 3.18 23.76zm17.14-11.4L17.4 10.8 14.1 14.1l3.3 3.3 2.94-1.7c.84-.48.84-1.96-.02-2.44zM2.37.28C2.14.52 2 .89 2 1.36v21.28c0 .47.14.84.38 1.08L3.3 22.8 15.65 10.45 3.3 1.2 2.37.28zM16.55 5.76L4.2 1.06c-.36-.13-.69-.1-.96.04l12.4 9.35 3.15-3.15-2.24-1.54z" />
              </svg>
              <div>
                <div className="text-[8px] text-slate-400 leading-none uppercase tracking-wider">GET IT ON</div>
                <div className="text-[12px] font-bold text-white leading-tight">Google Play</div>
              </div>
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-slate-900 rounded-xl px-3 py-2 hover:bg-slate-800 transition-colors w-full"
            >
              <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div>
                <div className="text-[8px] text-slate-400 leading-none uppercase tracking-wider">DOWNLOAD ON THE</div>
                <div className="text-[12px] font-bold text-white leading-tight">App Store</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}