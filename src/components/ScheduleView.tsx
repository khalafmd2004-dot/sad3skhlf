import React from 'react';
import { STUDY_PLAN, SUBJECTS } from '../data/planData';
import { calculateDayProgress } from '../utils/storage';
import { CheckCircle2, Clock } from 'lucide-react';

interface ScheduleViewProps {
  completedTaskIds: string[];
  activeDayNumber: number;
  onSelectDay: (dayNumber: number) => void;
}

export const ScheduleView: React.FC<ScheduleViewProps> = ({
  completedTaskIds,
  activeDayNumber,
  onSelectDay,
}) => {
  return (
    <div className="space-y-4 pb-20">
      <div className="flex items-center justify-between bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
        <div>
          <h2 className="text-lg font-black text-slate-100">جدول الـ 20 يومًا الشامل</h2>
          <p className="text-xs text-slate-400 mt-0.5">من 9/8 إلى 28/8 — اضغط على أي يوم لعرض مهامه التفصيلية</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {STUDY_PLAN.map((day) => {
          const { completed, total, percentage, isFullyCompleted } = calculateDayProgress(
            day,
            completedTaskIds
          );
          const isSelected = day.dayNumber === activeDayNumber;

          return (
            <div
              key={day.dayNumber}
              onClick={() => onSelectDay(day.dayNumber)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer active:scale-[0.98] relative ${
                isSelected
                  ? 'bg-indigo-950/40 border-indigo-500 shadow-lg shadow-indigo-500/10'
                  : isFullyCompleted
                  ? 'bg-slate-900/60 border-emerald-500/40 hover:border-emerald-500/70'
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Selected Marker */}
              {isSelected && (
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-indigo-500 text-white text-[10px] font-bold">
                  اليوم المعروض
                </div>
              )}

              {/* Day Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-black text-sm text-slate-100">{day.title}</span>
                  <span className="px-2 py-0.5 rounded-md text-xs font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700">
                    {day.dateStr}
                  </span>
                </div>

                {isFullyCompleted ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : (
                  <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                )}
              </div>

              {/* Progress Bar */}
              <div className="space-y-1 my-2">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>
                    {completed} من {total} مهام
                  </span>
                  <span className="font-bold font-mono text-slate-200">{percentage}%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      isFullyCompleted ? 'bg-emerald-500' : 'bg-indigo-500'
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>

              {/* Subjects Preview Badges */}
              <div className="flex flex-wrap gap-1 mt-3">
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  🧪 الكيمياء
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  🧮 الرياضيات
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-rose-500/10 text-rose-300 border border-rose-500/20">
                  📚 العربي
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
