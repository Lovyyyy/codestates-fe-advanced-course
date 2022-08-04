import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Pagenation from "../componenet/Pagenation";
import Search from "../componenet/Search";
import { PostInterface } from "../router";

interface MainPropsInterface {
  posts: PostInterface[];
}

const Title = styled.h1`
  font-size: 3rem;
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
      a {
        display: block;
      }
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
const Main = ({ posts }: MainPropsInterface) => {
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
          <span>번호</span>
          <span>제목</span>
          <span>작성자</span>
        </div>
      </BoardTitle>
      <Board>
        {posts?.slice(numChanger, numChanger + limit).map((post: any) => (
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
