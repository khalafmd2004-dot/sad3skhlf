import React from 'react';
import { CheckCircle2, Circle, Sparkles, Check } from 'lucide-react';
import { DayPlan, SubjectId, Task } from '../types';
import { SUBJECTS } from '../data/planData';
import { calculateDayProgress, getRandomEncouragingMessage } from '../utils/storage';

interface DayCardProps {
  day: DayPlan;
  completedTaskIds: string[];
  onToggleTask: (taskId: string) => void;
}

export const DayCard: React.FC<DayCardProps> = ({ day, completedTaskIds, onToggleTask }) => {
  const completedSet = new Set(completedTaskIds);
  const { completed, total, percentage, isFullyCompleted } = calculateDayProgress(
    day,
    completedTaskIds
  );

  // Group tasks by subject
  const groupedTasks: Record<SubjectId, Task[]> = {
    chemistry: day.tasks.filter((t) => t.subjectId === 'chemistry'),
    math: day.tasks.filter((t) => t.subjectId === 'math'),
    arabic: day.tasks.filter((t) => t.subjectId === 'arabic'),
  };

  const subjectOrder: SubjectId[] = ['chemistry', 'math', 'arabic'];

  // Random encouraging message remembered for when completed
  const encouragingMessage = React.useMemo(() => getRandomEncouragingMessage(), [isFullyCompleted]);

  return (
    <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-4 sm:p-6 shadow-xl relative overflow-hidden transition-all">
      {/* Background Accent glow if completed */}
      {isFullyCompleted && (
        <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-amber-500 via-indigo-500 to-emerald-500" />
      )}

      {/* Card Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-black text-slate-100">{day.title}</h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700/60 dir-ltr font-mono">
              {day.dateStr}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {completed} من {total} مهام مكتملة ({percentage}%)
          </p>
        </div>

        {/* Completion Badge */}
        {isFullyCompleted ? (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold animate-bounce">
            <CheckCircle2 className="w-4 h-4" />
            <span>مكتمل</span>
          </div>
        ) : (
          <div className="text-xs font-semibold px-3 py-1.5 rounded-2xl bg-slate-800 text-slate-400 border border-slate-700">
            قيد التقدم
          </div>
        )}
      </div>

      {/* Day Progress bar */}
      <div className="w-full bg-slate-800 h-2 rounded-full mt-4 overflow-hidden">
        <div
          className={`h-full transition-all duration-500 ${
            isFullyCompleted ? 'bg-emerald-500' : 'bg-indigo-500'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Encouraging Banner if finished */}
      {isFullyCompleted && (
        <div className="mt-4 p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-indigo-500/15 to-emerald-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-inner">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{encouragingMessage}</span>
        </div>
      )}

      {/* Subject Groups & Tasks */}
      <div className="mt-5 space-y-5">
        {subjectOrder.map((subjectId) => {
          const tasks = groupedTasks[subjectId];
          if (!tasks || tasks.length === 0) return null;

          const config = SUBJECTS[subjectId];

          return (
            <div key={subjectId} className="space-y-2">
              {/* Subject Title */}
              <div className="flex items-center gap-2 font-bold text-sm text-slate-200">
                <span className="text-base">{config.icon}</span>
                <span className={config.colorClass}>{config.name}</span>
              </div>

              {/* Tasks List */}
              <div className="space-y-2">
                {tasks.map((task) => {
                  const isChecked = completedSet.has(task.id);

                  return (
                    <button
                      key={task.id}
                      onClick={() => onToggleTask(task.id)}
                      className={`w-full text-right flex items-start gap-3 p-3.5 rounded-2xl transition-all duration-200 border active:scale-[0.99] touch-manipulation cursor-pointer ${
                        isChecked
                          ? 'bg-slate-900/40 border-slate-800/80 text-slate-400 opacity-75'
                          : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/60 text-slate-100 hover:border-slate-600'
                      }`}
                    >
                      {/* Checkbox Icon */}
                      <div className="mt-0.5 shrink-0">
                        {isChecked ? (
                          <div className="w-5 h-5 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-lg border-2 border-slate-500/70 hover:border-indigo-400 transition-colors" />
                        )}
                      </div>

                      {/* Task Title */}
                      <span
                        className={`text-xs sm:text-sm font-medium leading-relaxed ${
                          isChecked ? 'line-through text-slate-500' : 'text-slate-100'
                        }`}
                      >
                        {task.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
