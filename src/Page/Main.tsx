import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "../componenet/Search";
import { PostInterface } from "../router";

const Title = styled.h1`
  /* font-size: 3rem; */
  font-weight: bold;
  color: aqua;
  text-align: center;
  margin: 20px;
`;

const Post = styled.span`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  height: 40px;
  padding: 0 15px 0 15px;
  line-height: 40px;
  /* border-radius: 15px; */
  margin-bottom: 10px;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
  :first-child {
    color: blue;
  }
  :nth-child(2) {
    color: red;
  }
`;
const Board = styled.ul``;
const Main = (posts?: PostInterface[]) => {
  return (
    <>
      <div>
        <Title>HELLO MY LOVE!</Title>
      </div>

      <Board>
        {posts?.map((post) => (
          <div key={post.id}>
            <span> {post.id} </span>
            <Post>
              <Link to={`/posts/${post.id}`} state={post}>
                {post.title}
              </Link>
            </Post>
            <span> {post.userId} </span>
          </div>
        ))}
      </Board>
      <Search />
    </>
  );
};

export default Main;
