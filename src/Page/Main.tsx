import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Search from "../componenet/Search";

interface PostInterface {
  body: string;
  id: number;
  title: string;
  userId: number;
}
const Title = styled.h1`
  /* font-size: 3rem; */
  font-weight: bold;
  color: aqua;
  text-align: center;
  margin: 20px;
`;

const textBoard = styled.div``;
const Main = () => {
  const [posts, setPosts] = useState<PostInterface[]>();
  const onLoadPost = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res: AxiosResponse) => setPosts(res.data))
      .catch((err: AxiosError) => {});
  };

  // const onLoadComment = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/comments")
  //     .then((res) => {})
  //     .catch((err) => {});
  // };

  useEffect(() => {
    // onLoadPost();
  }, []);

  return (
    <>
      <div>
        <Title>HELLO MY LOVE!</Title>
      </div>
      {/* <button
        onClick={() => {
          console.log(posts);
        }}
      >
        버튼
      </button> */}

      {posts?.map((post) => (
        <div key={post.id}>
          {post.id} / {post.title} / {post.userId}
        </div>
      ))}
      <Search />
    </>
  );
};

export default Main;
