import React from 'react';
import { Calendar, CheckSquare, BarChart2, Settings } from 'lucide-react';
import { ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const tabs: { id: ActiveTab; label: string; icon: React.ReactNode }[] = [
    { id: 'today', label: 'مهام اليوم', icon: <CheckSquare className="w-5 h-5" /> },
    { id: 'schedule', label: 'الجدول', icon: <Calendar className="w-5 h-5" /> },
    { id: 'stats', label: 'الإحصائيات', icon: <BarChart2 className="w-5 h-5" /> },
    { id: 'settings', label: 'الإعدادات', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 pb-safe pt-2 px-3 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-4 gap-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center py-2 px-1 rounded-2xl transition-all duration-200 active:scale-95 ${
                isActive
                  ? 'text-indigo-400 bg-indigo-500/10 font-bold border border-indigo-500/20'
                  : 'text-slate-400 hover:text-slate-200 font-medium'
              }`}
            >
              {tab.icon}
              <span className="text-[11px] mt-1 leading-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
