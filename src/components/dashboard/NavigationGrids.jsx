'use client';

const modules = [
  {
    iconBg: 'bg-green-500',
    iconEmoji: '💬',
    title: 'WhatsApp Marketing',
    items: ['Bulk Campaigns', 'Template Messages', 'Auto Reply & Chatbot', 'Team Inbox', 'Delivery & Read Reports'],
    cta: 'Create Campaign',
    ctaColor: 'text-green-600',
  },
  {
    iconBg: 'bg-blue-500',
    iconEmoji: '⚡',
    title: 'Marketing Automation',
    items: ['Drip Campaigns', 'Lead Nurturing', 'Trigger Automation', 'Customer Segmentation', 'Workflow Builder'],
    cta: 'Create Automation',
    ctaColor: 'text-blue-600',
  },
  {
    iconBg: 'bg-indigo-500',
    iconEmoji: '🎯',
    title: 'Ad Management',
    items: ['Meta Ads Manager', 'Google Ads Manager', 'Cost Per Lead Tracking', 'ROI & Revenue Tracking', 'AI Recommendations'],
    cta: 'Manage Ads',
    ctaColor: 'text-indigo-600',
  },
  {
    iconBg: 'bg-orange-500',
    iconEmoji: '📩',
    title: 'Communication Hub',
    items: ['WhatsApp', 'SMS', 'Email', 'Voice Calls', 'Team Chat'],
    cta: 'Open Inbox',
    ctaColor: 'text-orange-500',
  },
  {
    iconBg: 'bg-cyan-500',
    iconEmoji: '📊',
    title: 'Analytics & Reports',
    items: ['Real-time Dashboards', 'Custom Reports', 'Team Performance', 'Lead Analytics', 'Revenue Analytics'],
    cta: 'View Reports',
    ctaColor: 'text-cyan-600',
  },
  {
    iconBg: 'bg-teal-500',
    iconEmoji: '🔀',
    title: 'Deals & Pipeline',
    items: ['Sales Pipeline', 'Deal Management', 'Quote & Proposals', 'Follow-ups', 'Win Probability'],
    cta: 'View Pipeline',
    ctaColor: 'text-teal-600',
  },
];

export default function NavigationGrids() {
  return (
    <div className="grid grid-cols-6 gap-3">
      {modules.map((mod) => (
        <div key={mod.title}
          className="bg-white rounded-xl border border-slate-100 p-3.5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-7 h-7 rounded-lg ${mod.iconBg} flex items-center justify-center flex-shrink-0`}>
              <span className="text-[13px]">{mod.iconEmoji}</span>
            </div>
            <span className="text-[11.5px] font-bold text-slate-800 leading-tight">{mod.title}</span>
          </div>

          {/* Items */}
          <div className="flex-1 space-y-1.5">
            {mod.items.map(item => (
              <div key={item} className="flex items-start gap-1.5">
                <span className="text-slate-400 text-[10px] leading-[1.6] flex-shrink-0">—</span>
                <span className="text-[10.5px] text-slate-600 leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className={`mt-3 pt-2 border-t border-slate-100 text-[11px] font-bold ${mod.ctaColor} text-left hover:underline`}>
            {mod.cta}
          </button>
        </div>
      ))}
    </div>
  );
}