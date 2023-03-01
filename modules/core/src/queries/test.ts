import { useQuery } from "react-query";

const queryFn = () =>
  fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
    response.json()
  );

export const useTestGet = () => useQuery("key123", queryFn);
