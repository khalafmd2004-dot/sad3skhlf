import { STUDY_PLAN, SUBJECTS } from '../data/planData';
import { DayPlan, SubjectId, ThemeMode } from '../types';

const COMPLETED_TASKS_KEY = 'khalaf_plan_completed_tasks';
const THEME_KEY = 'khalaf_plan_theme';
const LAST_SELECTED_DAY_KEY = 'khalaf_plan_active_day';

export const getCompletedTaskIds = (): string[] => {
  try {
    const data = localStorage.getItem(COMPLETED_TASKS_KEY);
    if (!data) return [];
    const parsed: string[] = JSON.parse(data);
    const validTaskIds = new Set(getAllTasks().map((t) => t.id));
    return parsed.filter((id) => validTaskIds.has(id));
  } catch (e) {
    console.error('Failed to load completed tasks', e);
    return [];
  }
};

export const saveCompletedTaskIds = (ids: string[]) => {
  try {
    localStorage.setItem(COMPLETED_TASKS_KEY, JSON.stringify(ids));
  } catch (e) {
    console.error('Failed to save completed tasks', e);
  }
};

export const getThemePreference = (): ThemeMode => {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch (e) {
    // fallback
  }
  return 'dark'; // Default Dark Mode as requested
};

export const saveThemePreference = (theme: ThemeMode) => {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (e) {
    console.error('Failed to save theme', e);
  }
};

export const getSavedActiveDayNumber = (): number => {
  try {
    const saved = localStorage.getItem(LAST_SELECTED_DAY_KEY);
    if (saved) {
      const num = parseInt(saved, 10);
      if (num >= 1 && num <= 20) return num;
    }
  } catch (e) {
    // fallback
  }
  return 1;
};

export const saveActiveDayNumber = (dayNumber: number) => {
  try {
    localStorage.setItem(LAST_SELECTED_DAY_KEY, dayNumber.toString());
  } catch (e) {
    console.error('Failed to save active day', e);
  }
};

export const getAllTasks = () => {
  return STUDY_PLAN.flatMap((d) => d.tasks);
};

export const calculateOverallProgress = (completedTaskIds: string[]) => {
  const allTasks = getAllTasks();
  const total = allTasks.length;
  const completedSet = new Set(completedTaskIds);
  const completed = allTasks.filter((t) => completedSet.has(t.id)).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  return { completed, total, percentage, remaining: total - completed };
};

export const calculateDayProgress = (day: DayPlan, completedTaskIds: string[]) => {
  const completedSet = new Set(completedTaskIds);
  const total = day.tasks.length;
  const completed = day.tasks.filter((t) => completedSet.has(t.id)).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  const isFullyCompleted = completed === total && total > 0;
  return { completed, total, percentage, isFullyCompleted };
};

export const calculateSubjectProgress = (subjectId: SubjectId, completedTaskIds: string[]) => {
  const allTasks = getAllTasks().filter((t) => t.subjectId === subjectId);
  const total = allTasks.length;
  const completedSet = new Set(completedTaskIds);
  const completed = allTasks.filter((t) => completedSet.has(t.id)).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  return { completed, total, percentage, remaining: total - completed };
};

export const calculateStreak = (completedTaskIds: string[]) => {
  let streak = 0;
  for (const day of STUDY_PLAN) {
    const { isFullyCompleted } = calculateDayProgress(day, completedTaskIds);
    if (isFullyCompleted) {
      streak += 1;
    } else {
      break;
    }
  }
  return streak;
};

export const calculateRemainingDaysUntilTarget = (): number => {
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const targetStart = new Date(2026, 7, 27); // 27 August 2026 (Month index 7 = August)

  const diffMs = targetStart.getTime() - todayStart.getTime();
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

  return diffDays < 0 ? 0 : diffDays;
};

export const calculateDaysStatus = (completedTaskIds: string[]) => {
  let completedDaysCount = 0;
  for (const day of STUDY_PLAN) {
    const { isFullyCompleted } = calculateDayProgress(day, completedTaskIds);
    if (isFullyCompleted) {
      completedDaysCount += 1;
    }
  }
  return {
    completedDaysCount,
    remainingDaysCount: calculateRemainingDaysUntilTarget(),
    totalDays: STUDY_PLAN.length,
  };
};

export const findLaggingSubject = (completedTaskIds: string[]) => {
  const subjectIds: SubjectId[] = ['chemistry', 'math', 'arabic'];
  const stats = subjectIds.map((id) => {
    const { percentage, completed, total } = calculateSubjectProgress(id, completedTaskIds);
    return {
      id,
      name: SUBJECTS[id].name,
      icon: SUBJECTS[id].icon,
      percentage,
      completed,
      total,
    };
  });

  // Sort ascending by percentage
  stats.sort((a, b) => a.percentage - b.percentage);

  // If all are equal and 100%, no lagging subject
  const allHundred = stats.every((s) => s.percentage === 100);
  if (allHundred) {
    return { name: 'لا يوجد (أكملت جميع المواد 🎉)', percentage: 100, icon: '🌟' };
  }

  // Return the lowest one
  return stats[0];
};

export const getRandomEncouragingMessage = () => {
  const messages = [
    '🔥 خلصت يومك. ممتاز.',
    '💪 يوم آخر انضرب.',
    '🎯 خطوة أقرب للهدف.',
    '⚡ استمر، لا تضيع تعبك.',
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};
