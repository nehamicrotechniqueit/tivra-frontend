'use client';
import { useState } from 'react';
import {
  Search, Filter, Plus, Upload, Download, MoreHorizontal,
  Eye, Edit2, Trash2, Phone, Mail, ChevronLeft, ChevronRight,
  ChevronDown, Calendar, Users, UserCheck, UserX, Zap, Target,
  TrendingUp, Bell, BarChart2, Shield, RefreshCw, Link2
} from 'lucide-react';

/* ─── Lead Sources (left panel) ─── */
const leadSources = [
  { name: 'Google Ads',                  bg: '#fff',     border: true, dot: '#4285F4', svg: <svg viewBox="0 0 24 24" width="16" height="16"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg> },
  { name: 'Meta (Facebook & Instagram) Ads', bg: '#1877F2', dot: '#1877F2', svg: <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12.073h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12.073h2.773l-.443 2.89h-2.33v6.988C20.343 21.128 24 16.991 24 12.073z"/></svg> },
  { name: 'WhatsApp Campaigns',           bg: '#25D366', dot: '#25D366', svg: <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
  { name: 'Website Forms',               bg: '#8B5CF6', dot: '#8B5CF6', svg: <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"/></svg> },
  { name: 'Landing Pages',               bg: '#F97316', dot: '#F97316', svg: <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg> },
  { name: 'Referral Leads',              bg: '#06B6D4', dot: '#06B6D4', svg: <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg> },
  { name: 'Direct Walk-ins',             bg: '#10B981', dot: '#10B981', svg: <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/></svg> },
  { name: 'Telecalling',                 bg: '#EAB308', dot: '#EAB308', svg: <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg> },
  { name: 'Email Campaigns',             bg: '#EF4444', dot: '#EF4444', svg: <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg> },
  { name: 'SMS Campaigns',               bg: '#3B82F6', dot: '#3B82F6', svg: <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg> },
  { name: 'LinkedIn Leads',              bg: '#0A66C2', dot: '#0A66C2', svg: <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { name: 'Justdial Leads',              bg: '#FF6600', dot: '#FF6600', svg: <span className="text-white font-black text-[10px] leading-none">Jd</span> },
  { name: 'IndiaMART Leads',             bg: '#fff',    border: true, dot: '#e63027', svg: <span className="text-red-600 font-black text-[9px] leading-none">iM</span> },
  { name: 'TradeIndia Leads',            bg: '#fff',    border: true, dot: '#0066cc', svg: <span className="text-blue-700 font-black text-[9px] leading-none">TI</span> },
  { name: 'Manual Lead Entry',           bg: '#64748B', dot: '#64748B', svg: <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg> },
  { name: 'API Integrations',            bg: '#7C3AED', dot: '#7C3AED', svg: <span className="text-white font-black text-[9px] leading-none">API</span> },
  { name: 'Webhook Leads',               bg: '#334155', dot: '#334155', svg: <span className="text-white font-bold text-[9px] leading-none">{'{}'}</span> },
  { name: 'QR Code Leads',               bg: '#0F172A', dot: '#0F172A', svg: <svg viewBox="0 0 24 24" fill="white" width="14" height="14"><path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM13 13h2v2h-2zM15 15h2v2h-2zM13 17h2v2h-2zM17 13h2v2h-2zM19 15h2v2h-2zM17 17h2v2h-2zM19 19h2v2h-2zM13 19h2v2h-2z"/></svg> },
  { name: 'Social Media Organic',        bg: '#EC4899', dot: '#EC4899', svg: <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg> },
  { name: 'Chatbot Generated Leads',     bg: '#10B981', dot: '#10B981', svg: <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg> },
];

/* ─── Status config ─── */
const statusConfig = {
  New:         { bg: 'bg-blue-100',   text: 'text-blue-700',   label: 'New'         },
  Contacted:   { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Contacted'   },
  Qualified:   { bg: 'bg-green-100',  text: 'text-green-700',  label: 'Qualified'   },
  Proposal:    { bg: 'bg-purple-100', text: 'text-purple-700', label: 'Proposal'    },
  Negotiation: { bg: 'bg-orange-100', text: 'text-orange-700', label: 'Negotiation' },
  Won:         { bg: 'bg-emerald-100',text: 'text-emerald-700',label: 'Won'         },
  Lost:        { bg: 'bg-red-100',    text: 'text-red-600',    label: 'Lost'        },
};

/* ─── Lead rows ─── */
const leads = [
  { id:1, name:'Rahul Sharma',  company:'Tech Solutions Pvt. Ltd.', phone:'+91 98765 43210', email:'rahul.sharma@email.com', source:'Google Ads',     sourceIcon:'google',  score:85, status:'New',         assigned:'Vikash Kumar', time:'2 min ago',   avatarBg:'bg-blue-500',   initials:'RS' },
  { id:2, name:'Priya Singh',   company:'NextGen Marketing',        phone:'+91 87654 32109', email:'priya.singh@email.com',  source:'Meta Ads',       sourceIcon:'meta',    score:72, status:'Contacted',   assigned:'Anam Verma',   time:'10 min ago',  avatarBg:'bg-pink-500',   initials:'PS' },
  { id:3, name:'Vikash Kumar',  company:'Bright Future Ltd.',       phone:'+91 76543 21098', email:'vikash.kumar@email.com', source:'Website Form',   sourceIcon:'website', score:92, status:'Qualified',   assigned:'Rahul Sharma', time:'30 min ago',  avatarBg:'bg-green-500',  initials:'VK' },
  { id:4, name:'Anam Shaikh',   company:'Creative Agency',          phone:'+91 65432 10987', email:'anam.shaikh@email.com',  source:'WhatsApp',       sourceIcon:'whatsapp',score:68, status:'Proposal',    assigned:'Priya Singh',  time:'1 hour ago',  avatarBg:'bg-orange-500', initials:'AS' },
  { id:5, name:'Aman Mishra',   company:'Digital World',            phone:'+91 54321 09876', email:'aman.mishra@email.com',  source:'Referral',       sourceIcon:'referral',score:78, status:'Negotiation', assigned:'Vikash Kumar', time:'2 hours ago', avatarBg:'bg-purple-500', initials:'AM' },
  { id:6, name:'Neha Verma',    company:'Verma Enterprises',        phone:'+91 43210 98765', email:'neha.verma@email.com',   source:'Email Campaign', sourceIcon:'email',   score:95, status:'Won',         assigned:'Anam Verma',   time:'3 hours ago', avatarBg:'bg-teal-500',   initials:'NV' },
  { id:7, name:'Rohit Soni',    company:'R.S. Industries',          phone:'+91 32109 87654', email:'rohit.soni@email.com',   source:'SMS Campaign',   sourceIcon:'sms',     score:35, status:'Lost',        assigned:'Priya Singh',  time:'5 hours ago', avatarBg:'bg-red-500',    initials:'RS' },
];

/* ─── Source icon renderer ─── */
function SourceIcon({ type, name }) {
  const map = {
    google:   { bg:'#fff', border:true, svg:<svg viewBox="0 0 24 24" width="13" height="13"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg> },
    meta:     { bg:'#1877F2', svg:<svg viewBox="0 0 24 24" fill="white" width="13" height="13"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12.073h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12.073h2.773l-.443 2.89h-2.33v6.988C20.343 21.128 24 16.991 24 12.073z"/></svg> },
    website:  { bg:'#8B5CF6', svg:<svg viewBox="0 0 24 24" fill="white" width="13" height="13"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/></svg> },
    whatsapp: { bg:'#25D366', svg:<svg viewBox="0 0 24 24" fill="white" width="13" height="13"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
    referral: { bg:'#06B6D4', svg:<svg viewBox="0 0 24 24" fill="white" width="13" height="13"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg> },
    email:    { bg:'#EF4444', svg:<svg viewBox="0 0 24 24" fill="white" width="13" height="13"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg> },
    sms:      { bg:'#3B82F6', svg:<svg viewBox="0 0 24 24" fill="white" width="13" height="13"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg> },
  };
  const cfg = map[type] || { bg:'#94A3B8', svg:<span className="text-white text-[9px]">?</span> };
  return (
    <div className="flex items-center gap-1.5">
      <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 ${cfg.border ? 'border border-slate-200' : ''}`} style={{ background: cfg.bg }}>
        {cfg.svg}
      </div>
      <span className="text-[11px] text-slate-700 font-medium">{name}</span>
    </div>
  );
}

/* ─── Score badge ─── */
function ScoreBadge({ score }) {
  const color = score >= 80 ? 'text-green-600 bg-green-50' : score >= 60 ? 'text-orange-600 bg-orange-50' : 'text-red-600 bg-red-50';
  return <span className={`inline-flex items-center justify-center w-8 h-6 rounded-lg text-[12px] font-bold ${color}`}>{score}</span>;
}

/* ─── Bottom feature cards ─── */
const featureCards = [
  { icon: <svg viewBox="0 0 24 24" fill="white" width="20" height="20"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/></svg>, bg:'bg-blue-500',   title:'Lead Capture',         desc:'Capture leads from 25+ sources in real-time' },
  { icon: <svg viewBox="0 0 24 24" fill="white" width="20" height="20"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>, bg:'bg-purple-500', title:'AI Lead Scoring',       desc:'AI-powered scoring to identify hot leads' },
  { icon: <svg viewBox="0 0 24 24" fill="white" width="20" height="20"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>, bg:'bg-orange-500',  title:'Auto Assignment',       desc:'Automatically assign leads to the right team' },
  { icon: <svg viewBox="0 0 24 24" fill="white" width="20" height="20"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>,              bg:'bg-red-500',     title:'Duplicate Detection',   desc:'Smart duplicate check to avoid data duplication' },
  { icon: <svg viewBox="0 0 24 24" fill="white" width="20" height="20"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>, bg:'bg-blue-600',    title:'Follow Up Reminders',   desc:'Never miss a follow up with smart reminders' },
  { icon: <svg viewBox="0 0 24 24" fill="white" width="20" height="20"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>,                bg:'bg-green-500',   title:'Analytics & ROI',       desc:'Track performance and ROI by lead source' },
];

/* ─── MAIN COMPONENT ─── */
export default function LeadsPage() {
  const [activeTab, setActiveTab]     = useState('All Leads');
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const tabs = ['All Leads', 'My Leads', 'Unassigned', 'Follow Ups', 'Hot Leads'];

  const toggleRow = (id) =>
    setSelectedRows(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const toggleAll = () =>
    setSelectedRows(selectedRows.length === leads.length ? [] : leads.map(l => l.id));

  return (
    <div className="flex flex-col min-h-screen bg-[#F1F5F9]">

      {/* ══════════════════════════════════════════
          TOP HEADER BANNER — "AI-POWERED LEAD MANAGEMENT"
      ══════════════════════════════════════════ */}
      <div className="bg-white border-b border-slate-200 py-4 px-6 text-center">
        <h1 className="text-[22px] font-black text-slate-800 tracking-tight leading-tight">
          AI-POWERED LEAD MANAGEMENT
        </h1>
        <p className="text-[18px] font-black mt-0.5 tracking-wide">
          <span className="text-blue-600">CAPTURE</span>
          <span className="text-slate-400 mx-2">•</span>
          <span className="text-purple-600">QUALIFY</span>
          <span className="text-slate-400 mx-2">•</span>
          <span className="text-green-500">CONVERT</span>
        </p>
        {/* 4 feature pills */}
        <div className="flex items-center justify-center gap-3 mt-3 flex-wrap">
          {[
            { icon: <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" className="text-blue-600"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/></svg>, label:'Smart Capture', color:'text-blue-600 bg-blue-50 border-blue-100' },
            { icon: <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" className="text-purple-600"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>, label:'AI Lead Scoring', color:'text-purple-600 bg-purple-50 border-purple-100' },
            { icon: <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" className="text-orange-600"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>, label:'Auto Assignment', color:'text-orange-600 bg-orange-50 border-orange-100' },
            { icon: <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" className="text-green-600"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>, label:'Real-time Tracking', color:'text-green-600 bg-green-50 border-green-100' },
          ].map(p => (
            <div key={p.label} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[12px] font-semibold ${p.color}`}>
              {p.icon}{p.label}
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MAIN 3-COLUMN BODY
      ══════════════════════════════════════════ */}
      <div className="flex flex-1 overflow-hidden">

        {/* ── LEFT: Lead Sources Panel ── */}
        <div className="w-[200px] flex-shrink-0 bg-white border-r border-slate-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 px-3 py-2.5">
            <h2 className="text-white font-black text-[13px] text-center tracking-wide">LEAD SOURCES</h2>
          </div>
          {/* Scrollable list */}
          <div className="flex-1 overflow-y-auto py-1">
            {leadSources.map((src, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-[5px] hover:bg-slate-50 cursor-pointer group transition-colors">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm ${src.border ? 'border border-slate-200' : ''}`}
                  style={{ background: src.gradientId ? 'linear-gradient(135deg,#E1306C,#833AB4,#F56040)' : src.bg }}
                >
                  {src.svg}
                </div>
                <span className="text-[11px] text-slate-700 font-medium leading-tight flex-1 truncate">{src.name}</span>
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: src.dot }} />
              </div>
            ))}
          </div>
        </div>

        {/* ── CENTRE: Main content ── */}
        <div className="flex-1 overflow-y-auto flex flex-col">

          {/* ── Section header: Lead Management title + buttons ── */}
          <div className="bg-white border-b border-slate-200 px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 24 24" fill="white" width="20" height="20"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              </div>
              <div>
                <h2 className="text-[17px] font-black text-slate-800">Lead Management</h2>
                <p className="text-[11px] text-slate-500">Manage, Track &amp; Convert Your Leads into Customers</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-3 py-2 border border-slate-200 rounded-lg text-[12px] font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
                <Upload size={13} /> Import Leads
              </button>
              <button className="flex items-center gap-1.5 px-3 py-2 border border-slate-200 rounded-lg text-[12px] font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
                <Download size={13} /> Export Leads
              </button>
              <button className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-[12px] font-bold transition-colors shadow-sm">
                <Plus size={13} strokeWidth={3} /> Add Lead
              </button>
            </div>
          </div>

          {/* ── KPI stat cards row ── */}
          <div className="px-5 py-3 bg-white border-b border-slate-100">
            <div className="grid grid-cols-5 gap-3">
              {[
                { icon: <svg viewBox="0 0 24 24" fill="white" width="18" height="18"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>, bg:'bg-blue-500',   val:'25,689', label:'Total Leads',  change:'↑ 18.6%' },
                { icon: <svg viewBox="0 0 24 24" fill="white" width="18" height="18"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>,                bg:'bg-green-500',  val:'3,987',  label:'New Leads',   change:'↑ 16.3%' },
                { icon: <svg viewBox="0 0 24 24" fill="white" width="18" height="18"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>, bg:'bg-yellow-500', val:'2,743',  label:'Contacted',   change:'↑ 22.7%' },
                { icon: <svg viewBox="0 0 24 24" fill="white" width="18" height="18"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>,                bg:'bg-orange-500', val:'1,824',  label:'Qualified',   change:'↑ 8.3%'  },
                { icon: <svg viewBox="0 0 24 24" fill="white" width="18" height="18"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>, bg:'bg-purple-500', val:'932',    label:'Converted',   change:'↑ 28.4%' },
              ].map(k => (
                <div key={k.label} className="flex items-center gap-2.5 bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <div className={`w-9 h-9 rounded-xl ${k.bg} flex items-center justify-center flex-shrink-0 shadow-sm`}>{k.icon}</div>
                  <div>
                    <div className="text-[18px] font-black text-slate-800 leading-none">{k.val}</div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5">{k.label}</div>
                    <div className="text-[9px] text-green-500 font-semibold">{k.change} vs last 30 days</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Tabs + Filter bar ── */}
          <div className="bg-white border-b border-slate-200 px-5">
            <div className="flex items-center justify-between">
              {/* Tabs */}
              <div className="flex items-center gap-1 pt-2">
                {tabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-2 text-[12px] font-semibold rounded-t-lg border-b-2 transition-all whitespace-nowrap ${
                      activeTab === tab
                        ? 'border-blue-600 text-blue-600 bg-blue-50'
                        : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {/* Filter controls */}
              <div className="flex items-center gap-2 py-2">
                <button className="flex items-center gap-1.5 px-2.5 py-1.5 border border-slate-200 rounded-lg text-[11px] text-slate-600 hover:bg-slate-50">
                  <Calendar size={12} /> This Month <ChevronDown size={11} />
                </button>
                <button className="flex items-center gap-1.5 px-2.5 py-1.5 border border-slate-200 rounded-lg text-[11px] text-slate-600 hover:bg-slate-50">
                  <Filter size={12} /> Filter
                </button>
                <button className="flex items-center gap-1.5 px-2.5 py-1.5 border border-slate-200 rounded-lg text-[11px] text-slate-600 hover:bg-slate-50">
                  <Users size={12} /> Segment <ChevronDown size={11} />
                </button>
                <div className="relative">
                  <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search leads..."
                    className="pl-7 pr-3 py-1.5 border border-slate-200 rounded-lg text-[11px] text-slate-600 w-36 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Data Table ── */}
          <div className="flex-1 bg-white mx-0">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-4 py-2.5 w-8">
                    <input type="checkbox"
                      checked={selectedRows.length === leads.length}
                      onChange={toggleAll}
                      className="w-3.5 h-3.5 rounded accent-blue-600 cursor-pointer"
                    />
                  </th>
                  {['Lead Name','Contact Details','Source','Lead Score','Status','Assigned To','Created At','Actions'].map(h => (
                    <th key={h} className="px-3 py-2.5 text-[10.5px] font-bold text-slate-500 uppercase tracking-wide whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, i) => {
                  const st = statusConfig[lead.status] || statusConfig.New;
                  return (
                    <tr
                      key={lead.id}
                      className={`border-b border-slate-100 hover:bg-blue-50/40 transition-colors cursor-pointer ${selectedRows.includes(lead.id) ? 'bg-blue-50' : i % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}
                    >
                      {/* Checkbox */}
                      <td className="px-4 py-2.5">
                        <input type="checkbox"
                          checked={selectedRows.includes(lead.id)}
                          onChange={() => toggleRow(lead.id)}
                          className="w-3.5 h-3.5 rounded accent-blue-600 cursor-pointer"
                        />
                      </td>

                      {/* Lead Name */}
                      <td className="px-3 py-2.5">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-full ${lead.avatarBg} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>
                            {lead.initials}
                          </div>
                          <div>
                            <div className="text-[12px] font-bold text-slate-800 whitespace-nowrap">{lead.name}</div>
                            <div className="text-[10px] text-slate-500 whitespace-nowrap">{lead.company}</div>
                          </div>
                        </div>
                      </td>

                      {/* Contact */}
                      <td className="px-3 py-2.5">
                        <div className="flex items-center gap-1 mb-0.5">
                          <Phone size={10} className="text-green-500 flex-shrink-0" />
                          <span className="text-[11px] text-slate-700 whitespace-nowrap">{lead.phone}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Mail size={10} className="text-blue-500 flex-shrink-0" />
                          <span className="text-[11px] text-slate-500 whitespace-nowrap">{lead.email}</span>
                        </div>
                      </td>

                      {/* Source */}
                      <td className="px-3 py-2.5">
                        <SourceIcon type={lead.sourceIcon} name={lead.source} />
                      </td>

                      {/* Score */}
                      <td className="px-3 py-2.5">
                        <ScoreBadge score={lead.score} />
                      </td>

                      {/* Status */}
                      <td className="px-3 py-2.5">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] font-bold ${st.bg} ${st.text}`}>
                          {st.label}
                        </span>
                      </td>

                      {/* Assigned */}
                      <td className="px-3 py-2.5">
                        <div className="flex items-center gap-1.5">
                          <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-600">
                            {lead.assigned.split(' ').map(w => w[0]).join('')}
                          </div>
                          <span className="text-[11px] text-slate-700 whitespace-nowrap">{lead.assigned}</span>
                        </div>
                      </td>

                      {/* Time */}
                      <td className="px-3 py-2.5">
                        <span className="text-[11px] text-slate-500 whitespace-nowrap">{lead.time}</span>
                      </td>

                      {/* Actions */}
                      <td className="px-3 py-2.5">
                        <div className="flex items-center gap-1">
                          <button className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-slate-100 text-slate-400 hover:text-blue-600 transition-colors">
                            <Eye size={13} />
                          </button>
                          <button className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-slate-100 text-slate-400 hover:text-green-600 transition-colors">
                            <Edit2 size={12} />
                          </button>
                          <button className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-slate-100 text-slate-400 hover:text-red-500 transition-colors">
                            <MoreHorizontal size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* ── Pagination ── */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100 bg-white">
              <span className="text-[11px] text-slate-500">Showing 1 to 7 of 25,689 leads</span>
              <div className="flex items-center gap-1">
                <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-40" disabled={currentPage === 1} onClick={() => setCurrentPage(p => Math.max(1, p-1))}>
                  <ChevronLeft size={14} />
                </button>
                {[1, 2, 3].map(p => (
                  <button key={p} onClick={() => setCurrentPage(p)}
                    className={`w-7 h-7 flex items-center justify-center rounded-lg border text-[12px] font-semibold transition-colors ${currentPage === p ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                    {p}
                  </button>
                ))}
                <span className="text-slate-400 px-1 text-[12px]">...</span>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 text-[12px] font-semibold text-slate-600 hover:bg-slate-50">100</button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50" onClick={() => setCurrentPage(p => p+1)}>
                  <ChevronRight size={14} />
                </button>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-slate-500">10 / page</span>
                <ChevronDown size={12} className="text-slate-400" />
              </div>
            </div>
          </div>

          {/* ── 6 Feature bottom cards ── */}
          <div className="grid grid-cols-6 gap-3 p-4 bg-[#F1F5F9] border-t border-slate-200">
            {featureCards.map(fc => (
              <div key={fc.title} className="bg-white rounded-xl border border-slate-100 p-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className={`w-8 h-8 rounded-xl ${fc.bg} flex items-center justify-center flex-shrink-0 shadow-sm`}>{fc.icon}</div>
                  <span className="text-[12px] font-bold text-slate-800 leading-tight">{fc.title}</span>
                </div>
                <p className="text-[10px] text-slate-500 leading-snug">{fc.desc}</p>
              </div>
            ))}
          </div>

          {/* ── Bottom status bar ── */}
          <div className="bg-[#1E293B] px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-6">
              {[
                { icon: <Zap size={13} className="text-yellow-400" />, label: 'Real-time Sync' },
                { icon: <Shield size={13} className="text-green-400" />, label: 'Secure & Reliable' },
                { icon: <Users size={13} className="text-blue-400" />, label: 'Team Collaboration' },
                { icon: <Target size={13} className="text-purple-400" />, label: 'Data Driven Decisions' },
              ].map(b => (
                <div key={b.label} className="flex items-center gap-1.5">
                  {b.icon}
                  <span className="text-[11px] text-slate-300 font-medium">{b.label}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-xl">
              <svg viewBox="0 0 24 24" fill="white" width="14" height="14"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
              <span className="text-white text-[12px] font-bold whitespace-nowrap">Turn More Leads into Customers</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: 25+ Connected Sources panel ── */}
        <div className="w-[220px] flex-shrink-0 bg-white border-l border-slate-200 flex flex-col overflow-hidden">
          {/* Top widget */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-4 flex items-center gap-3">
            <div>
              <div className="text-white text-[30px] font-black leading-none">25+</div>
              <div className="text-indigo-200 text-[10px] font-bold uppercase tracking-wider leading-tight">LEAD SOURCES<br/>CONNECTED</div>
            </div>
            <div className="ml-auto w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Link2 size={20} className="text-white" />
            </div>
          </div>

          {/* Sources list */}
          <div className="flex-1 overflow-y-auto py-2">
            {leadSources.map((src, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-[5px] hover:bg-slate-50 cursor-pointer transition-colors">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: src.dot }} />
                <div
                  className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${src.border ? 'border border-slate-200' : ''}`}
                  style={{ background: src.bg }}
                >
                  {src.svg}
                </div>
                <span className="text-[10.5px] text-slate-700 font-medium leading-tight truncate">{src.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}