import { FETCH_TODO } from "./action-types";
import { fetchToDo } from "../utils/fetchToDo";

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
