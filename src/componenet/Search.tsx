import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import React, { useState } from "react";

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
    border: 1px solid;
    input {
      margin: 3px;
      border: 1px solid grey;
    }
  }
`;

const Search = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <div>
      <Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
        <select>
          <option value="글쓴이">글쓴이</option>
          <option value="제목">제목</option>
        </select>
        <div>
          <input
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setKeyword(String(e));
            }}
            placeholder="검색어를 입력하세요"
          />
          <BsSearch />
        </div>
      </Form>
    </div>
  );
};

export default Search;

// 검색에는 글제목 검색과 글쓴이로 검색을 하는 기능을 만들기
// 검색창에는 option을 통해서 글쓴이
