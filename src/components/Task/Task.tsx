import { FC } from 'react';
import { Todo } from '../../types';
import { BsCheckCircleFill } from 'react-icons/bs';
import { AiTwotoneDelete } from 'react-icons/ai';

import { useDispatch } from 'react-redux';

import setTypeTodo from '../../store/thunks/set-type-todo';

import { getTaskBackgroundColor } from '../../utils/task';
import { getFormattedDate } from '../../utils/date';


const Task: FC<Todo> = ({ id, title, description, createdAt, expiredAt, type }) => {
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(setTypeTodo(id, 'cancelled', 'process'));
  };

  const handleComplete = () => {
    dispatch(setTypeTodo(id, 'completed', 'process'));
  };

  return (
    <article className={`${getTaskBackgroundColor(type)} flex justify-between py-5 px-5 rounded relative`}>
      <span className="absolute top-0 left-5 -translate-y-full">
        <span className="text-sm   font-normal text-gray-500 dark:text-gray-400 underline">Created at: {getFormattedDate(Number(createdAt))}</span>
      </span>
      <span className="absolute top-0 right-5 -translate-y-full">
        <span className="text-sm   font-normal text-gray-500 dark:text-gray-400 underline">Expired at: {getFormattedDate(Number(expiredAt))}</span>
      </span>

      <div className="max-w-[70%] space-x-5 flex flex-row items-center">
        <div>
          <h3 className={`${type === 'overdue' && 'line-through'} mb-2 text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white`}>{title}</h3>
          <p className={`${type === 'overdue' && 'line-through'} break-all text-md font-normal text-gray-500 dark:text-gray-400`}>{description}</p>
        </div>
      </div>

      {
        type === 'process'
        &&
        <div className="flex space-x-4">
          <button onClick={handleComplete}><BsCheckCircleFill className="hover:opacity-80 active:opacity-50" size={24} color="#3B82F6" /></button>
          <button onClick={handleCancel}><AiTwotoneDelete className="hover:opacity-80 active:opacity-50" size={24} color="red" /></button>
        </div>
      }
    </article>
  );
};

export default Task;
