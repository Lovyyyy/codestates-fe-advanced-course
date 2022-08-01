import { useState } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
  position: absolute;
  width: 100%;
  bottom: 4%;
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
  return (
    <div>
      <Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
        <select>
          <option value="글쓴이">글쓴이</option>
          <option value="제목">제목</option>
        </select>
        <div>
          <input onChange={() => {}} placeholder="검색어를 입력하세요" />
          <BsSearch />
        </div>
      </Form>
    </div>
  );
};

export default Search;

// 검색에는 글제목 검색과 글쓴이로 검색을 하는 기능을 만들기
// 검색창에는 option을 통해서 글쓴이
