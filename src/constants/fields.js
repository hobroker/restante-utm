export const STUDENT_FIELDS = [
  { name: 'name', label: 'Nume', type: 'text' },
  { name: 'group', label: 'Grupa', type: 'text' },
  { name: 'year', label: 'Anul', type: 'number' },
];

export const SUBJECT_FIELDS = [
  { name: 'name', label: 'Nume', type: 'text' },
  { name: 'points', label: 'Puncte', type: 'number' },
];

export const SITUATION_FIELDS = [
  { name: 'studentId', label: 'Student', type: 'select', dataKey: 'students' },
  { name: 'subjectId', label: 'Subiect', type: 'select', dataKey: 'subjects' },
];
