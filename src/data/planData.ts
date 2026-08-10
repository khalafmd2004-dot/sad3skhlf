import { DayPlan, SubjectConfig, SubjectId } from '../types';

export const SUBJECTS: Record<SubjectId, SubjectConfig> = {
  physics: {
    id: 'physics',
    name: 'الفيزياء',
    icon: '⚡',
    colorClass: 'text-amber-400',
    bgClass: 'bg-amber-500/10 dark:bg-amber-500/15',
    borderClass: 'border-amber-500/30',
    badgeClass: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
    progressBg: 'bg-amber-500',
  },
  chemistry: {
    id: 'chemistry',
    name: 'الكيمياء',
    icon: '🧪',
    colorClass: 'text-emerald-400',
    bgClass: 'bg-emerald-500/10 dark:bg-emerald-500/15',
    borderClass: 'border-emerald-500/30',
    badgeClass: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
    progressBg: 'bg-emerald-500',
  },
  math: {
    id: 'math',
    name: 'الرياضيات',
    icon: '📐',
    colorClass: 'text-cyan-400',
    bgClass: 'bg-cyan-500/10 dark:bg-cyan-500/15',
    borderClass: 'border-cyan-500/30',
    badgeClass: 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30',
    progressBg: 'bg-cyan-500',
  },
  arabic: {
    id: 'arabic',
    name: 'اللغة العربية',
    icon: '📚',
    colorClass: 'text-rose-400',
    bgClass: 'bg-rose-500/10 dark:bg-rose-500/15',
    borderClass: 'border-rose-500/30',
    badgeClass: 'bg-rose-500/20 text-rose-300 border border-rose-500/30',
    progressBg: 'bg-rose-500',
  },
};

export const ENCOURAGING_MESSAGES = [
  '🔥 ممتاز جداً! أتممت مهام اليوم بنجاح.',
  '💪 خطوة أخرى نحو التفوق والوزاري!',
  '🌟 إنجاز رائع! استمر بهذه الهمة العالية.',
  '⚡ يوم آخر ينتهي بالإنجاز والتفوق.',
  '🎯 استمر، كل يوم يقرّبك أكثر من هدفك.',
];

const dayNumbersInArabic = [
  'الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس',
  'السادس', 'السابع', 'الثامن', 'التاسع', 'العاشر',
  'الحادي عشر', 'الثاني عشر', 'الثالث عشر', 'الرابع عشر', 'الخامس عشر',
  'السادس عشر', 'السابع عشر', 'الثامن عشر', 'التاسع عشر'
];

