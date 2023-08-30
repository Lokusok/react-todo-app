import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Task from '../Task/Task';
import Loader from '../Loader/Loader';
import Empty from '../Empty/Empty';

import setTodos from '../../store/actions/set-todos';
import setType from '../../store/actions/set-type';
import setActivePage from '../../store/actions/set-active-page';
import setMaxPage from '../../store/actions/set-max-page';

import todosApi from '../../api/todos';

import { Todo } from '../../types';
import { State } from '../../types';

import setGlobalTodos from '../../store/thunks/get-todos';
import setAllTodos from '../../store/thunks/set-all-todos';
import setTypeTodo from '../../store/thunks/set-type-todo';

import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import Pagination from '../Pagination/Pagination';


interface TaskListProps {
  type: 'overdue' | 'process' | 'completed' | 'cancelled';
}

const TaskList: FC<TaskListProps> = ({ type }) => {
  const isUpdating: boolean = useSelector((state: State): boolean => state.todos.isUpdating);
  const allTodos: Todo[] = useSelector((state: State): Todo[] => state.todos.allTodos);
  const todos: Todo[] = useSelector((state: State): Todo[] => state.todos.data);
  const searchQuery: string = useSelector((state: State): string => state.search.query);
  const activePage: number = useSelector((state: State): number => state.todos.pages.active);

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (!params.page) {
      return;
    }

    dispatch(setActivePage(Number(params.page)));
  }, [params]);

  // Setting all todos
  useEffect(() => {
    (dispatch as ThunkDispatch<State, unknown, AnyAction>)(setAllTodos());
    const minute = 1000 * 60;
    const nowDate = Date.now();

    const interval = setInterval(() => {
      allTodos.forEach((todo: Todo) => {
        if (todo.type === 'process' && nowDate > todo.expiredAt) {
          (dispatch as ThunkDispatch<State, unknown, AnyAction>)(setTypeTodo(todo.id, 'overdue'));
        }
      });
    }, minute);

    return () => clearInterval(interval);
  }, [todos]);

  useEffect(() => {
    dispatch(setType(type));
    (dispatch as ThunkDispatch<State, unknown, AnyAction>)(setGlobalTodos(type, activePage));
  }, [type, activePage]);

  useEffect(() => {
    if (searchQuery.length === 0) {
      (dispatch as ThunkDispatch<State, unknown, AnyAction>)(setGlobalTodos(type, params.page));
    }

    todosApi.getTodosByType(type, searchQuery.length === 0 ? params.page : null).then((data) => {
      const filterTodos = data.todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchQuery.toLowerCase())
        &&
        todo.type === type
      );

      dispatch((setMaxPage(data.maxPage)));
      dispatch(setTodos(filterTodos));
    });
  }, [type, searchQuery]);

  return (
    <>
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
                todos.length === 0
                  ?
                  <Empty />
                  :
                  todos.map((todo) =>
                    <Task
                      key={todo.id}
                      {...todo}
                    />
                  )
              }
            </div>
        }
      </>

      <>
        {
          !searchQuery &&
          <Pagination />
        }
      </>
    </>
  );
};

export default TaskList;
