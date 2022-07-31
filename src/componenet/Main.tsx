import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect } from "react";

const Main = () => {
  const onLoadPost = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res: AxiosResponse) => console.log(res))
      .catch((err: AxiosError) => console.log(err));
  };

  const onLoadComment = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    onLoadPost();
    onLoadComment();
  }, []);

  return (
    <div>
      <h1>HELLO MY LOVE!</h1>
    </div>
  );
};

export default Main;
