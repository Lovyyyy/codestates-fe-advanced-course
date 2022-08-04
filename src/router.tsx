import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Page/Main";
import Post from "./Page/Posts";

export interface PostInterface {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface CommentInterface {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

const Router = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [comments, setComments] = useState<CommentInterface[]>([]);
  const [loading, setLoading] = useState(true);

  const onLoadPost = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((res: AxiosResponse) => {
        setPosts(res.data);
        setLoading((boolean) => !boolean);
      })
      .catch((err: AxiosError) => {});
  };

  const onLoadComment = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then((res: AxiosResponse) => {
        setComments(res.data);
      })
      .catch((err: AxiosError) => {});
  };

  useEffect(() => {
    onLoadComment();
    onLoadPost();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading . . .</div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main posts={posts} />} />
            <Route path="/posts/:postId" element={<Post posts={posts} comments={comments} />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default Router;

/*

post는 배열이며, 내부 엘리먼트들은 객체의 형태를 띄고 있다.





*/
