import { FETCH_TODO } from "./action-types";
import { fetchToDo } from "../utils/fetchToDo";

// action стал асинхронным - теперь мы в нем возвращаем асинхронную функцию
export const fetchTodo = url => {
  return async dispatch => {
    const data = await fetchToDo();
    console.log(data)
    dispatch({
      type: FETCH_TODO,
      data
    });
  };
};
