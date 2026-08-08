import React from 'react';
import { SUBJECTS } from '../data/planData';
import { calculateSubjectProgress } from '../utils/storage';
import { SubjectId } from '../types';

interface SubjectProgressCardsProps {
  completedTaskIds: string[];
}

export const SubjectProgressCards: React.FC<SubjectProgressCardsProps> = ({ completedTaskIds }) => {
  const subjectList: SubjectId[] = ['chemistry', 'math', 'arabic'];

  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3 my-4">
      {subjectList.map((id) => {
        const config = SUBJECTS[id];
        const { percentage, completed, total } = calculateSubjectProgress(id, completedTaskIds);

        return (
          <div
            key={id}
            className={`p-3.5 rounded-2xl bg-slate-900/80 border ${config.borderClass} shadow-md flex flex-col justify-between`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">{config.icon}</span>
                <span className="font-bold text-sm text-slate-100">{config.name}</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">
                  {completed} / {total} مهمة
                </span>
                <span className={`font-bold font-mono ${config.colorClass}`}>{percentage}%</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden border border-slate-700/40">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${config.progressBg}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
