import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "../componenet/Search";
import { PostInterface } from "../router";

export interface PropsInterface {
  posts: PostInterface[];
}

const Title = styled.h1`
  /* font-size: 3rem; */
  font-weight: bold;
  color: aqua;
  text-align: center;

  padding: 20px;
`;
const Board = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  div {
    display: flex;
    flex-direction: row;
    color: ${(props) => props.theme.textColor};
    width: 60vw;
    height: 40px;
    line-height: 40px;
    border-right: 1px solid ${(props) => props.theme.lineColor};
    border-left: 1px solid ${(props) => props.theme.lineColor};
    border-bottom: none;

    span:nth-child(1) {
      flex-grow: 1;
      width: 10vw;
    }
    span:nth-child(2) {
      background-color: ${(props) => props.theme.bgColor};
      border-right: 1px solid ${(props) => props.theme.lineColor};
      border-left: 1px solid ${(props) => props.theme.lineColor};
      flex-grow: 3;
      padding: 0 15px 0 15px;
      width: 40vw;
      &:hover {
        background-color: ${(props) => props.theme.hoverColor};
      }
    }
    span:nth-child(3) {
      width: 10vw;
      flex-grow: 1;
    }
  }
`;

const BoardTitle = styled(Board)`
  line-height: 40px;

  border-bottom: 3px double ${(props) => props.theme.lineColor};
`;
const Main = ({ posts }: PropsInterface) => {
  return (
    <>
      <div>
        <Title>HELLO MY LOVE!</Title>
      </div>
      <BoardTitle>
        <div>
          <span>번호</span>
          <span>제목</span>
          <span>작성자</span>
        </div>
      </BoardTitle>
      <Board>
        {posts?.map((post: any) => (
          <div key={post.id}>
            <span> {post.id} </span>
            <span>
              <Link to={`/posts/${post.id}`} state={post}>
                {post.title}
              </Link>
            </span>
            <span> {post.userId} </span>
          </div>
        ))}
      </Board>
      <Search />
    </>
  );
};

export default Main;
