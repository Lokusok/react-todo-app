import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Task from '../Task/Task';
import Loader from '../Loader/Loader';
import Empty from '../Empty/Empty';

import setTodos from '../../store/actions/set-todos';
import setType from '../../store/actions/set-type';
import overdueTodo from '../../store/actions/overdue-todo';

import todosApi from '../../api/todos';

import { Todo } from '../../types';
import { State } from '../../types';

import setGlobalTodos from '../../store/thunks/get-todos';
import setAllTodos from '../../store/thunks/set-all-todos';

import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';


interface TaskListProps {
  type: 'overdue' | 'process' | 'completed' | 'cancelled';
}

const TaskList: FC<TaskListProps> = ({ type }) => {
  const isUpdating: boolean = useSelector((state: State): boolean => state.todos.isUpdating);
  const allTodos: Todo[] = useSelector((state: State): Todo[] => state.todos.allTodos);
  const todos: Todo[] = useSelector((state: State): Todo[] => state.todos.data);
  const searchQuery: string = useSelector((state: State): string => state.search.query);
  const dispatch = useDispatch();

  // Setting all todos
  useEffect(() => {
    (dispatch as ThunkDispatch<State, unknown, AnyAction>)(setAllTodos());
    const minute = 1000 * 60;
    const nowDate = Date.now();

    const interval = setInterval(() => {
      allTodos.forEach((todo: Todo) => {
        if (nowDate > todo.expiredAt) {
          dispatch(overdueTodo(todo.id));
        }
      });
    }, minute);

    return () => clearInterval(interval);
  }, [todos]);

  // On tab changing
  useEffect(() => {
    dispatch(setType(type));
    (dispatch as ThunkDispatch<State, unknown, AnyAction>)(setGlobalTodos(type));
  }, [type]);

  useEffect(() => {
    if (searchQuery.length === 0) {
      (dispatch as ThunkDispatch<State, unknown, AnyAction>)(setGlobalTodos(type));
    }

    todosApi.getTodosByType(type).then((todos) => {
      const filterTodos = todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchQuery.toLowerCase())
        &&
        todo.type === type
      );

      dispatch(setTodos(filterTodos));
    });
  }, [searchQuery]);

  return (
    <>
      {
        isUpdating
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
