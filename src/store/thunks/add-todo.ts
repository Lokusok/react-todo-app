import { UserTodo } from "../../types";

import todosApi from "../../api/todos";
import setTodos from "../actions/set-todos";


const addTodo = (todo: UserTodo, pageType: string) => {
  return (dispatch) => {
    todosApi.appendTodo({
      title: todo.title,
      description: todo.description,
      createdAt: todo.createdAt,
      expiredAt: todo.expiredAt,
      type: todo.type,
    }).then(() => {
      todosApi.getTodosByType(pageType)
        .then((data) => {
          console.log(data);
          dispatch(setTodos(data));
        });
    });
  };
};

export default addTodo;
