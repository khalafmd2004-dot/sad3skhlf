import React from 'react';
import { ChevronRight, ChevronLeft, Calendar as CalendarIcon } from 'lucide-react';

interface DayNavigationProps {
  currentDayNumber: number; // 1 to 20
  totalDays: number;
  onSelectDay: (dayNumber: number) => void;
}

export const DayNavigation: React.FC<DayNavigationProps> = ({
  currentDayNumber,
  totalDays,
  onSelectDay,
}) => {
  const isFirstDay = currentDayNumber <= 1;
  const isLastDay = currentDayNumber >= totalDays;

  return (
    <div className="flex items-center justify-between gap-2 my-4 bg-slate-900/90 p-2 rounded-2xl border border-slate-800 shadow-md">
      {/* Previous Day Button */}
      <button
        onClick={() => !isFirstDay && onSelectDay(currentDayNumber - 1)}
        disabled={isFirstDay}
        className={`flex items-center gap-1 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-95 ${
          isFirstDay
            ? 'opacity-40 cursor-not-allowed text-slate-500 bg-slate-800/40'
            : 'text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700/60'
        }`}
      >
        <ChevronRight className="w-4 h-4" />
        <span>اليوم السابق</span>
      </button>

      {/* Quick Select Dropdown */}
      <div className="relative flex items-center justify-center">
        <select
          value={currentDayNumber}
          onChange={(e) => onSelectDay(Number(e.target.value))}
          className="appearance-none bg-indigo-500/10 text-indigo-300 font-bold text-xs sm:text-sm py-2 px-3 pr-7 rounded-xl border border-indigo-500/30 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        >
          {Array.from({ length: totalDays }, (_, i) => i + 1).map((d) => (
            <option key={d} value={d} className="bg-slate-900 text-slate-100 font-medium">
              اليوم {d} (
              {d === 1
                ? '7/8'
                : d === 20
                ? '26/8'
                : `${d + 6}/8`}
              )
            </option>
          ))}
        </select>
        <CalendarIcon className="w-3.5 h-3.5 text-indigo-400 absolute left-2 pointer-events-none" />
      </div>

      {/* Next Day Button */}
      <button
        onClick={() => !isLastDay && onSelectDay(currentDayNumber + 1)}
        disabled={isLastDay}
        className={`flex items-center gap-1 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-95 ${
          isLastDay
            ? 'opacity-40 cursor-not-allowed text-slate-500 bg-slate-800/40'
            : 'text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700/60'
        }`}
      >
        <span>اليوم التالي</span>
        <ChevronLeft className="w-4 h-4" />
      </button>
    </div>
  );
};
