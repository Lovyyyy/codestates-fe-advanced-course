import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../componenet/Comments";
import { PostInterface } from "../router";

const Posts = (posts: PostInterface[]) => {
  const { postId } = useParams();

  return (
    <div>
      <span> 제목 </span> <span> 글쓴이</span>
      <div>본문 {postId} 번째 글 </div>
      <Comments />
    </div>
  );
};

export default Posts;
