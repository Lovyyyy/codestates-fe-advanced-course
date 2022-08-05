import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CommentInterface } from "../router";

export interface CommentPropsInterface {
  comments: CommentInterface[];
}

const CommentBox = styled.article`
  padding: 10px;
  border-top: 1px solid ${(props) => props.theme.lineColor};
  position: absolute;
  bottom: 10%;

  .title {
    color: ${(props) => props.theme.hoverColor};
  }
  .name {
    margin: 20px 0 5px 0px;
    color: ${(props) => props.theme.accentColor};
  }
  .body {
    padding-bottom: 20px;
    border-bottom: 1px solid ${(props) => props.theme.lineColor};
  }
`;

const Comments = ({ comments }: CommentPropsInterface) => {
  const { postId } = useParams();
  const comment = comments.filter((comment) => comment.postId === Number(postId));

  return (
    <CommentBox>
      <span className="title">Comments[{comment.length}]</span>
      {comment?.map((comment) => (
        <article key={comment.id}>
          <div className="name">{comment.name}</div> <div className="body"> {comment.body}</div>
        </article>
      ))}
    </CommentBox>
  );
};

export default Comments;
