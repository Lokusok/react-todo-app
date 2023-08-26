export type Todo = {
  id: number;
  title: string;
  description?: string;
  isCompleted: boolean;
  createdAt: number;
  expiredAt: number;
  type: 'overdue' | 'process' | 'completed' | 'cancelled';
}
