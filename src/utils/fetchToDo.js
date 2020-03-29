export const fetchToDo = async (
  url = "https://jsonplaceholder.typicode.com/todos/2"
) => {
  let response = await fetch(url);
  let resp = await response.json();
  return resp;
};
