'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/store/authStore'; // 👈 Zustand Store इंपोर्ट किया

import Sidebar from '@/components/dashboard/Sidebar';
import Topbar from '@/components/dashboard/Topbar';
import StatCards from '@/components/dashboard/StatCards';
import AnalyticsCharts from '@/components/dashboard/AnalyticsCharts';
import NavigationGrids from '@/components/dashboard/NavigationGrids';
import PricingCards from '@/components/dashboard/PricingCards';
import RightSidebarWidgets from '@/components/dashboard/RightSidebarWidgets';
import WhyChooseTivraHorizontal from '@/components/dashboard/WhyChooseTivraHorizontal';
import LeadsPage from '@/app/Leads/leadpages';

export default function DashboardPage() {
  const router = useRouter();
  
  // ✅ Zustand हुक का उपयोग
  const { access_token, user, logout } = useAuthStore();
  
  const [metrics, setMetrics] = useState(null);
  const [activePage, setActivePage] = useState('dashboard');
  const [componentLoading, setComponentLoading] = useState(true);

  useEffect(() => {
    // अगर टोकन नहीं है, तो लॉगिन पर रीडायरेक्ट करें
    if (!access_token) {
      router.push('/login');
      return;
    }
    
    setComponentLoading(true);
    fetch('http://127.0.0.1:8000/api/dashboard/metrics/', {
      headers: { Authorization: `Bearer ${access_token}` },
    })
      .then(res => {
        if (res.status === 401) {
          logout();
          router.push('/login');
          throw new Error('Session Expired');
        }
        return res.json();
      })
      .then(d => setMetrics(d))
      .catch(() => {})
      .finally(() => setComponentLoading(false));
  }, [access_token, router, logout]);

  const data = metrics || {
    kpis: {
      total_leads: '25,689',
      total_customers: '8,426',
      whatsapp_sent: '1,28,934',
      open_rate: '45.6%',
      conversion_rate: '16.35%',
      revenue: '2,45,80,900',
    },
    sales_pipeline: {
      new_leads: 25689,
      contacted: 16324,
      qualified: 9125,
      proposal: 4928,
      negotiation: 2450,
      won: 1245,
    },
  };

  if (componentLoading) {
    return (
      <div className="h-screen w-screen bg-slate-900 flex flex-col items-center justify-center text-slate-400 font-sans text-xs tracking-widest gap-3">
        <span className="w-6 h-6 border-2 border-blue-500/40 border-t-blue-500 rounded-full animate-spin" />
        VALIDATING SYSTEM SECURITY TERMINAL...
      </div>
    );
  }

  /* ── Leads page — full width ── */
  if (activePage === 'leads') {
    return (
      <div className="min-h-screen bg-[#F1F5F9] antialiased text-slate-800 font-sans flex">
        <aside className="fixed inset-y-0 left-0 w-64 z-30 bg-[#0F172A] shadow-2xl">
          <Sidebar activePage={activePage} onNavigate={setActivePage} onLogout={logout} />
        </aside>
        <div className="ml-64 flex-1 min-h-screen overflow-y-auto">
          <LeadsPage />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F1F5F9] antialiased text-slate-800 font-sans">
      <aside className="fixed inset-y-0 left-0 w-64 z-30 bg-[#0F172A] shadow-2xl">
        <Sidebar activePage={activePage} onNavigate={setActivePage} onLogout={logout} />
      </aside>

      <aside className="fixed inset-y-0 right-0 w-[300px] z-20 bg-white border-l border-slate-200 shadow-sm overflow-hidden flex flex-col">
        <RightSidebarWidgets />
      </aside>

      <Topbar user={user} />

      <main className="ml-64 mr-[300px] pt-16 min-h-screen">
        <div className="p-4 space-y-4">
          <StatCards kpis={data.kpis} />
          <AnalyticsCharts pipeline={data.sales_pipeline} />
          <NavigationGrids />
          <div className="grid grid-cols-12 gap-4 items-stretch">
            <div className="col-span-9"><PricingCards /></div>
            <div className="col-span-3"><WhyChooseTivraHorizontal /></div>
          </div>
        </div>
      </main>
    </div>
  );
}