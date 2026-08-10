import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { Sun, Moon, RotateCcw, Info, Calendar, Smartphone, CheckCircle, ShieldCheck, Bell, BellOff, Send, Clock } from 'lucide-react';
import { ConfirmationModal } from './ConfirmationModal';
import { STUDY_PLAN } from '../data/planData';
import {
  getReminderConfig,
  saveReminderConfig,
  requestNotificationPermission,
  sendNotification,
  getNotificationPermission,
  ReminderConfig,
} from '../utils/notifications';

interface SettingsViewProps {
  theme: ThemeMode;
  activeDayNumber: number;
  onToggleTheme: () => void;
  onSelectDay: (dayNumber: number) => void;
  onResetProgress: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  theme,
  activeDayNumber,
  onToggleTheme,
  onSelectDay,
  onResetProgress,
}) => {
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [reminderConfig, setReminderConfig] = useState<ReminderConfig>(() => getReminderConfig());
  const [permissionState, setPermissionState] = useState(getNotificationPermission());
  const [notificationMsg, setNotificationMsg] = useState<string | null>(null);

  const handleToggleReminder = async () => {
    if (!reminderConfig.enabled) {
      // Request permission if enabling
      const granted = await requestNotificationPermission();
      setPermissionState(getNotificationPermission());

      if (granted) {
        const newConfig = { ...reminderConfig, enabled: true };
        setReminderConfig(newConfig);
        saveReminderConfig(newConfig);
        setNotificationMsg('تم تفعيل التنبيهات اليومية بنجاح!');
      } else {
        setNotificationMsg('الرجاء السماح بالإشعارات في إعدادات المتصفح/الهاتف أولاً.');
      }
    } else {
      const newConfig = { ...reminderConfig, enabled: false };
      setReminderConfig(newConfig);
      saveReminderConfig(newConfig);
      setNotificationMsg('تم إيقاف التنبيهات اليومية.');
    }

    setTimeout(() => setNotificationMsg(null), 4000);
  };

  const handleChangeTime = (time: string) => {
    const newConfig = { ...reminderConfig, time };
    setReminderConfig(newConfig);
    saveReminderConfig(newConfig);
  };

  const handleTestNotification = () => {
    if (permissionState !== 'granted') {
      setNotificationMsg('الرجاء السماح بالإشعارات في المتصفح أولاً.');
      setTimeout(() => setNotificationMsg(null), 4000);
      return;
    }
    sendNotification(
      'تنبيه تجريبي — خطة خلف للوزاري 🔔',
      'التنبيهات اليومية تعمل بنجاح! سيتم تنبيهك يومياً في الوقت المحدد.'
    );
    setNotificationMsg('تم إرسال إشعار تجريبي.');
    setTimeout(() => setNotificationMsg(null), 4000);
  };

  return (
    <div className="space-y-4 pb-20">
      {/* Title */}
      <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
        <h2 className="text-lg font-black text-slate-100">الإعدادات والتحكم</h2>
        <p className="text-xs text-slate-400 mt-0.5">خصّص التطبيق وادر تقدمك الدراسي بسهولة</p>
      </div>

      {/* Theme Settings */}
      <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-3 shadow-md">
        <h3 className="font-bold text-sm text-slate-200">مظهر التطبيق (Theme)</h3>

        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800">
          <div className="flex items-center gap-2.5">
            {theme === 'dark' ? (
              <Moon className="w-5 h-5 text-indigo-400" />
            ) : (
              <Sun className="w-5 h-5 text-amber-400" />
            )}
            <div>
              <div className="text-xs font-bold text-slate-100">
                {theme === 'dark' ? 'الوضع الداكن (Dark Mode)' : 'الوضع الفاتح (Light Mode)'}
              </div>
              <div className="text-[11px] text-slate-400">
                {theme === 'dark' ? 'افتراضي ومريح للعينين أثناء الدراسة' : 'إضاءة عالية وقراءة ناصعة'}
              </div>
            </div>
          </div>

          <button
            onClick={onToggleTheme}
            className="px-3.5 py-2 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/30 text-xs font-bold transition-all active:scale-95"
          >
            تبديل المظهر
          </button>
        </div>
      </div>

      {/* Daily Notification Reminder Settings */}
      <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-3 shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-sm text-slate-200 flex items-center gap-2">
            <Bell className="w-4 h-4 text-amber-400" />
            <span>التذكير اليومي (Notification API)</span>
          </h3>
          {reminderConfig.enabled && (
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
              مفعّل
            </span>
          )}
        </div>

        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              {reminderConfig.enabled ? (
                <Bell className="w-5 h-5 text-emerald-400" />
              ) : (
                <BellOff className="w-5 h-5 text-slate-500" />
              )}
              <div>
                <div className="text-xs font-bold text-slate-100">تنبيه يومي لبدء الدراسة</div>
                <div className="text-[11px] text-slate-400">تنبيه المتصفح / PWA بمهام اليوم</div>
              </div>
            </div>

            <button
              onClick={handleToggleReminder}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 border ${
                reminderConfig.enabled
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/30'
                  : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30 hover:bg-indigo-500/30'
              }`}
            >
              {reminderConfig.enabled ? 'إيقاف التنبيه' : 'تفعيل التنبيه'}
            </button>
          </div>

          {/* Time picker & test button if enabled */}
          {reminderConfig.enabled && (
            <div className="pt-2 border-t border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>وقت التذكير اليومي:</span>
                </div>
                <select
                  value={reminderConfig.time}
                  onChange={(e) => handleChangeTime(e.target.value)}
                  className="bg-slate-900 text-indigo-300 font-mono font-bold text-xs border border-slate-700 rounded-xl py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="07:00">07:00 صباحاً</option>
                  <option value="08:00">08:00 صباحاً</option>
                  <option value="09:00">09:00 صباحاً</option>
                  <option value="10:00">10:00 صباحاً</option>
                  <option value="12:00">12:00 ظهراً</option>
                  <option value="16:00">04:00 عصراً</option>
                  <option value="18:00">06:00 مساءً</option>
                  <option value="20:00">08:00 مساءً</option>
                  <option value="22:00">10:00 مساءً</option>
                </select>
              </div>

              <button
                onClick={handleTestNotification}
                className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-indigo-400" />
                <span>إرسال إشعار تجريبي الآن</span>
              </button>
            </div>
          )}

          {notificationMsg && (
            <div className="text-[11px] font-bold text-amber-400 bg-amber-500/10 p-2 rounded-lg border border-amber-500/20 text-center animate-fadeIn">
              {notificationMsg}
            </div>
          )}
        </div>
      </div>

      {/* Quick Jump */}
      <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-3 shadow-md">
        <h3 className="font-bold text-sm text-slate-200">الانتقال السريع لليوم</h3>

        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-5 h-5 text-indigo-400" />
            <div>
              <div className="text-xs font-bold text-slate-100">اختر اليوم الدراسي</div>
              <div className="text-[11px] text-slate-400">اليوم المظاهر حاليًا: اليوم {activeDayNumber}</div>
            </div>
          </div>

          <select
            value={activeDayNumber}
            onChange={(e) => onSelectDay(Number(e.target.value))}
            className="bg-slate-900 text-slate-100 border border-slate-700 text-xs font-bold rounded-xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {Array.from({ length: STUDY_PLAN.length }, (_, i) => i + 1).map((d) => (
              <option key={d} value={d}>
                اليوم {d} ({STUDY_PLAN[d - 1]?.dateStr})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Reset Progress */}
      <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-3 shadow-md">
        <h3 className="font-bold text-sm text-slate-200">إعادة ضبط التقدم</h3>

        <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-3">
          <div className="flex items-center gap-2.5 text-rose-300">
            <RotateCcw className="w-5 h-5 shrink-0" />
            <div className="text-xs leading-relaxed">
              تصفير كافة المهام المكتملة والبدء من جديد. هذا الخيار يحذف التقدم من ذاكرة الهاتف المحلية.
            </div>
          </div>

          <button
            onClick={() => setIsResetModalOpen(true)}
            className="w-full py-2.5 rounded-xl bg-rose-600/90 hover:bg-rose-600 text-white font-bold text-xs shadow-lg shadow-rose-600/20 active:scale-98 transition-all"
          >
            إعادة ضبط التقدم الكلي
          </button>
        </div>
      </div>

      {/* App Information */}
      <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-3 shadow-md">
        <div className="flex items-center gap-2 text-indigo-400">
          <Info className="w-5 h-5" />
          <h3 className="font-bold text-sm text-slate-100">معلومات التطبيق</h3>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2 text-xs text-slate-300 leading-relaxed">
          <div className="font-black text-slate-100 text-sm">خطة خلف — الخطة الوزارية الشاملة</div>
          <p>تطبيق إدارة وتتبع الجدول المكثف للامتحانات الوزارية (من 10/8 إلى 28/8).</p>

          <div className="pt-2 border-t border-slate-800 space-y-1.5 text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>يعمل بدون إنترنت (Offline LocalStorage & Notification API)</span>
            </div>
            <div className="flex items-center gap-1.5 text-cyan-400">
              <Smartphone className="w-4 h-4" />
              <span>متوافق تمامًا مع جميع الأجهزة والمستعرضات</span>
            </div>
            <div className="flex items-center gap-1.5 text-indigo-400">
              <CheckCircle className="w-4 h-4" />
              <span>تمت مراجعة الخطة والمنهاج بدقة لجميع الأيام (بدون الفصل 3 فيزياء، 3 رياضيات، 6و7 كيمياء)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal for Reset */}
      <ConfirmationModal
        isOpen={isResetModalOpen}
        title="إعادة ضبط التقدم"
        message={`هل أنت متأكد؟\nسيتم حذف جميع المهام المكتملة ولا يمكن التراجع.`}
        confirmLabel="نعم، احذف التقدم"
        cancelLabel="إلغاء"
        onConfirm={onResetProgress}
        onClose={() => setIsResetModalOpen(false)}
      />
    </div>
  );
};