export const STUDY_PLAN: DayPlan[] = [
  // Day 1: 10/8
  {
    dayNumber: 1,
    dateStr: '10/8',
    title: `اليوم ${dayNumbersInArabic[0]}`,
    tasks: [
      { id: 'd1-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الأول — كلاميات' },
      { id: 'd1-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الأول — كلاميات (الجزء الأول)' },
      { id: 'd1-chem-2', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الأول — مسائل (الجزء الأول)' },
      { id: 'd1-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الأساسيات — الجزء الأول' },
      { id: 'd1-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — النفي — الجزء الأول' },
      { id: 'd1-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — الجواهري' },
    ],
  },
  // Day 2: 11/8
  {
    dayNumber: 2,
    dateStr: '11/8',
    title: `اليوم ${dayNumbersInArabic[1]}`,
    tasks: [
      { id: 'd2-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الأول — مسائل' },
      { id: 'd2-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الأول — كلاميات (الجزء الثاني والختام)' },
      { id: 'd2-chem-2', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الأول — مسائل (الجزء الثاني والختام)' },
      { id: 'd2-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الأساسيات — الجزء الثاني + تثبيت' },
      { id: 'd2-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — النفي — الجزء الثاني' },
      { id: 'd2-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — حافظ إبراهيم' },
    ],
  },
  // Day 3: 12/8
  {
    dayNumber: 3,
    dateStr: '12/8',
    title: `اليوم ${dayNumbersInArabic[2]}`,
    tasks: [
      { id: 'd3-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الأول — مسائل + وزاريات' },
      { id: 'd3-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الثاني — كلاميات (الجزء الأول)' },
      { id: 'd3-chem-2', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الثاني — مسائل (الجزء الأول)' },
      { id: 'd3-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الأول — دراسة وحل' },
      { id: 'd3-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — النفي — الجزء الثالث' },
      { id: 'd3-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — معروف الرصافي' },
    ],
  },
  // Day 4: 13/8
  {
    dayNumber: 4,
    dateStr: '13/8',
    title: `اليوم ${dayNumbersInArabic[3]}`,
    tasks: [
      { id: 'd4-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الثاني — كلاميات' },
      { id: 'd4-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الثاني — كلاميات (الجزء الثاني والختام)' },
      { id: 'd4-chem-2', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الثاني — مسائل (الجزء الثاني والختام)' },
      { id: 'd4-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الأول — إكمال + مسائل' },
      { id: 'd4-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — التقديم والتأخير' },
      { id: 'd4-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — القصة' },
    ],
  },
  // Day 5: 14/8
  {
    dayNumber: 5,
    dateStr: '14/8',
    title: `اليوم ${dayNumbersInArabic[4]}`,
    tasks: [
      { id: 'd5-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الثاني — مسائل' },
      { id: 'd5-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الثالث — كلاميات (الجزء الأول)' },
      { id: 'd5-chem-2', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الثالث — مسائل (الجزء الأول)' },
      { id: 'd5-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الأول — مراجعة + وزاريات' },
      { id: 'd5-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — النداء' },
      { id: 'd5-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — ميخائيل نعيمة' },
    ],
  },
  // Day 6: 15/8
  {
    dayNumber: 6,
    dateStr: '15/8',
    title: `اليوم ${dayNumbersInArabic[5]}`,
    tasks: [
      { id: 'd6-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الثاني — مسائل + وزاريات' },
      { id: 'd6-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الثالث — كلاميات (الجزء الثاني والختام)' },
      { id: 'd6-chem-2', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الثالث — مسائل (الجزء الثاني والختام)' },
      { id: 'd6-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الثاني — دراسة وحل — الجزء الأول' },
      { id: 'd6-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — التوكيد — الجزء الأول' },
      { id: 'd6-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — نازك الملائكة' },
    ],
  },
  // Day 7: 16/8
  {
    dayNumber: 7,
    dateStr: '16/8',
    title: `اليوم ${dayNumbersInArabic[6]}`,
    tasks: [
      { id: 'd7-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الرابع — مسائل + نشاط' },
      { id: 'd7-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الرابع — كلاميات (الجزء الأول)' },
      { id: 'd7-chem-2', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الرابع — مسائل (الجزء الأول)' },
      { id: 'd7-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الثاني — دراسة وحل — الجزء الثاني' },
      { id: 'd7-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — التوكيد — الجزء الثاني' },
      { id: 'd7-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — الشعر المسرحي' },
    ],
  },
  // Day 8: 17/8
  {
    dayNumber: 8,
    dateStr: '17/8',
    title: `اليوم ${dayNumbersInArabic[7]}`,
    tasks: [
      { id: 'd8-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الخامس — مسائل + نشاط' },
      { id: 'd8-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الرابع — كلاميات (الجزء الثاني والختام)' },
      { id: 'd8-chem-2', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الرابع — مسائل (الجزء الثاني والختام)' },
      { id: 'd8-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الثاني — دراسة وحل — الجزء الثالث' },
      { id: 'd8-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — المدح والذم — الجزء الأول' },
      { id: 'd8-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — القضية الفلسطينية' },
    ],
  },
  // Day 9: 18/8
  {
    dayNumber: 9,
    dateStr: '18/8',
    title: `اليوم ${dayNumbersInArabic[8]}`,
    tasks: [
      { id: 'd9-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل السادس — مسائل + نشاط' },
      { id: 'd9-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الخامس — كلاميات (الجزء الأول)' },
      { id: 'd9-chem-2', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الخامس — مسائل (الجزء الأول)' },
      { id: 'd9-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الثاني — مراجعة + وزاريات' },
      { id: 'd9-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — المدح والذم — الجزء الثاني' },
      { id: 'd9-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — مدرسة المهجر' },
    ],
  },
  // Day 10: 19/8
  {
    dayNumber: 10,
    dateStr: '19/8',
    title: `اليوم ${dayNumbersInArabic[9]}`,
    tasks: [
      { id: 'd10-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل السابع — مسائل + نشاط' },
      { id: 'd10-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الخامس — كلاميات (الجزء الثاني والختام)' },
      { id: 'd10-chem-2', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الخامس — مسائل (الجزء الثاني والختام)' },
      { id: 'd10-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'يوم احتياط / تعويض' },
      { id: 'd10-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — التعجب' },
      { id: 'd10-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — لويس' },
    ],
  },
  // Day 11: 20/8
  {
    dayNumber: 11,
    dateStr: '20/8',
    title: `اليوم ${dayNumbersInArabic[10]}`,
    tasks: [
      { id: 'd11-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الثامن — مسائل + نشاط' },
      { id: 'd11-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'وزاريات الفصل الأول — كلاميات' },
      { id: 'd11-chem-2', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'وزاريات الفصل الأول — مسائل' },
      { id: 'd11-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الرابع — الجزء الأول' },
      { id: 'd11-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — التمني + الترجي — الجزء الأول' },
      { id: 'd11-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — الشعر الحر' },
    ],
  },
  // Day 12: 21/8
  {
    dayNumber: 12,
    dateStr: '21/8',
    title: `اليوم ${dayNumbersInArabic[11]}`,
    tasks: [
      { id: 'd12-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'وزاريات الفيزياء — الفصل الأول (تركيز مكثف)' },
      { id: 'd12-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'وزاريات الفصل الثاني — كلاميات' },
      { id: 'd12-chem-2', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'وزاريات الفصل الثاني — مسائل' },
      { id: 'd12-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الرابع — الجزء الثاني' },
      { id: 'd12-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — التمني + الترجي — الجزء الثاني + العرض والتحضيض' },
      { id: 'd12-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — النثر وفنونه' },
    ],
  },
  // Day 13: 22/8
  {
    dayNumber: 13,
    dateStr: '22/8',
    title: `اليوم ${dayNumbersInArabic[12]}`,
    tasks: [
      { id: 'd13-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'وزاريات الفيزياء — الفصل الثاني (تركيز مكثف)' },
      { id: 'd13-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'وزاريات الفصل الثالث — كلاميات' },
      { id: 'd13-chem-2', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'وزاريات الفصل الثالث — مسائل' },
      { id: 'd13-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الرابع — الجزء الثالث' },
      { id: 'd13-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'مراجعة القواعد — النفي + التقديم والتأخير' },
      { id: 'd13-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — فؤاد التكرلي' },
    ],
  },
  // Day 14: 23/8
  {
    dayNumber: 14,
    dateStr: '23/8',
    title: `اليوم ${dayNumbersInArabic[13]}`,
    tasks: [
      { id: 'd14-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'وزاريات الفيزياء — الفصل الرابع والفصل الخامس' },
      { id: 'd14-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'وزاريات الفصل الرابع — كلاميات' },
      { id: 'd14-chem-2', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'وزاريات الفصل الرابع — مسائل' },
      { id: 'd14-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الرابع — إكمال + مسائل' },
      { id: 'd14-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'مراجعة القواعد — النداء + التوكيد' },
      { id: 'd14-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — الجواهري + حافظ إبراهيم' },
    ],
  },
  // Day 15: 24/8
  {
    dayNumber: 15,
    dateStr: '24/8',
    title: `اليوم ${dayNumbersInArabic[14]}`,
    tasks: [
      { id: 'd15-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'وزاريات الفيزياء — الفصل السادس والفصل السابع' },
      { id: 'd15-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'وزاريات الفصل الخامس — كلاميات' },
      { id: 'd15-chem-2', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'وزاريات الفصل الخامس — مسائل' },
      { id: 'd15-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الرابع — مراجعة + وزاريات' },
      { id: 'd15-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'مراجعة القواعد — المدح والذم + التعجب' },
      { id: 'd15-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — معروف الرصافي + القصة' },
    ],
  },
  // Day 16: 25/8
  {
    dayNumber: 16,
    dateStr: '25/8',
    title: `اليوم ${dayNumbersInArabic[15]}`,
    tasks: [
      { id: 'd16-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'وزاريات الفيزياء — الفصل الثامن والأنشطة المهمة' },
      { id: 'd16-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'وزاريات الفصول 1 و2 الشاملة — كلاميات' },
      { id: 'd16-chem-2', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'وزاريات الفصول 1 و2 الشاملة — مسائل' },
      { id: 'd16-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الخامس — كامل' },
      { id: 'd16-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'مراجعة القواعد — التمني + الترجي + العرض والتحضيض' },
      { id: 'd16-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — ميخائيل نعيمة + نازك الملائكة' },
    ],
  },
  // Day 17: 26/8
  {
    dayNumber: 17,
    dateStr: '26/8',
    title: `اليوم ${dayNumbersInArabic[16]}`,
    tasks: [
      { id: 'd17-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'وزاريات الفيزياء — مسائل الفصل الأول والثاني الشاملة' },
      { id: 'd17-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'وزاريات الفصول 3 و4 و5 الشاملة — كلاميات' },
      { id: 'd17-chem-2', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'وزاريات الفصول 3 و4 و5 الشاملة — مسائل' },
      { id: 'd17-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الخامس — مراجعة + وزاريات' },
      { id: 'd17-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'حل أسئلة القواعد' },
      { id: 'd17-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — الشعر المسرحي + القضية الفلسطينية' },
    ],
  },
  // Day 18: 27/8
  {
    dayNumber: 18,
    dateStr: '27/8',
    title: `اليوم ${dayNumbersInArabic[17]}`,
    tasks: [
      { id: 'd18-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'وزاريات الفيزياء — مسائل الفصول (4، 5، 6، 7، 8) الشاملة' },
      { id: 'd18-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'مراجعة كلاميات الكيمياء الشاملة' },
      { id: 'd18-chem-2', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'مراجعة مسائل الكيمياء الشاملة' },
      { id: 'd18-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'وزاريات الفصل الأول + الفصل الثاني' },
      { id: 'd18-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'وزاريات القواعد' },
      { id: 'd18-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — مدرسة المهجر + لويس' },
    ],
  },
  // Day 19: 28/8
  {
    dayNumber: 19,
    dateStr: '28/8',
    title: `اليوم ${dayNumbersInArabic[18]}`,
    tasks: [
      { id: 'd19-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'المراجعة الشاملة النهائية لفيزياء الوزاري (مسائل + أنشطة + وزاريات)' },
      { id: 'd19-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'المراجعة الوزارية النهائية الشاملة للكيمياء (كلاميات + مسائل)' },
      { id: 'd19-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'وزاريات الفصل الرابع + الفصل الخامس' },
      { id: 'd19-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'وزاريات القواعد الشاملة' },
      { id: 'd19-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — فؤاد التكرلي + مراجعة الأدب الشاملة' },
    ],
  },
];
