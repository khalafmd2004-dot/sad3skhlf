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
    icon: '🧮',
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
  '🔥 خلصت يومك. ممتاز.',
  '💪 يوم آخر انضرب.',
  '🎯 خطوة أقرب للهدف.',
  '⚡ استمر، لا تضيع تعبك.',
];

const dayNumbersInArabic = [
  'الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس',
  'السادس', 'السابع', 'الثامن', 'التاسع', 'العاشر',
  'الحادي عشر', 'الثاني عشر', 'الثالث عشر', 'الرابع عشر', 'الخامس عشر',
  'السادس عشر', 'السابع عشر', 'الثامن عشر', 'التاسع عشر', 'العشرون'
];

export const STUDY_PLAN: DayPlan[] = [
  // Day 1: 7/8
  {
    dayNumber: 1,
    dateStr: '7/8',
    title: `اليوم ${dayNumbersInArabic[0]}`,
    tasks: [
      { id: 'd1-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الأول — كلاميات' },
      { id: 'd1-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الأول — كلاميات' },
      { id: 'd1-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الأساسيات — الجزء الأول' },
      { id: 'd1-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — النفي — الجزء الأول' },
      { id: 'd1-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — الجواهري' },
    ],
  },
  // Day 2: 8/8
  {
    dayNumber: 2,
    dateStr: '8/8',
    title: `اليوم ${dayNumbersInArabic[1]}`,
    tasks: [
      { id: 'd2-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الأول — مسائل — الجزء الأول' },
      { id: 'd2-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الأول — إكمال الكلاميات + بداية المسائل' },
      { id: 'd2-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الأساسيات — الجزء الثاني' },
      { id: 'd2-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — النفي — الجزء الثاني' },
      { id: 'd2-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — حافظ إبراهيم' },
    ],
  },
  // Day 3: 9/8
  {
    dayNumber: 3,
    dateStr: '9/8',
    title: `اليوم ${dayNumbersInArabic[2]}`,
    tasks: [
      { id: 'd3-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الأول — مسائل — الجزء الثاني' },
      { id: 'd3-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الأول — إكمال المسائل' },
      { id: 'd3-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الأساسيات — الجزء الثالث + تثبيت' },
      { id: 'd3-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — النفي — الجزء الثالث' },
      { id: 'd3-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — معروف الرصافي' },
    ],
  },
  // Day 4: 10/8
  {
    dayNumber: 4,
    dateStr: '10/8',
    title: `اليوم ${dayNumbersInArabic[3]}`,
    tasks: [
      { id: 'd4-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الأول — مراجعة + وزاريات' },
      { id: 'd4-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الأول — مراجعة + وزاريات' },
      { id: 'd4-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الأول — دراسة وحل' },
      { id: 'd4-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — التقديم والتأخير' },
      { id: 'd4-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — القصة' },
    ],
  },
  // Day 5: 11/8
  {
    dayNumber: 5,
    dateStr: '11/8',
    title: `اليوم ${dayNumbersInArabic[4]}`,
    tasks: [
      { id: 'd5-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الثاني — كلاميات — الجزء الأول' },
      { id: 'd5-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الثاني — كلاميات' },
      { id: 'd5-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الأول — إكمال + مسائل' },
      { id: 'd5-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — النداء' },
      { id: 'd5-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — ميخائيل نعيمة' },
    ],
  },
  // Day 6: 12/8
  {
    dayNumber: 6,
    dateStr: '12/8',
    title: `اليوم ${dayNumbersInArabic[5]}`,
    tasks: [
      { id: 'd6-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الثاني — كلاميات — الجزء الثاني' },
      { id: 'd6-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الثاني — مسائل — الجزء الأول' },
      { id: 'd6-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الأول — مراجعة + وزاريات' },
      { id: 'd6-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — التوكيد — الجزء الأول' },
      { id: 'd6-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — نازك الملائكة' },
    ],
  },
  // Day 7: 13/8
  {
    dayNumber: 7,
    dateStr: '13/8',
    title: `اليوم ${dayNumbersInArabic[6]}`,
    tasks: [
      { id: 'd7-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الثاني — مسائل — الجزء الأول' },
      { id: 'd7-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الثاني — مسائل — الجزء الثاني' },
      { id: 'd7-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الثاني — دراسة وحل — الجزء الأول' },
      { id: 'd7-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — التوكيد — الجزء الثاني' },
      { id: 'd7-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — الشعر المسرحي' },
    ],
  },
  // Day 8: 14/8
  {
    dayNumber: 8,
    dateStr: '14/8',
    title: `اليوم ${dayNumbersInArabic[7]}`,
    tasks: [
      { id: 'd8-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الثاني — مسائل — الجزء الثاني' },
      { id: 'd8-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الثاني — مراجعة + وزاريات' },
      { id: 'd8-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الثاني — دراسة وحل — الجزء الثاني' },
      { id: 'd8-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — المدح والذم — الجزء الأول' },
      { id: 'd8-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — القضية الفلسطينية' },
    ],
  },
  // Day 9: 15/8
  {
    dayNumber: 9,
    dateStr: '15/8',
    title: `اليوم ${dayNumbersInArabic[8]}`,
    tasks: [
      { id: 'd9-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الثاني — مراجعة + وزاريات' },
      { id: 'd9-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الثالث — كلاميات' },
      { id: 'd9-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الثاني — دراسة وحل — الجزء الثالث' },
      { id: 'd9-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — المدح والذم — الجزء الثاني' },
      { id: 'd9-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — مدرسة المهجر' },
    ],
  },
  // Day 10: 16/8
  {
    dayNumber: 10,
    dateStr: '16/8',
    title: `اليوم ${dayNumbersInArabic[9]}`,
    tasks: [
      { id: 'd10-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الثالث — كلاميات — الجزء الأول' },
      { id: 'd10-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الثالث — مسائل — الجزء الأول' },
      { id: 'd10-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الثاني — مراجعة + وزاريات' },
      { id: 'd10-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — التعجب' },
      { id: 'd10-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — لويس' },
    ],
  },
  // Day 11: 17/8
  {
    dayNumber: 11,
    dateStr: '17/8',
    title: `اليوم ${dayNumbersInArabic[10]}`,
    tasks: [
      { id: 'd11-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الثالث — كلاميات — الجزء الثاني' },
      { id: 'd11-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الثالث — مسائل — الجزء الثاني' },
      { id: 'd11-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'يوم احتياط / تعويض' },
      { id: 'd11-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — التمني + الترجي — الجزء الأول' },
      { id: 'd11-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — الشعر الحر' },
    ],
  },
  // Day 12: 18/8
  {
    dayNumber: 12,
    dateStr: '18/8',
    title: `اليوم ${dayNumbersInArabic[11]}`,
    tasks: [
      { id: 'd12-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الثالث — مسائل — الجزء الأول' },
      { id: 'd12-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الثالث — مسائل — الجزء الثالث' },
      { id: 'd12-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الرابع — الجزء الأول' },
      { id: 'd12-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'القواعد — التمني + الترجي — الجزء الثاني + العرض والتحضيض' },
      { id: 'd12-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — النثر وفنونه' },
    ],
  },
  // Day 13: 19/8
  {
    dayNumber: 13,
    dateStr: '19/8',
    title: `اليوم ${dayNumbersInArabic[12]}`,
    tasks: [
      { id: 'd13-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الثالث — مسائل — الجزء الثاني' },
      { id: 'd13-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الثالث — إكمال المسائل' },
      { id: 'd13-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الرابع — الجزء الثاني' },
      { id: 'd13-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'مراجعة القواعد — النفي + التقديم والتأخير' },
      { id: 'd13-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — فؤاد التكرلي' },
    ],
  },
  // Day 14: 20/8
  {
    dayNumber: 14,
    dateStr: '20/8',
    title: `اليوم ${dayNumbersInArabic[13]}`,
    tasks: [
      { id: 'd14-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الثالث — مراجعة + وزاريات' },
      { id: 'd14-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الثالث — مراجعة + وزاريات' },
      { id: 'd14-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الرابع — الجزء الثالث' },
      { id: 'd14-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'مراجعة القواعد — النداء + التوكيد' },
      { id: 'd14-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — الجواهري + حافظ إبراهيم' },
    ],
  },
  // Day 15: 21/8
  {
    dayNumber: 15,
    dateStr: '21/8',
    title: `اليوم ${dayNumbersInArabic[14]}`,
    tasks: [
      { id: 'd15-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الرابع — مسائل + أسئلة' },
      { id: 'd15-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الرابع — كلاميات' },
      { id: 'd15-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الرابع — إكمال + مسائل' },
      { id: 'd15-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'مراجعة القواعد — المدح والذم + التعجب' },
      { id: 'd15-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — معروف الرصافي + القصة' },
    ],
  },
  // Day 16: 22/8
  {
    dayNumber: 16,
    dateStr: '22/8',
    title: `اليوم ${dayNumbersInArabic[15]}`,
    tasks: [
      { id: 'd16-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الخامس — مسائل + أسئلة' },
      { id: 'd16-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الرابع — مسائل — الجزء الأول' },
      { id: 'd16-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الرابع — مراجعة + وزاريات' },
      { id: 'd16-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'مراجعة القواعد — التمني + الترجي + العرض والتحضيض' },
      { id: 'd16-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — ميخائيل نعيمة + نازك الملائكة' },
    ],
  },
  // Day 17: 23/8
  {
    dayNumber: 17,
    dateStr: '23/8',
    title: `اليوم ${dayNumbersInArabic[16]}`,
    tasks: [
      { id: 'd17-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل السادس + الفصل السابع + الفصل الثامن — النشاطات فقط' },
      { id: 'd17-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'الفصل الرابع — مسائل — الجزء الثاني + إكمال' },
      { id: 'd17-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الخامس — كامل' },
      { id: 'd17-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'حل أسئلة القواعد' },
      { id: 'd17-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — الشعر المسرحي + القضية الفلسطينية' },
    ],
  },
  // Day 18: 24/8
  {
    dayNumber: 18,
    dateStr: '24/8',
    title: `اليوم ${dayNumbersInArabic[17]}`,
    tasks: [
      { id: 'd18-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'الفصل الرابع + الفصل الخامس — مراجعة + وزاريات' },
      { id: 'd18-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'وزاريات الفصل الأول فقط' },
      { id: 'd18-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'الفصل الخامس — مراجعة + وزاريات' },
      { id: 'd18-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'وزاريات القواعد' },
      { id: 'd18-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — مدرسة المهجر + لويس' },
    ],
  },
  // Day 19: 25/8
  {
    dayNumber: 19,
    dateStr: '25/8',
    title: `اليوم ${dayNumbersInArabic[18]}`,
    tasks: [
      { id: 'd19-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'وزاريات الفصل الأول فقط' },
      { id: 'd19-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'وزاريات الفصل الثاني فقط' },
      { id: 'd19-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'وزاريات الفصل الأول + الفصل الثاني' },
      { id: 'd19-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'وزاريات القواعد' },
      { id: 'd19-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — الشعر الحر + النثر وفنونه' },
    ],
  },
  // Day 20: 26/8
  {
    dayNumber: 20,
    dateStr: '26/8',
    title: `اليوم ${dayNumbersInArabic[19]}`,
    tasks: [
      { id: 'd20-phys-1', subjectId: 'physics', subjectName: 'الفيزياء', title: 'وزاريات الفصل الثاني فقط' },
      { id: 'd20-chem-1', subjectId: 'chemistry', subjectName: 'الكيمياء', title: 'وزاريات الفصل الثالث فقط' },
      { id: 'd20-math-1', subjectId: 'math', subjectName: 'الرياضيات', title: 'وزاريات الفصل الرابع + الفصل الخامس' },
      { id: 'd20-arab-1', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'وزاريات القواعد' },
      { id: 'd20-arab-2', subjectId: 'arabic', subjectName: 'اللغة العربية', title: 'الأدب — فؤاد التكرلي + مراجعة الأدب الشاملة' },
    ],
  },
];
