"use client";

import React from 'react';
// Agar lucide-react installed nahi hai to run karein: npm i lucide-react
import { 
  Facebook, 
  Instagram, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  GitFork, 
  Activity,
  Plus
} from 'lucide-react';

// 1. DYNAMIC DATA OBJECT (Ise aap API ya props se bhi pass kar sakte hain)
const initialDashboardData = {
  pipelineStats: {
    totalLeads: 1420,
    activePipelines: 4,
    conversionRate: "24.5%"
  },
  pipelines: [
    { 
      id: "pipe-1", 
      title: "Lead Generation", 
      stage: "Top of Funnel",
      count: 540, 
      color: "border-l-blue-500",
      bgColor: "bg-blue-50/40"
    },
    { 
      id: "pipe-2", 
      title: "In Conversation", 
      stage: "Nurturing",
      count: 320, 
      color: "border-l-purple-500",
      bgColor: "bg-purple-50/40"
    },
    { 
      id: "pipe-3", 
      title: "Proposal Sent", 
      stage: "Negotiation",
      count: 185, 
      color: "border-l-amber-500",
      bgColor: "bg-amber-50/40"
    },
    { 
      id: "pipe-4", 
      title: "Deals Closed", 
      stage: "Won",
      count: 375, 
      color: "border-l-emerald-500",
      bgColor: "bg-emerald-50/40"
    }
  ],
  integrations: [
    { 
      id: "int-fb",
      name: "Facebook", 
      type: "Social Media / Ads",
      connected: true, 
      lastSynced: "2 mins ago"
    },
    { 
      id: "int-insta",
      name: "Instagram", 
      type: "Social Media / DM",
      connected: true, 
      lastSynced: "Just now"
    },
    { 
      id: "int-wa",
      name: "WhatsApp Business", 
      type: "Messaging",
      connected: false, 
      lastSynced: "Never"
    }
  ]
};

export default function CompleteDynamicDashboard({ dashboardData = initialDashboardData }) {
  
  // Icon Mapping Helper Function for Integrations
  const getIntegrationIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'facebook':
        return {
          Icon: Facebook,
          classes: "bg-blue-100 text-blue-600 border-blue-200"
        };
      case 'instagram':
        return {
          Icon: Instagram,
          classes: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white border-transparent"
        };
      default:
        return {
          Icon: Layers,
          classes: "bg-gray-100 text-gray-600 border-gray-200"
        };
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 lg:p-10 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Workspace Dashboard</h1>
            <p className="text-sm text-slate-500 mt-1">Manage your active pipelines, dynamic flows, and channel integrations.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white hover:bg-slate-800 rounded-xl text-sm font-medium transition-all shadow-sm">
              <Plus className="w-4 h-4" /> Add Integration
            </button>
          </div>
        </div>

        {/* ================= STATS OVERVIEW ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Leads</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">{dashboardData.pipelineStats.totalLeads}</h3>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><Activity className="w-5 h-5" /></div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Active Pipelines</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">{dashboardData.pipelineStats.activePipelines}</h3>
            </div>
            <div className="p-3 bg-purple-50 text-purple-600 rounded-lg"><GitFork className="w-5 h-5" /></div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Conversion Rate</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">{dashboardData.pipelineStats.conversionRate}</h3>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg"><CheckCircle2 className="w-5 h-5" /></div>
          </div>
        </div>

        {/* ================= DYNAMIC SALES PIPELINES SECTION ================= */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-slate-100 rounded-md text-slate-700">
                <GitFork className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Sales Pipelines Workflow</h2>
            </div>
            <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
              {dashboardData.pipelines.length} Active Steps
            </span>
          </div>

          {/* Connected Grid/Flow layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {dashboardData.pipelines.map((pipeline, index) => (
              <div 
                key={pipeline.id} 
                className={`relative bg-white border border-slate-100 border-l-4 ${pipeline.color} p-5 rounded-xl shadow-sm hover:shadow-md transition-all group`}
              >
                <div className="flex flex-col h-full justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      {pipeline.stage}
                    </span>
                    <h4 className="font-semibold text-slate-800 group-hover:text-slate-950 transition-colors">
                      {pipeline.title}
                    </h4>
                  </div>
                  
                  <div className="flex items-baseline justify-between pt-2">
                    <span className="text-3xl font-extrabold text-slate-900">{pipeline.count}</span>
                    <span className={`text-[11px] font-medium px-2 py-0.5 rounded ${pipeline.bgColor}`}>
                      Step {index + 1}
                    </span>
                  </div>
                </div>

                {/* Flow indicator icon between cards (only on large screens, except the last item) */}
                {index < dashboardData.pipelines.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 bg-white border border-slate-100 shadow-sm p-1 rounded-full text-slate-300 group-hover:text-slate-500 transition-colors">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ================= DYNAMIC INTEGRATIONS SECTION ================= */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-slate-100 rounded-md text-slate-700">
              <Layers className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Connected Integrations & Channels</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dashboardData.integrations.map((integration) => {
              const iconData = getIntegrationIcon(integration.name);
              const IntegrationIcon = iconData.Icon;

              return (
                <div 
                  key={integration.id} 
                  className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between hover:border-slate-200 transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3.5">
                      {/* Dynamic Brand Icon */}
                      <div className={`p-3 rounded-xl border flex items-center justify-center shadow-sm ${iconData.classes}`}>
                        <IntegrationIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base">{integration.name}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">{integration.type}</p>
                      </div>
                    </div>

                    {/* Dynamic Status Pill */}
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md border ${
                      integration.connected 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                        : 'bg-slate-50 text-slate-400 border-slate-100'
                    }`}>
                      {integration.connected ? 'Active' : 'Offline'}
                    </span>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-500">
                    <span>Sync: {integration.lastSynced}</span>
                    <button className="flex items-center gap-1 font-semibold text-slate-700 hover:text-slate-900 group-hover:translate-x-0.5 transition-transform">
                      Configure <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}