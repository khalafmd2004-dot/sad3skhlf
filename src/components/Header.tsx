import React from 'react';
import { Flame, Moon, Sun } from 'lucide-react';
import { ThemeMode } from '../types';

interface HeaderProps {
  streak: number;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ streak, theme, onToggleTheme }) => {
  return (
    <header className="sticky top-0 z-30 bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-800 px-4 py-3 shadow-md">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        {/* App Title */}
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-indigo-400 tracking-tight flex items-center gap-2">
            خطة خلف
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            الخطة الشاملة للوزاري (10/8 – 28/8)
          </p>
        </div>

        {/* Right side stats & controls */}
        <div className="flex items-center gap-3">
          {/* Streak Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold shadow-sm">
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-pulse" />
            <span>{streak} يوم التزام</span>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label="تبديل المظهر"
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors active:scale-95 border border-slate-700/60"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-400" />}
          </button>
        </div>
      </div>
    </header>
  );
};
