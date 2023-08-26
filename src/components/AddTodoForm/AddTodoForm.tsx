import { FC } from 'react';
import { Todo } from '../../types';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import addTodo from '../../store/actions/add-todo';
import { getTomorrowISODate } from '../../utils/date';


type Inputs = {
  title: string;
  description: string;
  date: string;
}

interface FormProps {
  onClose: () => void
}

const AddTodoForm: FC<FormProps> = ({ onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<Inputs> = (info) => {
    const createdAt = Date.now();
    const expiredAt = new Date(info.date).getTime();
    const type = createdAt < expiredAt ? 'process' : 'overdue';
    const todo: Todo = {
      id: 4,
      title: info.title,
      description: info.description,
      createdAt: createdAt,
      expiredAt: expiredAt,
      isCompleted: false,
      type: type,
    };
    dispatch(addTodo(todo));
    onClose();
  };
  const tomorrowDate = getTomorrowISODate();
  

  return (
    <div className="px-6">
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6">
          <div className="mb-6">
            <label>
              <span className="text-md font-semibold">Enter title of task: <span className={`${errors?.title && 'underline'}`}>(Required)</span></span>
              <input
                {...register('title', { required: 'Required field!' })}
                className={`${errors?.title && 'border-red-400'} mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} type="text"
                placeholder="Title" />
            </label>
          </div>

          <div className="mb-6">
            <label>
              <span className="text-md font-semibold">Enter description of task:</span>
              <textarea
                {...register('description')}
                className="min-h-[150px] mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows={10}
                placeholder="Description (not required)"
              />
            </label>
          </div>

          <div className="mb-6">
            <label>
              <span className="text-md font-semibold">Choose deadline:</span>
              <input
                {...register('date')}
                className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                placeholder="Deadline"
                defaultValue={tomorrowDate}
              />
            </label>
          </div>


        </div>

        <div className="pb-6 mt-10 flex justify-end space-x-3">
          <button type="button" className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:opacity-70" onClick={onClose}>Cancel</button>
          <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-green-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-green-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:opacity-70">Accept</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;
