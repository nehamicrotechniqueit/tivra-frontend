'use client';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts';

const leadsData = [
  { date: '1 May',  leads: 800  },
  { date: '8 May',  leads: 2200 },
  { date: '15 May', leads: 3987 },
  { date: '22 May', leads: 5600 },
  { date: '31 May', leads: 7800 },
];

const pieData = [
  { name: 'Meta Ads',   value: 45.8, color: '#3B82F6' },
  { name: 'Google Ads', value: 25.6, color: '#10B981' },
  { name: 'Website',    value: 15.2, color: '#F59E0B' },
  { name: 'WhatsApp',   value: 8.7,  color: '#8B5CF6' },
  { name: 'Referral',   value: 4.7,  color: '#EF4444' },
];

// Funnel stages — pct drives the trapezoid width
const pipelineStages = [
  { label: 'New Leads',   value: 25689, color: '#2563EB', pct: 100 },
  { label: 'Contacted',   value: 16324, color: '#0891B2', pct: 82  },
  { label: 'Qualified',   value: 9125,  color: '#059669', pct: 62  },
  { label: 'Proposal',    value: 4928,  color: '#D97706', pct: 44  },
  { label: 'Negotiation', value: 2450,  color: '#EA580C', pct: 28  },
  { label: 'Won',         value: 1245,  color: '#DC2626', pct: 15  },
];

/* ── Custom dot for line chart ── */
const CustomDot = ({ cx, cy, index }) => {
  if (index === 2) {
    return (
      <g>
        <circle cx={cx} cy={cy} r={6} fill="#3B82F6" stroke="white" strokeWidth={2} />
        <rect x={cx - 30} y={cy - 42} width={60} height={30} rx={5} fill="#1E293B" />
        <text x={cx} y={cy - 28} textAnchor="middle" fill="white" fontSize={11} fontWeight="bold">3,987</text>
        <text x={cx} y={cy - 16} textAnchor="middle" fill="#94A3B8" fontSize={9}>15 May</text>
      </g>
    );
  }
  if (index === 1 || index === 3) {
    return <circle cx={cx} cy={cy} r={4} fill="#3B82F6" stroke="white" strokeWidth={2} />;
  }
  return null;
};

/* ── True trapezoid funnel using SVG polygons ── */
function TrapezoidFunnel({ stages }) {
  const CANVAS_W = 200;
  const ROW_H = 28;
  const GAP = 4;
  const totalH = stages.length * ROW_H + (stages.length - 1) * GAP;

  return (
    <svg
      viewBox={`0 0 ${CANVAS_W} ${totalH}`}
      width="100%"
      style={{ display: 'block' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {stages.map((stage, i) => {
        const topW = (CANVAS_W * stage.pct) / 100;
        const nextPct = stages[i + 1] ? stages[i + 1].pct : stage.pct * 0.6;
        const botW = (CANVAS_W * nextPct) / 100;
        const y = i * (ROW_H + GAP);
        const topL = (CANVAS_W - topW) / 2;
        const topR = topL + topW;
        const botL = (CANVAS_W - botW) / 2;
        const botR = botL + botW;
        const points = `${topL},${y} ${topR},${y} ${botR},${y + ROW_H} ${botL},${y + ROW_H}`;
        return (
          <polygon key={stage.label} points={points} fill={stage.color} />
        );
      })}
    </svg>
  );
}

export default function AnalyticsCharts({ pipeline }) {
  return (
    <div className="grid grid-cols-12 gap-4">

      {/* ── Leads Growth (5 cols) ── */}
      <div className="col-span-5 bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-slate-800 text-[14px]">Leads Growth</h3>
          <select className="text-[11px] border border-slate-200 rounded-lg px-2 py-1 text-slate-600 bg-white cursor-pointer">
            <option>This Month</option>
            <option>Last Month</option>
          </select>
        </div>

        <ResponsiveContainer width="100%" height={185}>
          <LineChart data={leadsData} margin={{ top: 28, right: 8, left: -22, bottom: 0 }}>
            <XAxis dataKey="date" tick={{ fontSize: 10, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
            <YAxis
              tick={{ fontSize: 10, fill: '#94A3B8' }}
              axisLine={false} tickLine={false}
              tickFormatter={v => v >= 1000 ? `${v / 1000}K` : v}
              domain={[0, 8000]}
              ticks={[0, 2000, 4000, 6000, 8000]}
            />
            <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8, border: '1px solid #e2e8f0' }} />
            <Line type="monotone" dataKey="leads" stroke="#3B82F6" strokeWidth={2.5}
              dot={<CustomDot />} activeDot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-4 gap-2 mt-2 pt-2 border-t border-slate-100">
          {[
            { val: '3,987', label: 'New Leads',  color: 'text-blue-600'   },
            { val: '2,743', label: 'Contacted',  color: 'text-green-600'  },
            { val: '1,824', label: 'Qualified',  color: 'text-purple-600' },
            { val: '932',   label: 'Converted',  color: 'text-orange-500' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className={`font-black text-[15px] ${s.color}`}>{s.val}</div>
              <div className="text-[9px] text-slate-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lead Sources Donut (3 cols) ── */}
      <div className="col-span-3 bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col">
        <div className="mb-1">
          <h3 className="font-bold text-slate-800 text-[14px]">Lead Sources</h3>
        </div>

        <div className="relative flex justify-center my-1">
          <PieChart width={170} height={170}>
            <Pie data={pieData} cx={82} cy={82}
              innerRadius={54} outerRadius={78}
              dataKey="value" startAngle={90} endAngle={-270} strokeWidth={2} stroke="#fff">
              {pieData.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="text-[18px] font-black text-slate-800">25,689</div>
            <div className="text-[9px] text-slate-500 font-medium">Total Leads</div>
          </div>
        </div>

        <div className="space-y-1.5 flex-1">
          {pieData.map(item => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-[11px] text-slate-600">{item.name}</span>
              </div>
              <span className="text-[11px] font-bold text-slate-700">{item.value}%</span>
            </div>
          ))}
        </div>

        <button className="w-full mt-3 text-center text-[12px] font-bold text-blue-600 hover:underline">
          View Full Report
        </button>
      </div>

      {/* ── Sales Pipeline Funnel (4 cols) ── */}
      <div className="col-span-4 bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-slate-800 text-[14px]">Sales Pipeline</h3>
          <select className="text-[11px] border border-slate-200 rounded-lg px-2 py-1 text-slate-600 bg-white cursor-pointer">
            <option>This Month</option>
            <option>Last Month</option>
          </select>
        </div>

        {/* Two-column layout: funnel left, stage list right */}
        <div className="flex gap-3 items-start">
          {/* SVG Trapezoid Funnel */}
          <div className="w-[48%] flex-shrink-0">
            <TrapezoidFunnel stages={pipelineStages} />
          </div>

          {/* Stage labels + values */}
          <div className="flex-1 space-y-[9px] pt-0.5">
            {pipelineStages.map((stage) => {
              const key = stage.label.toLowerCase().replace(' ', '_');
              const val = pipeline?.[key] ?? stage.value;
              return (
                <div key={stage.label} className="flex items-center justify-between">
                  <span className="text-[10.5px] text-slate-600">{stage.label}</span>
                  <span className="text-[11px] font-bold text-slate-800">
                    {Number(val).toLocaleString('en-IN')}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] text-slate-500 font-semibold">Conversion Rate</span>
          <span className="text-[15px] font-black text-blue-600">16.35%</span>
        </div>
      </div>

    </div>
  );
}