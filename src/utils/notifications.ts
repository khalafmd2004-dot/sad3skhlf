// Browser Notification API helper for "خطة خلف"

const REMINDER_ENABLED_KEY = 'khalaf_plan_reminder_enabled';
const REMINDER_TIME_KEY = 'khalaf_plan_reminder_time';
const LAST_REMINDER_DATE_KEY = 'khalaf_plan_last_reminder_date';

export interface ReminderConfig {
  enabled: boolean;
  time: string; // "08:00", "09:00", etc.
}

export const isNotificationSupported = (): boolean => {
  return typeof window !== 'undefined' && 'Notification' in window;
};

export const getNotificationPermission = (): NotificationPermission | 'unsupported' => {
  if (!isNotificationSupported()) return 'unsupported';
  return Notification.permission;
};

export const requestNotificationPermission = async (): Promise<boolean> => {
  if (!isNotificationSupported()) return false;
  try {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  } catch (e) {
    console.error('Error requesting notification permission:', e);
    return false;
  }
};

export const getReminderConfig = (): ReminderConfig => {
  try {
    const enabled = localStorage.getItem(REMINDER_ENABLED_KEY) === 'true';
    const time = localStorage.getItem(REMINDER_TIME_KEY) || '09:00';
    return { enabled, time };
  } catch (e) {
    return { enabled: false, time: '09:00' };
  }
};

export const saveReminderConfig = (config: ReminderConfig) => {
  try {
    localStorage.setItem(REMINDER_ENABLED_KEY, config.enabled.toString());
    localStorage.setItem(REMINDER_TIME_KEY, config.time);
  } catch (e) {
    console.error('Failed to save reminder config', e);
  }
};

export const sendNotification = (title: string, body: string) => {
  if (!isNotificationSupported() || Notification.permission !== 'granted') return;

  try {
    const notification = new Notification(title, {
      body,
      icon: '/icon.svg',
      badge: '/icon.svg',
      dir: 'rtl',
      lang: 'ar',
      tag: 'khalaf-daily-reminder',
    });

    notification.onclick = () => {
      window.focus();
      notification.close();
    };
  } catch (e) {
    console.error('Failed to dispatch Notification:', e);
  }
};

export const checkAndTriggerDailyReminder = () => {
  const config = getReminderConfig();
  if (!config.enabled || getNotificationPermission() !== 'granted') return;

  const now = new Date();
  const currentDateStr = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  const lastDate = localStorage.getItem(LAST_REMINDER_DATE_KEY);

  if (lastDate === currentDateStr) {
    // Already reminded today
    return;
  }

  // Parse configured reminder time
  const [targetHour, targetMinute] = config.time.split(':').map(Number);
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  // Check if current time is equal to or after the target time
  if (currentHour > targetHour || (currentHour === targetHour && currentMinute >= targetMinute)) {
    sendNotification(
      'خطة خلف — 20 يوم للوزاري 📚⚡',
      'تذكير اليوم: حان وقت إنجاز مهام اليوم! لا تؤجل عمل اليوم للغد.'
    );
    try {
      localStorage.setItem(LAST_REMINDER_DATE_KEY, currentDateStr);
    } catch (e) {
      // ignore
    }
  }
};
