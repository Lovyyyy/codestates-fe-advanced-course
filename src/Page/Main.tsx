import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Pagenation from "../componenet/Pagenation";
import Search from "../componenet/Search";
import { PostInterface } from "../router";

export interface MainPropsInterface {
  posts: PostInterface[];
  setPosts: Dispatch<SetStateAction<PostInterface[]>>;
}

const Title = styled.h1`
  height: 10vh;
  font-size: 3rem;
  font-weight: bold;
  color: ${(props) => props.theme.accentColor};
  text-align: center;

  padding: 20px;
`;
const Board = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  height: 70vh;

  div {
    display: flex;
    flex-direction: row;
    color: ${(props) => props.theme.textColor};
    width: 60vw;
    height: 6vh;
    line-height: 6vh;
    border-right: 1px solid ${(props) => props.theme.lineColor};
    border-left: 1px solid ${(props) => props.theme.lineColor};
    border-bottom: none;

    .id {
      flex-grow: 1;
      width: 10vw;
    }
    .title {
      background-color: ${(props) => props.theme.bgColor};
      border-right: 1px solid ${(props) => props.theme.lineColor};
      border-left: 1px solid ${(props) => props.theme.lineColor};
      flex-grow: 3;
      padding: 0 15px 0 15px;
      width: 40vw;
      a {
        display: block;
        &:hover {
          background-color: ${(props) => props.theme.hoverColor};
        }
      }
    }
    .userId {
      width: 10vw;
      flex-grow: 1;
    }
  }
`;

const BoardTitle = styled(Board)`
  height: 5vh;
  line-height: 5vh;
  border-bottom: 3px double ${(props) => props.theme.lineColor};
`;
const Main = ({ posts, setPosts }: MainPropsInterface) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const numChanger = (page - 1) * limit;
  const postNumber = posts.length;

  return (
    <>
      <div>
        <Title>HELLO WORLD!</Title>
      </div>
      <BoardTitle>
        <div>
          <span className="id">번호</span>
          <span className="title">제목</span>
          <span className="userId">작성자</span>
        </div>
      </BoardTitle>
      <Board>
        {posts?.slice(numChanger, numChanger + limit).map((post: any) => (
          <div key={post.id}>
            <span className="id"> {post.id} </span>
            <span className="title">
              <Link to={`/posts/${post.id}`} state={post}>
                {post.title}
              </Link>
            </span>
            <span className="userId"> {post.userId} </span>
          </div>
        ))}
      </Board>
      <Search posts={posts} setPosts={setPosts} />
      <Pagenation postNumber={postNumber} limit={limit} page={page} setPage={setPage} />
    </>
  );
};

export default Main;

/*


slice 메서드를 통해서 잘라 내기를 할 수 있다. 
그렇다면 잘라내는 값을 구해야겠네요 

그리고 버튼을 누를때 그 값들이 업데이트가 되게 해줘야 하네.

*/
