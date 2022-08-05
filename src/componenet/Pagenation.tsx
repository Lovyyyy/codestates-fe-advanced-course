import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";

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
    border: none;

    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Pagenation = ({ postNumber, limit, page, setPage }: PagenationInterface) => {
  const [totalPage, setTotalPage] = useState<number[]>([]);

  const pageNumber = Math.ceil(Number(postNumber) / limit);
  const arr: number[] = [];
  const handlePage = (page: number) => {
    setPage(page);
  };

  for (let i = 1; i <= pageNumber; i++) {
    arr.push(i);
  }

  useEffect(() => {
    setTotalPage((array) => array.concat(arr));
  }, []);

  return (
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
            style={p === page ? { color: "red" } : {}}
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
  );
};

export default Pagenation;

/*

대체 왜 그런지 모르겠다.
페이지 네이션을 위해서 전체 포스트의 갯수를 가지고 오고 
한 페이지에 보여 줄 수 있는 갯수로 나누고,  올림으로 값을 만들고

그 값까지 반복문을 통해서 1~값 까지 , 현재에선 10까지를 배열에 담아주는데
왜 배열이 중복해서 담기는거지?
반복문이 두번 실행이 되는건가?

그리고 왜 버튼을 누를때마다 버튼이 증식하는가

의심이 될 만한 것으로는, 상태가 변경 할 떄마다 리렌더링으로 다시 실행이 된다는 점....



해결했다!!!!
정확한 원리까지는 아직 잘 모르겠지만, 매번 푸시를 해주는 작업이 상태를 지속적으로 변경을 해주다보니 일이 발생한 것 같다.
해결을 위해서 임의의 배열을 만들어서 거기에 숫자 값들을 담아줬고
useEffect 를 통해서 컴포넌트 리렌더링에 영향을 받지 않게, concat으로 합쳐버렸다
그러니까 되네! 




*/
