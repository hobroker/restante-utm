import { get } from '../../express/methods';

const count = async ({ mongo: { Student, Subject, Situation } }) => {
  const [students, subjects, situations] = await Promise.all([
    Student.count(),
    Subject.count(),
    Situation.count(),
  ]);

  return [
    { label: 'Total Studenți', count: students, redirect: '/students' },
    { label: 'Total Subiecte', count: subjects, redirect: '/subjects' },
    { label: 'Total Restanțe', count: situations, redirect: '/situations' },
  ];
};

export default {
  statistics: {
    '/': get(count),
  },
};
