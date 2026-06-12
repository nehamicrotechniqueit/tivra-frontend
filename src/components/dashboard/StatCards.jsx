'use client';

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
    iconBg: 'bg-purple-500',
    label: 'Total Leads',
    key: 'total_leads',
    defaultVal: '25,689',
    change: '↑ 18.6% vs last 30 days',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
      </svg>
    ),
    iconBg: 'bg-green-500',
    label: 'Total Customers',
    key: 'total_customers',
    defaultVal: '8,426',
    change: '↑ 16.3% vs last 30 days',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    iconBg: 'bg-emerald-500',
    label: 'WhatsApp Sent',
    key: 'whatsapp_sent',
    defaultVal: '1,28,934',
    change: '↑ 22.7% vs last 30 days',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    iconBg: 'bg-blue-500',
    label: 'Open Rate',
    key: 'open_rate',
    defaultVal: '45.6%',
    change: '↑ 8.3% vs last 30 days',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
      </svg>
    ),
    iconBg: 'bg-orange-500',
    label: 'Conversion Rate',
    key: 'conversion_rate',
    defaultVal: '16.35%',
    change: '↑ 2.3% vs last 30 days',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    ),
    iconBg: 'bg-amber-500',
    label: 'Revenue',
    key: 'revenue',
    defaultVal: '₹2,45,80,90',
    change: '↑ 28.4% vs last 22 days',
  },
];

export default function StatCards({ kpis }) {
  return (
    <div className="grid grid-cols-6 gap-3">
      {cards.map((card) => (
        <div
          key={card.key}
          className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Icon + Label row */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
              {card.icon}
            </div>
            <span className="text-slate-500 text-[11px] font-semibold leading-tight">{card.label}</span>
          </div>

          {/* Value */}
          <div className="text-[22px] font-black text-slate-800 leading-none tracking-tight mb-2">
            {card.key === 'revenue' ? '₹' : ''}
            {kpis?.[card.key]
              ? (card.key === 'revenue'
                  ? kpis[card.key].replace('₹', '').replace('₹', '')
                  : kpis[card.key])
              : card.defaultVal.replace('₹', '')}
          </div>

          {/* Change */}
          <div className="text-[10px] font-semibold text-green-500 flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
            </svg>
            {card.change}
          </div>
        </div>
      ))}
    </div>
  );
}