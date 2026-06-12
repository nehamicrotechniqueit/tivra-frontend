'use client';
import { useState } from 'react';
import {
  LayoutDashboard, Users, GitBranch, UserCheck, Handshake, Filter,
  MessageSquare, Mail, Phone, Zap, Globe, ClipboardList,
  Target, TrendingUp, BarChart2, LayoutGrid, FileText,
  Wrench, Puzzle, UsersRound, Settings, CreditCard,
  ChevronDown, MessageCircle, PhoneCall, Inbox, Bot
} from 'lucide-react';

const NavItem = ({ icon: Icon, label, badge, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-2.5 px-3 py-[7px] rounded-lg cursor-pointer group transition-all
      ${active ? 'bg-orange-500 text-white' : 'text-slate-400 hover:bg-slate-700/50 hover:text-white'}`}
  >
    {Icon && <Icon size={15} className="flex-shrink-0" />}
    <span className="text-[12.5px] font-medium flex-1">{label}</span>
    {badge && (
      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full
        ${badge === 'New' ? 'bg-green-500 text-white' :
          badge === 'Hot' ? 'bg-red-500 text-white' :
          badge === '99+' ? 'bg-red-500 text-white' :
          'bg-blue-500 text-white'}`}>
        {badge}
      </span>
    )}
  </div>
);

const SectionLabel = ({ label }) => (
  <div className="px-3 pt-4 pb-1">
    <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">{label}</span>
  </div>
);

export default function Sidebar({ activePage, onNavigate, onLogout }) {
  return (
    <div className="h-full flex flex-col bg-[#0F172A] overflow-y-auto scrollbar-hide">
      {/* Logo */}
      <div className="px-4 py-4 flex items-center gap-3 border-b border-slate-700/50">
        <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
          <span className="text-white font-black text-lg">T</span>
        </div>
        <div>
          <div className="text-white font-black text-xl tracking-wide">TIVRA</div>
          <div className="text-slate-400 text-[9px] tracking-widest">CONNECT • SHARE • PERFORM</div>
        </div>
      </div>

      <nav className="flex-1 px-2 py-2 space-y-0.5">
        <NavItem icon={LayoutDashboard} label="Dashboard" active={activePage === 'dashboard'} onClick={() => onNavigate('dashboard')} />

        <SectionLabel label="Lead Management" />
        <NavItem icon={Users}     label="Leads"     active={activePage === 'leads'}     onClick={() => onNavigate('leads')} />
        <NavItem icon={GitBranch} label="Sources"   active={activePage === 'sources'}   onClick={() => onNavigate('sources')} />
        <NavItem icon={UserCheck} label="Customers" active={activePage === 'customers'} onClick={() => onNavigate('customers')} />
        <NavItem icon={Handshake} label="Deals"     active={activePage === 'deals'}     onClick={() => onNavigate('deals')} />
        <NavItem icon={Filter}    label="Pipeline"  active={activePage === 'pipeline'}  onClick={() => onNavigate('pipeline')} />

        <SectionLabel label="Marketing" />
        <NavItem icon={MessageCircle} label="WhatsApp"       badge="New" active={activePage === 'whatsapp'}   onClick={() => onNavigate('whatsapp')} />
        <NavItem icon={Mail}          label="Email Campaigns"            active={activePage === 'email'}       onClick={() => onNavigate('email')} />
        <NavItem icon={MessageSquare} label="SMS Campaigns"              active={activePage === 'sms'}         onClick={() => onNavigate('sms')} />
        <NavItem icon={Zap}           label="Automation"                 active={activePage === 'automation'}  onClick={() => onNavigate('automation')} />
        <NavItem icon={Globe}         label="Landing Pages"              active={activePage === 'landing'}     onClick={() => onNavigate('landing')} />
        <NavItem icon={ClipboardList} label="Forms & Surveys"            active={activePage === 'forms'}       onClick={() => onNavigate('forms')} />

        <SectionLabel label="Ads Management" />
        <NavItem icon={Target}    label="Meta Ads"     active={activePage === 'meta-ads'}   onClick={() => onNavigate('meta-ads')} />
        <NavItem icon={TrendingUp}label="Google Ads"   active={activePage === 'google-ads'} onClick={() => onNavigate('google-ads')} />
        <NavItem icon={BarChart2} label="Ad Analytics" active={activePage === 'ad-analytics'} onClick={() => onNavigate('ad-analytics')} />

        <SectionLabel label="Communication" />
        <NavItem icon={Inbox}         label="Team Inbox" badge="99+" active={activePage === 'inbox'}      onClick={() => onNavigate('inbox')} />
        <NavItem icon={MessageSquare} label="Live Chat"              active={activePage === 'live-chat'}  onClick={() => onNavigate('live-chat')} />
        <NavItem icon={PhoneCall}     label="Call Logs"              active={activePage === 'call-logs'}  onClick={() => onNavigate('call-logs')} />

        <SectionLabel label="Reports & Analytics" />
        <NavItem icon={LayoutGrid} label="Dashboards" active={activePage === 'dashboards'} onClick={() => onNavigate('dashboards')} />
        <NavItem icon={FileText}   label="Reports"    active={activePage === 'reports'}    onClick={() => onNavigate('reports')} />

        <SectionLabel label="Tools & Settings" />
        <NavItem icon={Bot}        label="AI Tools"      badge="Hot" active={activePage === 'ai-tools'}     onClick={() => onNavigate('ai-tools')} />
        <NavItem icon={Puzzle}     label="Integrations"              active={activePage === 'integrations'}  onClick={() => onNavigate('integrations')} />
        <NavItem icon={UsersRound} label="Team"                      active={activePage === 'team'}          onClick={() => onNavigate('team')} />
        <NavItem icon={Settings}   label="Settings"                  active={activePage === 'settings'}      onClick={() => onNavigate('settings')} />
        <NavItem icon={CreditCard} label="Billing & Plan"            active={activePage === 'billing'}       onClick={() => onNavigate('billing')} />
      </nav>
    </div>
  );
}