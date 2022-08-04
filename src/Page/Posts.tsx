import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Comments from "../componenet/Comments";
import { CommentInterface, PostInterface } from "../router";

interface PostPropsInterface {
  posts: PostInterface[];
  comments: CommentInterface[];
}

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  div {
    width: 60vw;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${(props) => props.theme.textColor};
`;

const Writter = styled(Title)`
  font-size: 0.9rem;
  font-weight: 600;
  text-align: right;
  span {
    font-size: 0.5rem;
    font-weight: 400;
  }
`;

const Body = styled(Title)`
  font-size: 1rem;
  font-weight: 300;
  padding: 10px;
  margin-bottom: 20px;
`;

const Posts = ({ posts, comments }: PostPropsInterface) => {
  const { postId } = useParams();
  const selectedPost = posts.filter((post) => post.id === Number(postId));

  return (
    <Wrapper>
      <Link to="/">
        <button> 뒤로가기 </button>
      </Link>
      <Title>{selectedPost[0].title}</Title>
      <Writter>
        <span> 작성자 : </span>
        {selectedPost[0].userId}{" "}
      </Writter>
      <Body>{selectedPost[0].body}</Body>
      <Comments comments={comments} />
    </Wrapper>
  );
};

export default Posts;
