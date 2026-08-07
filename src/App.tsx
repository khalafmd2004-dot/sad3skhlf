import React, { useState, useEffect } from 'react';
import { ActiveTab, ThemeMode } from './types';
import { STUDY_PLAN } from './data/planData';
import {
  getCompletedTaskIds,
  saveCompletedTaskIds,
  getThemePreference,
  saveThemePreference,
  getSavedActiveDayNumber,
  saveActiveDayNumber,
  calculateOverallProgress,
  calculateStreak,
  calculateDaysStatus,
} from './utils/storage';
import { checkAndTriggerDailyReminder } from './utils/notifications';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { ProgressBar } from './components/ProgressBar';
import { DayCard } from './components/DayCard';
import { DayNavigation } from './components/DayNavigation';
import { SubjectProgressCards } from './components/SubjectProgressCards';
import { ScheduleView } from './components/ScheduleView';
import { StatsView } from './components/StatsView';
import { SettingsView } from './components/SettingsView';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('today');
  const [completedTaskIds, setCompletedTaskIds] = useState<string[]>(() => getCompletedTaskIds());
  const [activeDayNumber, setActiveDayNumber] = useState<number>(() => getSavedActiveDayNumber());
  const [theme, setTheme] = useState<ThemeMode>(() => getThemePreference());

  // Apply theme to html tag
  useEffect(() => {
    saveThemePreference(theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Daily Notification check interval
  useEffect(() => {
    checkAndTriggerDailyReminder();
    const interval = setInterval(() => {
      checkAndTriggerDailyReminder();
    }, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  // Persist task completions
  useEffect(() => {
    saveCompletedTaskIds(completedTaskIds);
  }, [completedTaskIds]);

  // Persist active day
  useEffect(() => {
    saveActiveDayNumber(activeDayNumber);
  }, [activeDayNumber]);

  const handleToggleTask = (taskId: string) => {
    setCompletedTaskIds((prev) => {
      const set = new Set(prev);
      if (set.has(taskId)) {
        set.delete(taskId);
      } else {
        set.add(taskId);
      }
      return Array.from(set);
    });
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSelectDay = (dayNum: number) => {
    if (dayNum >= 1 && dayNum <= STUDY_PLAN.length) {
      setActiveDayNumber(dayNum);
      setActiveTab('today');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleResetProgress = () => {
    setCompletedTaskIds([]);
    saveCompletedTaskIds([]);
  };

  // Calculations for Today View Banner
  const currentDayPlan = STUDY_PLAN.find((d) => d.dayNumber === activeDayNumber) || STUDY_PLAN[0];
  const { percentage: overallPercentage } = calculateOverallProgress(completedTaskIds);
  const { remainingDaysCount } = calculateDaysStatus(completedTaskIds);
  const streak = calculateStreak(completedTaskIds);

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'}`}>
      {/* Header */}
      <Header streak={streak} theme={theme} onToggleTheme={handleToggleTheme} />

      {/* Main Container */}
      <main className="flex-1 max-w-2xl w-full mx-auto px-4 pt-4 pb-24">
        {/* TAB 1: TODAY (مهام اليوم) */}
        {activeTab === 'today' && (
          <div className="space-y-4 animate-fadeIn">
            {/* Top Summary Banner */}
            <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-4 sm:p-5 shadow-lg space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm font-black">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs sm:text-sm">
                    اليوم {currentDayPlan.dayNumber} من 20
                  </span>
                </div>
                <div className="text-slate-400 font-medium">
                  وباقي: <span className="text-amber-400 font-bold font-mono">{remainingDaysCount}</span> يوم
                </div>
              </div>

              {/* Overall Progress Bar */}
              <ProgressBar
                percentage={overallPercentage}
                label="نسبة الإنجاز الكلية"
                colorClass="bg-indigo-500"
                size="md"
              />
            </div>

            {/* Day Navigation */}
            <DayNavigation
              currentDayNumber={activeDayNumber}
              totalDays={STUDY_PLAN.length}
              onSelectDay={handleSelectDay}
            />

            {/* Current Day Task Card */}
            <DayCard
              day={currentDayPlan}
              completedTaskIds={completedTaskIds}
              onToggleTask={handleToggleTask}
            />

            {/* Subject Progress Overview Cards */}
            <div className="mt-6">
              <h3 className="font-bold text-sm text-slate-300 mb-2 px-1">نسبة إنجاز المواد الأربعة</h3>
              <SubjectProgressCards completedTaskIds={completedTaskIds} />
            </div>
          </div>
        )}

        {/* TAB 2: SCHEDULE (الجدول) */}
        {activeTab === 'schedule' && (
          <ScheduleView
            completedTaskIds={completedTaskIds}
            activeDayNumber={activeDayNumber}
            onSelectDay={handleSelectDay}
          />
        )}

        {/* TAB 3: STATS (الإحصائيات) */}
        {activeTab === 'stats' && <StatsView completedTaskIds={completedTaskIds} />}

        {/* TAB 4: SETTINGS (الإعدادات) */}
        {activeTab === 'settings' && (
          <SettingsView
            theme={theme}
            activeDayNumber={activeDayNumber}
            onToggleTheme={handleToggleTheme}
            onSelectDay={handleSelectDay}
            onResetProgress={handleResetProgress}
          />
        )}
      </main>

      {/* Bottom Touch Navbar */}
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
