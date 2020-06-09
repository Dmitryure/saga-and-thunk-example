import React, {useEffect} from "react";
import { requestFetch } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";


const List = (props) => {

  const data = useSelector(store => store.data)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestFetch("https://swapi.dev/api/people/1"))
  }, [])


  return <div>{JSON.stringify(data)}</div>;

}

export default List
