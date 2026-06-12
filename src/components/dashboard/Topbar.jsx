// components/Topbar.jsx (पूरी तरह से सुधारा हुआ)
'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, Calendar, MessageSquare, Bell, ChevronDown, Menu, LogOut, User as UserIcon, Settings, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import useAuthStore from '@/store/authStore';

export default function Topbar() {
  const router = useRouter();
  const { user, logout, refresh_token } = useAuthStore();

  // Dropdown States
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Calendar States
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeModal, setActiveModal] = useState(null);
  const [profileFormData, setProfileFormData] = useState({
    full_name: '',
    phone_number: '',
    company_name: ''
  });
  const [isUpdating, setIsUpdating] = useState(false);

  const profileRef = useRef(null);
  const calendarRef = useRef(null);
  const searchRef = useRef(null);

  // User role display logic
  const getUserRoleDisplay = () => {
    if (!user) return null;
    
    if (user.role === 'admin') {
      return <div className="text-[10px] bg-red-100 text-red-600 font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Admin</div>;
    } else if (user.role === 'manager') {
      return <div className="text-[10px] bg-blue-100 text-blue-600 font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Manager</div>;
    }
    return null;
  };

  // Username display logic
  const getUserDisplayName = () => {
    if (!user) return 'User';
    
    if (user.role === 'admin') {
      return 'Admin';
    } else if (user.role === 'manager') {
      return 'Manager';
    } else {
      return user.full_name || user.email?.split('@')[0] || 'User';
    }
  };

  const getAvatarLetter = () => {
    const displayName = getUserDisplayName();
    return displayName.charAt(0).toUpperCase();
  };

  // Calendar functions
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handlePrevYear = () => {
    setCurrentDate(new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), 1));
  };

  const handleNextYear = () => {
    setCurrentDate(new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), 1));
  };

  // Search functionality
  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query.length > 2) {
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        setSearchResults(data.results || []);
      } catch (error) {
        console.error('Search error:', error);
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  };

  // Profile update
  useEffect(() => {
    if (user) {
      setProfileFormData({
        full_name: user.full_name || '',
        phone_number: user.phone_number || '',
        company_name: user.company_name || ''
      });
    }
  }, [user]);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    
    try {
      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileFormData)
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast.success('Profile updated successfully');
        // Update local user data
        useAuthStore.getState().updateUser(data.user);
        setActiveModal(null);
      } else {
        toast.error(data.error || 'Update failed');
      }
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setIsUpdating(false);
    }
  };

  const handleLogout = async () => {
    if (logout) {
      await logout(refresh_token);
    }
    toast.success('Logged out successfully');
    router.push('/login');
  };

  // Outside click handlers
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsCalendarOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Calendar rendering
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const today = new Date();
  
  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  return (
    <header className="fixed top-0 left-64 right-0 z-20 bg-white border-b border-slate-200 h-16 flex items-center px-5 select-none">
      <button className="mr-4 text-slate-500 hover:text-slate-700 flex-shrink-0">
        <Menu size={22} />
      </button>

      <div className="flex-1 text-center hidden md:block">
        <h1 className="text-[18px] lg:text-[20px] font-black text-slate-800 tracking-tight leading-tight whitespace-nowrap">
          ALL-IN-ONE <span className="text-blue-600">AI CRM</span> & <span className="text-blue-600">MARKETING AUTOMATION</span> PLATFORM
        </h1>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0 ml-auto md:ml-4 relative">
        
        {/* Search with functionality */}
        <div className="relative" ref={searchRef}>
          {isSearchOpen && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-slate-200 rounded-xl shadow-xl z-30">
              <input 
                type="text" 
                placeholder="Search leads, tasks, contacts..." 
                className="w-full px-4 py-2.5 text-sm outline-none rounded-xl border-b border-slate-200"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                autoFocus
              />
              {searchResults.length > 0 && (
                <div className="max-h-64 overflow-y-auto">
                  {searchResults.map((result, idx) => (
                    <div key={idx} className="px-4 py-2 hover:bg-slate-50 cursor-pointer text-sm">
                      {result.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100"
          >
            <Search size={18} />
          </button>
        </div>

        {/* Calendar with navigation */}
        <div className="relative" ref={calendarRef}>
          <button 
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100"
          >
            <Calendar size={18} />
          </button>

          {isCalendarOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-white border border-slate-200 rounded-xl shadow-xl p-4 z-30">
              {/* Year Navigation */}
              <div className="flex items-center justify-between mb-3">
                <button onClick={handlePrevYear} className="p-1 hover:bg-slate-100 rounded">
                  <ChevronLeft size={14} />
                </button>
                <span className="text-sm font-semibold text-slate-600">{year}</span>
                <button onClick={handleNextYear} className="p-1 hover:bg-slate-100 rounded">
                  <ChevronRight size={14} />
                </button>
              </div>
              
              {/* Month Navigation */}
              <div className="flex items-center justify-between mb-3">
                <button onClick={handlePrevMonth} className="p-1 hover:bg-slate-100 rounded">
                  <ChevronLeft size={16} />
                </button>
                <span className="text-base font-bold text-slate-800">
                  {currentDate.toLocaleString('default', { month: 'long' })}
                </span>
                <button onClick={handleNextMonth} className="p-1 hover:bg-slate-100 rounded">
                  <ChevronRight size={16} />
                </button>
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-slate-400 mb-2">
                <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {calendarDays.map((day, idx) => (
                  <div key={idx} className={`p-2 rounded-md ${
                    day && day === today.getDate() && 
                    month === today.getMonth() && 
                    year === today.getFullYear() 
                      ? 'bg-blue-600 text-white font-bold' 
                      : day ? 'hover:bg-slate-100 cursor-pointer' : ''
                  }`}>
                    {day || ''}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-500 relative">
          <MessageSquare size={18} />
          <span className="absolute top-0.5 right-0.5 bg-blue-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">8</span>
        </button>

        <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-500 relative">
          <Bell size={18} />
          <span className="absolute top-0.5 right-0.5 bg-red-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">12</span>
        </button>

        <div className="w-px h-8 bg-slate-200 mx-1" />

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <div 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2.5 cursor-pointer hover:bg-slate-50 rounded-lg px-2 py-1.5"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-[15px]">
              {getAvatarLetter()}
            </div>
            <div className="leading-tight hidden sm:block">
              <div className="text-[13px] font-semibold text-slate-800">{getUserDisplayName()}</div>
              {getUserRoleDisplay()}
            </div>
            <ChevronDown size={14} className="text-slate-400" />
          </div>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-xl py-1.5 z-30">
              <div className="px-4 py-2 border-b border-slate-100 mb-1">
                <p className="text-xs text-slate-400">Signed in as</p>
                <p className="text-sm font-semibold text-slate-700 truncate">{user?.email || 'user@crm.com'}</p>
              </div>

              <button 
                onClick={() => { setActiveModal('profile'); setIsProfileOpen(false); }}
                className="w-full px-4 py-2 text-left text-xs text-slate-600 hover:bg-slate-50 flex items-center gap-2"
              >
                <UserIcon size={14} /> My Profile
              </button>

              <button 
                onClick={() => { setActiveModal('settings'); setIsProfileOpen(false); }}
                className="w-full px-4 py-2 text-left text-xs text-slate-600 hover:bg-slate-50 flex items-center gap-2"
              >
                <Settings size={14} /> Settings
              </button>

              <div className="h-px bg-slate-100 my-1" />

              <button onClick={handleLogout} className="w-full px-4 py-2 text-left text-xs text-red-600 hover:bg-red-50 font-semibold flex items-center gap-2">
                <LogOut size={14} /> Sign Out
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Profile Modal with Update Option */}
      {activeModal === 'profile' && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X size={18} />
            </button>
            <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <UserIcon className="text-orange-500" size={20} /> Update Profile
            </h2>
            
            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Full Name</label>
                <input
                  type="text"
                  value={profileFormData.full_name}
                  onChange={(e) => setProfileFormData({...profileFormData, full_name: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Email Address (Cannot be changed)</label>
                <input
                  type="email"
                  value={user?.email || ''}
                  disabled
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 text-slate-500"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={profileFormData.phone_number}
                  onChange={(e) => setProfileFormData({...profileFormData, phone_number: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Company Name</label>
                <input
                  type="text"
                  value={profileFormData.company_name}
                  onChange={(e) => setProfileFormData({...profileFormData, company_name: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Role</label>
                <div className="px-3 py-2 bg-slate-50 rounded-lg text-sm font-semibold capitalize text-blue-600">
                  {user?.role || 'User'}
                </div>
              </div>
              
              <div className="flex gap-3 pt-3">
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg text-sm font-semibold transition-all"
                >
                  {isUpdating ? 'Updating...' : 'Update Profile'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-600 py-2 rounded-lg text-sm font-semibold transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {activeModal === 'settings' && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X size={18} />
            </button>
            <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Settings className="text-blue-600" size={20} /> Workspace Settings
            </h2>
            <p className="text-xs text-slate-500 mb-4">Manage system preferences and configurations below.</p>
            
            <div className="space-y-3">
              <label className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:bg-slate-50 cursor-pointer">
                <span className="text-sm font-medium text-slate-700">Enable Email AI Automation</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
              </label>
              <label className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:bg-slate-50 cursor-pointer">
                <span className="text-sm font-medium text-slate-700">Push Notifications Sound</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
              </label>
              <label className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:bg-slate-50 cursor-pointer">
                <span className="text-sm font-medium text-slate-700">Dark Mode</span>
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
              </label>
            </div>
            <div className="mt-5 flex justify-end">
              <button onClick={() => { toast.success('Settings saved successfully'); setActiveModal(null); }} className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-blue-700">
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}