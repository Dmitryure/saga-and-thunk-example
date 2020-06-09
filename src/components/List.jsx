import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../redux/actions";

const List = (props) => {

  const data = useSelector(store => store.data)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodo("https://swapi.dev/api/people/1"))
  }, [])


  return <div>{JSON.stringify(data)}</div>;

}

export default List
