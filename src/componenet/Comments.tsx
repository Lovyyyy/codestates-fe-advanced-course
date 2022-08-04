import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CommentInterface } from "../router";

export interface CommentPropsInterface {
  comments: CommentInterface[];
}

const CommentBox = styled.article`
  padding: 10px;

  article {
  }
  div:nth-child(1) {
    margin: 5px;
    color: ${(props) => props.theme.accentColor};
  }
`;

const Comments = ({ comments }: CommentPropsInterface) => {
  const { postId } = useParams();
  const comment = comments.filter((comment) => comment.postId === Number(postId));

  return (
    <CommentBox>
      {comment?.map((comment) => (
        <article key={comment.id}>
          <div>{comment.name}</div> <div> {comment.body}</div>
        </article>
      ))}
    </CommentBox>
  );
};

export default Comments;
