export const specialties = ['Endocrinology', 'Cardiology', 'General Practice', 'Dermatology', 'Neurology']

// Note: in the original script.js, filterspec() only toggles which chip is
// highlighted (via a console.log) — it never actually filters the doctor
// list. All four doctor cards always render regardless of which specialty
// chip is selected. That behavior is preserved here.
export const doctors = [
  {
    id: 'as',
    name: 'Dr. Ananya Sharma',
    spec: 'Endocrinologist',
    initials: 'AS',
    cardAvatarBg: 'var(--green3)',
    cardAvatarColor: 'var(--green)',
    confirmAvatarBg: '#d6f0e2',
    confirmAvatarColor: '#1e5c3a',
    rating: 4.9,
    reviews: 312,
    hospital: 'Apollo Hospitals',
    availability: 'Available Mon\u2013Sat',
    availChip: 'green',
    fee: 800,
  },
  {
    id: 'mi',
    name: 'Dr. Meena Iyer',
    spec: 'General Practitioner',
    initials: 'MI',
    cardAvatarBg: 'var(--bluebg)',
    cardAvatarColor: 'var(--blue)',
    confirmAvatarBg: '#eaf2fb',
    confirmAvatarColor: '#1a4a7a',
    rating: 4.7,
    reviews: 198,
    hospital: 'Cloudnine Clinic',
    availability: 'Available Mon\u2013Fri',
    availChip: 'blue',
    fee: 600,
  },
  {
    id: 'rk',
    name: 'Dr. Rajan Kapoor',
    spec: 'Cardiologist',
    initials: 'RK',
    cardAvatarBg: 'var(--ambbg)',
    cardAvatarColor: 'var(--amber)',
    confirmAvatarBg: '#fdf5e6',
    confirmAvatarColor: '#8a5e00',
    rating: 4.8,
    reviews: 421,
    hospital: 'Fortis Hospitals',
    availability: 'Available Tue, Thu, Sat',
    availChip: 'amber',
    fee: 1200,
  },
  {
    id: 'pn',
    name: 'Dr. Pradeep Nair',
    spec: 'Neurologist',
    initials: 'PN',
    // Original markup had a typo, var(--purblebg), an undefined variable —
    // fixed here to var(--purplebg) so the avatar actually renders a color.
    cardAvatarBg: 'var(--purplebg)',
    cardAvatarColor: 'var(--purple)',
    confirmAvatarBg: '#f5eefb',
    confirmAvatarColor: '#5a2d82',
    rating: 4.6,
    reviews: 167,
    hospital: 'KIMS Hospitals',
    availability: 'Available Mon, Wed, Fri',
    availChip: 'purple',
    fee: 1000,
  },
]

// Time slots exactly as defined in script.js's renderSlots()
export const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
]
export const unavailableSlots = ['9:30 AM', '11:00 AM', '2:30 PM', '4:00 PM']

// Days with open slots — script.js only applies this list when viewing
// April (calMonth === 3); any other month shows no has-slot days.
export const aprilAvailableDays = [28, 29, 30, 5, 6, 7, 9, 12, 13, 14]


export const initialAppointments = [
  {
    id: 1,
    name: 'Dr. Ananya Sharma',
    spec: 'Endocrinologist',
    hospital: 'Apollo Hospitals, Jubilee Hills',
    date: 'Mon, Apr 28',
    time: '10:30 AM',
    status: 'confirmed',
    statusLabel: 'Confirmed',
    avatarColor: 'green',
    initials: 'AS',
    kind: 'upcoming',
  },
  {
    id: 2,
    name: 'Dr. Rajan Kapoor',
    spec: 'Cardiologist',
    hospital: 'Fortis Hospital, Bannerghatta Road',
    date: 'Wed, May 7',
    time: '3:00 PM',
    status: 'pending',
    statusLabel: 'Pending',
    avatarColor: 'amber',
    initials: 'RK',
    kind: 'upcoming',
  },
  {
    id: 3,
    name: 'Lipid Panel + Full Blood Count',
    spec: 'Diagnostic Lab Test',
    hospital: 'Metropolis Labs, Banjara Hills',
    date: 'Fri, May 9',
    time: '8:00 AM',
    status: 'confirmed',
    statusLabel: 'Confirmed',
    avatarColor: 'blue',
    initials: 'ML',
    kind: 'upcoming',
  },
  {
    id: 4,
    name: 'Dr. Ananya Sharma',
    spec: 'Endocrinologist · Routine HbA1c review',
    hospital: 'Metropolis Labs, Banjara Hills',
    date: 'Mar 14, 2026',
    time: '',
    status: 'completed',
    statusLabel: 'Completed',
    avatarColor: 'blue',
    initials: 'ML',
    kind: 'past',
  },
]

