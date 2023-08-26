import { Todo } from '../types';


export const todos: Todo[] = [
  {
    id: 1,
    title: 'Play on guitar',
    description: 'I am gonna play on my guitar this evening',
    isCompleted: false,
    createdAt: Date.now(),
    expiredAt: Date.now(),
    type: 'process',
  },

  {
    id: 2,
    title: 'Go shop',
    description: 'Need food for my cat and some milk for me',
    isCompleted: false,
    createdAt: Date.now(),
    expiredAt: Date.now(),
    type: 'process',
  },

  {
    id: 3,
    title: 'Buy book',
    description: 'I really want it!',
    isCompleted: false,
    createdAt: Date.now(),
    expiredAt: Date.now(),
    type: 'process',
  },
];
