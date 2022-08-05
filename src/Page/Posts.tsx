import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Comments from "../componenet/Comments";
import { CommentInterface, PostInterface } from "../router";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

interface PostPropsInterface {
  posts: PostInterface[];
  comments: CommentInterface[];
}

const BackButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.lineColor};
  font-size: 2rem;
  position: absolute;
  margin: 10px 0 0 20px;
  &:active {
    top: 1px;
  }
`;

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  div {
    width: 60vw;
  }
`;

const Title = styled.div`
  height: 10vh;
  line-height: 10vh;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  flex-grow: 1;
  color: ${(props) => props.theme.textColor};
`;

const Writter = styled(Title)`
  height: 1vh;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: right;
  margin-bottom: 20px;
  flex-grow: 1;
  span {
    font-size: 0.5rem;
    font-weight: 400;
  }
`;

const Body = styled(Title)`
  height: auto;
  font-size: 1rem;
  font-weight: 300;
  padding: 10px;
  margin-bottom: 20px;
`;

const Posts = ({ posts, comments }: PostPropsInterface) => {
  const { postId } = useParams();
  const selectedPost = posts.filter((post) => post.id === Number(postId));

  return (
    <>
      <Link to="/">
        <BackButton>
          <BsFillArrowLeftSquareFill />
        </BackButton>
      </Link>
      <Wrapper>
        <Title>{selectedPost[0].title}</Title>
        <Writter>
          <span> 작성자 : </span>
          {selectedPost[0].userId}{" "}
        </Writter>
        <Body>{selectedPost[0].body}</Body>
        <Comments comments={comments} />
      </Wrapper>
    </>
  );
};

export default Posts;
