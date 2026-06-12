'use client';

export default function MobileAppWidget() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm h-full flex flex-col">
      <h3 className="font-bold text-slate-800 text-[13px] mb-3">Mobile App</h3>
      <p className="text-[10.5px] text-slate-500 mb-4 leading-relaxed">
        Manage your business on the go!
      </p>

      {/* Phone mockup */}
      <div className="flex justify-center mb-4 flex-1 items-center">
        <div className="w-20 h-36 bg-slate-800 rounded-2xl flex flex-col items-center justify-center shadow-lg relative overflow-hidden border-2 border-slate-700">
          <div className="absolute top-2 w-8 h-1 bg-slate-600 rounded-full" />
          <div className="w-12 h-20 bg-slate-700 rounded-lg mt-3 flex items-center justify-center">
            <span className="text-2xl">📊</span>
          </div>
          <div className="absolute bottom-1.5 w-6 h-1 bg-slate-600 rounded-full" />
        </div>
      </div>

      {/* Store Buttons */}
      <div className="space-y-2">
        <a
          href="#"
          className="flex items-center gap-2 bg-slate-900 rounded-lg px-3 py-2 hover:bg-slate-800 transition-colors"
        >
          <span className="text-lg">▶</span>
          <div>
            <div className="text-[8px] text-slate-400 leading-tight">Get it on</div>
            <div className="text-[11px] font-bold text-white leading-tight">Google Play</div>
          </div>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 bg-slate-900 rounded-lg px-3 py-2 hover:bg-slate-800 transition-colors"
        >
          <span className="text-lg">🍎</span>
          <div>
            <div className="text-[8px] text-slate-400 leading-tight">Download on the</div>
            <div className="text-[11px] font-bold text-white leading-tight">App Store</div>
          </div>
        </a>
      </div>
    </div>
  );
}