import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

interface CommentInterface {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

const CommentBox = styled.div`
  border: 1px solid red;
  padding: 10px;

  article {
    border: 1px solid blue;
  }
  div:nth-child(1) {
    margin: 5px;
    color: ${(props) => props.theme.accentColor};
  }
`;

const Comments = () => {
  const { postId } = useParams();
  const [comment, setComment] = useState<CommentInterface[]>();

  const onLoadComment = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res: AxiosResponse) => setComment(res.data))
      .catch((err: AxiosError) => {});
  };

  useEffect(() => {
    onLoadComment();
  }, []);

  return (
    <CommentBox>
      COMMENT
      {comment?.map((comment) => (
        <article>
          <div>{comment.name}</div> <div> {comment.body}</div>
        </article>
      ))}
    </CommentBox>
  );
};

export default Comments;
