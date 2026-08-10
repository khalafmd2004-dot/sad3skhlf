export type SubjectId = 'physics' | 'chemistry' | 'math' | 'arabic';

export interface Task {
  id: string; // e.g., "day1-physics-1"
  subjectId: SubjectId;
  subjectName: string; // e.g. "الفيزياء"
  title: string; // e.g. "الفصل الأول — كلاميات"
}

export interface DayPlan {
  dayNumber: number; // 1 to 20
  dateStr: string; // "7/8", "8/8", etc.
  title: string; // "اليوم الأول", "اليوم الثاني", etc.
  tasks: Task[];
}

export interface SubjectConfig {
  id: SubjectId;
  name: string;
  icon: string; // Lucide icon or emoji
  colorClass: string;
  bgClass: string;
  borderClass: string;
  badgeClass: string;
  progressBg: string;
}

export type ActiveTab = 'today' | 'schedule' | 'stats' | 'settings';
export type ThemeMode = 'dark' | 'light';
