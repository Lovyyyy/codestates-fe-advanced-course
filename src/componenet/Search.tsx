import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { MainPropsInterface } from "../Page/Main";

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
  position: relative;
  width: 100%;

  select {
    margin: 0 10px 0 0;
  }
  div {
    display: flex;
    padding: 0 5px 0 3px;
    line-height: 100%;
    align-items: center;
    border: 1px solid ${(props) => props.theme.textColor};

    input {
      margin: 3px;
      border: 1px solid grey;
    }
    button {
      background: none;
      border: none;
      color: ${(props) => props.theme.textColor};

      &:active {
        position: relative;
        top: 1px;
      }
    }
  }
`;

const Search = ({ posts, setPosts }: MainPropsInterface) => {
  // const [keyword, setKeyword] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(input);
  }, []);

  const filteringPost = () => {
    setPosts((posts) => posts.slice(0).filter(({ userId, title }) => userId === Number(input)));
  };

  return (
    <div>
      <Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
        <select>
          <option value="글쓴이">글쓴이</option>
          <option value="제목">제목</option>
        </select>
        <div>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInput(e.target.value);
            }}
            placeholder="검색어를 입력하세요"
          />
          <button type="button" onClick={filteringPost}>
            <BsSearch />
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Search;

/*

최초 1번의 검색은 되나, 이후 검색은 작동하지 않음
왜 그럴까? 

현재 코드대로 posts 를 setPosts로 상태를 변경하는 경우 
posts가 검색 키워드로 검색 된 상태의 것들로만 남기 때문에
다시 검색했을때는 검색이 불가능한 상황이 발생한다.

posts의 불변성을 유지하면서, 데이터를 필터링 한 새로운 배열을 세팅 해줘야 한다. 

음~ 그럼 이건 어떻게 처리를 해줘야 할까 ? 


*/
