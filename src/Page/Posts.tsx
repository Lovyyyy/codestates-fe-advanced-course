import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../componenet/Comments";

import { PropsInterface } from "./Main";

const Posts = ({ posts }: PropsInterface) => {
  const { postId } = useParams();
  const selectedPost = posts.filter((post) => post.id === Number(postId));

  useEffect(() => {
    console.log(selectedPost);
  }, []);

  return (
    <div>
      <span> {selectedPost[0].title} </span> <span> {selectedPost[0].userId}</span>
      <div>{selectedPost[0].body}</div>
      <Comments />
    </div>
  );
};

export default Posts;
