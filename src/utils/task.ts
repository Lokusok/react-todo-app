export const getTaskBackgroundColor = (type: string): string => {
  switch (type) {
    case 'overdue': return 'bg-orange-100';
    case 'process': return 'bg-slate-100';
    case 'completed': return 'bg-green-100';
    case 'cancelled': return 'bg-red-100';
    default: return 'bg-slate-100';
  };
};