export const labResults = [
  { test: 'HbA1C', result: '6.4%', range: '< 5.7%', status: 'High', color: 'red' },
  { test: 'Fasting Glucose', result: '102 mg/dL', range: '70\u201399', status: 'Borderline', color: 'amber' },
  { test: 'Total Cholesterol', result: '185 mg/dL', range: '< 200', status: 'Normal', color: 'green' },
  { test: 'Vitamin D', result: '18 ng/mL', range: '30\u201350', status: 'Low', color: 'blue' },
  { test: 'TSH', result: '2.1 mIU/L', range: '0.5\u20134.5', status: 'Normal', color: 'green' },
]

export const fullLabPanel = [
  ...labResults,
  { test: 'HDL Cholesterol', result: '58 mg/dL', range: '> 40', status: 'Good', color: 'green' },
  { test: 'LDL Cholesterol', result: '112 mg/dL', range: '< 130', status: 'Normal', color: 'green' },
  { test: 'Triglycerides', result: '142 mg/dL', range: '< 150', status: 'Normal', color: 'green' },
  { test: 'Creatinine', result: '0.9 mg/dL', range: '0.6\u20131.2', status: 'Normal', color: 'green' },
  { test: 'Haemoglobin', result: '13.2 g/dL', range: '12\u201316', status: 'Normal', color: 'green' },
]

export const labTimeline = [
  { date: 'Apr 18, 2026', title: 'Full Blood Panel', lab: 'Metropolis Labs', dot: 'red', tags: [{ label: 'HbA1c High', color: 'red' }, { label: 'Vit D Low', color: 'blue' }] },
  { date: 'Feb 10, 2026', title: 'Full Blood Panel', lab: 'Metropolis Labs', dot: 'amber', tags: [{ label: 'HbA1c Border', color: 'amber' }, { label: 'Cholesterol OK', color: 'green' }] },
  { date: 'Dec 5, 2025', title: 'Lipid Panel', lab: 'SRL Diagnostics', dot: 'blue', tags: [{ label: 'LDL Elevated', color: 'blue' }] },
  { date: 'Oct 2, 2025', title: 'Thyroid Function Test', lab: 'Apollo Diagnostics', dot: 'green', tags: [{ label: 'TSH Normal', color: 'green' }, { label: 'T3/T4 Normal', color: 'green' }] },
  { date: 'Jul 14, 2025', title: 'Annual Full Body Check', lab: 'Fortis Hospital', dot: 'green', tags: [{ label: 'All Normal', color: 'green' }] },
]

export const medSchedule = [
  { name: 'Metformin 500mg', dose: '1 tablet \u00b7 With food', time: '\ud83d\udd57 Morning \u2014 8:00 AM', emoji: '\ud83d\udc8a', bg: 'var(--green3)' },
  { name: 'Vitamin D3 2000 IU', dose: '1 capsule \u00b7 With fatty meal', time: '\ud83d\udd57 Morning \u2014 8:00 AM', emoji: '\ud83d\udc9a', bg: 'var(--green3)' },
  { name: 'Metformin 500mg (Evening)', dose: '1 tablet \u00b7 With dinner', time: '\ud83d\udd57 Evening \u2014 8:00 PM', emoji: '\ud83d\udc9b', bg: 'var(--ambbg)' },
  { name: 'Atorvastatin 10mg', dose: '1 tablet \u00b7 Before sleep', time: '\ud83c\udf19 Night \u2014 10:00 PM', emoji: '\u2764\ufe0f', bg: 'var(--redbg)' },
  { name: 'Lisinopril 5mg', dose: '1 tablet \u00b7 With water', time: '\ud83c\udf19 Night \u2014 10:00 PM', emoji: '\ud83d\udc9c', bg: 'var(--purplebg)' },
]

export const reports = [
  { name: 'Full Blood Panel', date: 'April 18, 2026 \u00b7 Metropolis Labs', size: 'PDF \u00b7 1.2 MB', emoji: '\ud83e\uddea', bg: 'var(--redbg)' },
  { name: 'ECG Report', date: 'March 5, 2026 \u00b7 Fortis Hospital', size: 'PDF \u00b7 840 KB', emoji: '\ud83e\udec0', bg: 'var(--bluebg)' },
  { name: "Doctor's Notes", date: 'March 14, 2026 \u00b7 Dr. Sharma', size: 'PDF \u00b7 340 KB', emoji: '\ud83d\udccb', bg: 'var(--green4)' },
  { name: 'Prescription', date: 'March 14, 2026 \u00b7 Dr. Sharma', size: 'PDF \u00b7 210 KB', emoji: '\ud83d\udc8a', bg: 'var(--ambbg)' },
  { name: 'Chest X-Ray', date: 'Dec 10, 2025 \u00b7 Apollo Hospital', size: 'DICOM \u00b7 4.8 MB', emoji: '\ud83e\udec1', bg: 'var(--purplebg)' },
]
