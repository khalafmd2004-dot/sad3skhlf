import React from 'react';

interface ProgressBarProps {
  percentage: number;
  label?: string;
  sublabel?: string;
  colorClass?: string;
  size?: 'sm' | 'md' | 'lg';
  showPercentText?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  label,
  sublabel,
  colorClass = 'bg-indigo-500',
  size = 'md',
  showPercentText = true,
}) => {
  const heightClasses = {
    sm: 'h-2',
    md: 'h-3.5',
    lg: 'h-5',
  };

  const clampedPercent = Math.min(100, Math.max(0, percentage));

  return (
    <div className="w-full">
      {(label || sublabel || showPercentText) && (
        <div className="flex justify-between items-center mb-1.5 text-xs sm:text-sm font-semibold">
          <div className="flex items-center gap-2">
            {label && <span className="text-slate-200">{label}</span>}
            {sublabel && <span className="text-slate-400 text-xs font-normal">{sublabel}</span>}
          </div>
          {showPercentText && (
            <span className="text-indigo-400 font-bold font-mono dir-ltr">{clampedPercent}%</span>
          )}
        </div>
      )}

      <div className={`w-full bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/50 ${heightClasses[size]}`}>
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${colorClass} shadow-sm`}
          style={{ width: `${clampedPercent}%` }}
        />
      </div>
    </div>
  );
};
