import axios, { AxiosError, AxiosResponse } from "axios";
import React, { Dispatch, ReactHTMLElement, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import { PostInterface } from "../router";

interface PagenationInterface {
  postNumber: number;
  limit: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const Wrapper = styled.div`
  width: 100vw;
  text-align: center;
  margin: 20px 0 20px 0;

  button {
    background: none;
    color: ${(props) => props.theme.textColor};
    font-size: 1rem;

    &:hover {
      color: red;
    }
  }
`;

const Pagenation = ({ postNumber, limit, page, setPage }: PagenationInterface) => {
  const [totalPage, setTotalPage] = useState<number[]>([]);
  const [abcd, setAbcd] = useState<PostInterface[]>([]);
  const pageNumber = Math.ceil(Number(abcd.length) / limit);
  const [loading, setLoading] = useState(true);
  const aa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handlePage = (page: number) => {
    setPage(page);
  };

  const onLoadPost = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((res: AxiosResponse) => {
        setAbcd(res.data);
        setLoading((boolean) => !boolean);
      })
      .catch((err: AxiosError) => {});
  };

  useEffect(() => {
    onLoadPost();

    for (let i = 1; i <= pageNumber; i++) {
      totalPage.push(i);
    }
  }, []);

  return (
    <>
      {loading ? (
        <div> Loading </div>
      ) : (
        <Wrapper>
          <button
            onClick={() => {
              if (page === 1) {
                return;
              }
              handlePage(page - 1);
            }}
          >
            &lt;
          </button>

          {totalPage.map((p, index) => {
            return (
              <button
                key={index}
                onClick={() => handlePage(p)}
                style={p === page ? { background: " #F0E5CF", color: " black" } : {}}
              >
                {p}
              </button>
            );
          })}
          <button
            onClick={() => {
              if (page === pageNumber) {
                return;
              }
              handlePage(page + 1);
            }}
          >
            &gt;
          </button>
        </Wrapper>
      )}
    </>
  );
};

export default Pagenation;

/*




*/
