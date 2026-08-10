import React from 'react';
import {
  calculateOverallProgress,
  calculateDaysStatus,
  calculateStreak,
  calculateSubjectProgress,
  findLaggingSubject,
} from '../utils/storage';
import { SUBJECTS } from '../data/planData';
import { SubjectId } from '../types';
import { Flame, CheckCircle, Clock, AlertTriangle, Award, Target } from 'lucide-react';

interface StatsViewProps {
  completedTaskIds: string[];
}

export const StatsView: React.FC<StatsViewProps> = ({ completedTaskIds }) => {
  const { completed: completedTasks, total: totalTasks, percentage: overallPercent, remaining: remainingTasks } =
    calculateOverallProgress(completedTaskIds);

  const { completedDaysCount, remainingDaysCount, totalDays } = calculateDaysStatus(completedTaskIds);
  const streak = calculateStreak(completedTaskIds);
  const laggingSubject = findLaggingSubject(completedTaskIds);

  const subjectList: SubjectId[] = ['chemistry', 'math', 'arabic', 'physics'];

  return (
    <div className="space-y-4 pb-20">
      {/* Title */}
      <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
        <h2 className="text-lg font-black text-slate-100 flex items-center gap-2">
          <Award className="w-5 h-5 text-indigo-400" />
          <span>إحصائيات الإنجاز والالتزام</span>
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">ملخص تحليلي دقيق لتقدمك في الخطة الدراسية</p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {/* Overall Completion */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/30 col-span-2 sm:col-span-1 shadow-md">
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold mb-1">
            <Target className="w-4 h-4" />
            <span>نسبة الإنجاز الكلية</span>
          </div>
          <div className="text-3xl font-black text-indigo-300 font-mono my-1">{overallPercent}%</div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-2">
            <div className="bg-indigo-500 h-full rounded-full transition-all duration-500" style={{ width: `${overallPercent}%` }} />
          </div>
        </div>

        {/* Consecutive Streak */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-900/30 to-slate-900 border border-amber-500/30 shadow-md">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>الالتزام المتتالي</span>
          </div>
          <div className="text-3xl font-black text-amber-300 font-mono my-1">{streak} أيام</div>
          <p className="text-[11px] text-slate-400">أيام مكتملة متتابعة</p>
        </div>

        {/* Completed Days */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-1">
            <CheckCircle className="w-4 h-4" />
            <span>الأيام المكتملة</span>
          </div>
          <div className="text-2xl font-black text-slate-100 font-mono my-1">
            {completedDaysCount} <span className="text-xs font-normal text-slate-400">من {totalDays}</span>
          </div>
          <p className="text-[11px] text-slate-400">متبقي: {remainingDaysCount} يوم</p>
        </div>

        {/* Completed Tasks */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold mb-1">
            <CheckCircle className="w-4 h-4" />
            <span>المهام المكتملة</span>
          </div>
          <div className="text-2xl font-black text-slate-100 font-mono my-1">
            {completedTasks} <span className="text-xs font-normal text-slate-400">من {totalTasks}</span>
          </div>
          <p className="text-[11px] text-slate-400">متبقي: {remainingTasks} مهمة</p>
        </div>

        {/* Remaining Days */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md col-span-2 sm:col-span-1">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-bold mb-1">
            <Clock className="w-4 h-4" />
            <span>الأيام المتبقية</span>
          </div>
          <div className="text-2xl font-black text-rose-300 font-mono my-1">{remainingDaysCount} يوم</div>
          <p className="text-[11px] text-slate-400">من أصل الخطة الشاملة للوزاري</p>
        </div>
      </div>

      {/* Lagging Subject Warning Banner */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-amber-400 font-bold">أكثر مادة متأخر بها</div>
            <div className="text-sm font-black text-slate-100 mt-0.5 flex items-center gap-1.5">
              <span>{laggingSubject.icon}</span>
              <span>{laggingSubject.name}</span>
              <span className="text-xs font-mono text-amber-400 font-bold">({laggingSubject.percentage}%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subject Detailed Breakdown */}
      <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-4 shadow-md">
        <h3 className="font-bold text-sm text-slate-200">نسبة إنجاز كل مادة بالتفصيل</h3>

        <div className="space-y-3">
          {subjectList.map((id) => {
            const config = SUBJECTS[id];
            const { completed, total, percentage, remaining } = calculateSubjectProgress(
              id,
              completedTaskIds
            );

            return (
              <div key={id} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-bold text-slate-100">
                    <span>{config.icon}</span>
                    <span className={config.colorClass}>{config.name}</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono font-bold">
                    <span className="text-slate-400 text-xs font-normal">
                      ({completed}/{total} مهمة — متبقي {remaining})
                    </span>
                    <span className={config.colorClass}>{percentage}%</span>
                  </div>
                </div>

                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${config.progressBg}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
