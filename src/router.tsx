import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comments from "./componenet/Comments";
import Main from "./Page/Main";
import Post from "./Page/Posts";

export interface PostInterface {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const Router = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  const onLoadPost = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((res: AxiosResponse) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err: AxiosError) => {});
  };

  useEffect(() => {
    onLoadPost();
    console.log(posts);
    console.log(posts);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main posts={posts} />} />
        <Route path="/posts/:postId" element={<Post posts={posts} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

/*

post는 배열이며, 내부 엘리먼트들은 객체의 형태를 띄고 있다.





*/
