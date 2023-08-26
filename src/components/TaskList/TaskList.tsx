import { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Task from '../Task/Task';
import { Todo } from '../../types';
import Loader from '../Loader/Loader';
import Empty from '../Empty/Empty';

import setTodos from '../../store/actions/set-todos';
import todosApi from '../../api/todos';


interface TaskListProps {
  type: 'overdue' | 'process' | 'completed' | 'cancelled';
}

const TaskList: FC<TaskListProps> = ({ type }) => {
  const [showLoader, setShowLoader] = useState<boolean>(true);
 
  const todos = useSelector((state: { todos: Todo[] }): Todo[] => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  useEffect(() => {
    setShowLoader(true);

    todosApi.getTodos(type).then((todos) => {
      dispatch(setTodos(todos));
      setShowLoader(false);
    });
  }, []);

  return (
    <>
      {
        showLoader
          ?
          <div className="flex justify-center">
            <Loader />
          </div>
          :
          <div className="flex flex-col mt-16 space-y-11 -translate-100">
            {
              todos.filter((todo) => todo.type === type).length === 0
                ?
                <Empty />
                :
                todos.filter((todo) => todo.type === type).map((todo) =>
                  <Task
                    key={todo.id}
                    {...todo}
                  />
                )
            }
          </div>
      }
    </>
  );
};

export default TaskList;
