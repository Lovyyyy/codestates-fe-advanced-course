> - 완성된 GIF 파일 및 배포 링크
>

![Peek 2022-08-05 22-30](https://user-images.githubusercontent.com/89245198/183087655-28a7d943-8d08-4077-928b-bd1e1d8c93f2.gif)

> - 배포 링크 : http://codestates-fe-advanced-course-preproject.s3-website.ap-northeast-2.amazonaws.com/

---

> - 프로젝트 실행 방법 :
1. git clone "레포지토리 주소"  을 통해 레포지토리의 파일을 로컬 디렉토리에 클론 한다.
2. 터미널에서  npm install 를 입력하여 의존성 패키지들을 설치한다.
3. 터미널에서 npm start 를 입력 하여 브라우저로 실행시킨다. 
---

> - 사용한 스택 목록 : Type-Script, React, HTML, CSS
> - 사용한 라이브러리 : Styeld-componenet, React-Router-dom, React-Icon, Axios

---

> - 구현한 기능 목록 (Software Requirement Specification)
>
> 게시물 리스트  
> 게시물 상세 페이지  
> 게시물 상세 페이지 내 Comment  
> 페이지네이션  
> Toggle 버튼을 Dark / Light 테마 변경 방식   
> ~~Search 기능~~
---

> - 구현 방법 및 구현 시 어려웠던 점
>
> 타입스크립트를 적용함으로써 올바른 타입을 넣는 방식이 꽤 어려웠습니다.  
> 특히 Props를 전달하는 과정에서 Props의 interface를 설정하여 전달 하였으나,

```
 'IntrinsicAttributes & PropsInterface[]' 형식에 'props-name' 속성이 없습니다.
```
> 위와 같은 에러가 발생했고, 정확히 왜 이런 문제가 발생 하는지 스스로 파악해보고 싶은 욕심에 거의 하루 정도를 에러 해결에만 몰두 했던 것 같습니다.
>
> 최종적으로 해결 및 에러가 발생한 사유를 파악하게 되었는데, 우리가 전달하는 props는 하위 컴포넌트에서 props 객체 내부에 있는 요소라는걸 간과했습니다.
>
> 단순히 이로 인해 단순히 상위 컴포넌트의 인터페이스를 넘긴다고 하여도, 실제 전달 된 props는 상위 컴포넌트에서 처럼 사용 되는게 아니라 객체의 구조 분해 할당을 통해서 사용이 필요하고, 이를 위해서는 구조분해가 되는 props 객체의 타입을 정해 줄 필요가 있던 것 입니다.
>
> 예를 들면 하기와 같이 프롭스를 보내는 경우 console을 통해서 posts를 확인하면 정상적으로 콘솔에 찍힙니다.
```
const Main = ( posts : PostInterface[]) => {

  useEffect (()=> {console.log(posts)},[])
}

```
> 콘솔에는 정상적으로 작동이 되는데, 타입스크립트가 자꾸 에러를 알려줘서 이해가 더 어려웠지만, 타입스크립트는 올바른 타입이 들어오지 않았기 때문에 거부를 한 것이였습니다.
>
> 위와 같은 props를 정상적으로 사용하기 위해서는 아래와 같이 props 객체에 대한 인터페이스를 선언해주고, 가지고 온 posts를 props 객체의 구조분해할당을 해서 사용을 해야 했습니다.
```
export interface MainPropsInterface {
  posts: PostInterface[];
}

const Main = ( {posts} : MainPropsInterface) => {

  useEffect (()=> {console.log(posts)},[])
}

```

> 지금 생각하면 정말 간단한 부분이지만, 당연시 하던 코드를 다시 한 번 짚어볼 수 있는 좋은 경험이였습니다.
>
> 이 외에는 페이지네이션 을 구현하는 과정에서 리렌더링에 따른 어려움이 있었고, 이는 페이지네이션 부분에서 이어서 작성하겠습니다.

---

> - (가산점) 직접 작성한 Wireframe 혹은 Prototype (figma 등의 다양한 툴 활용)  
>   와이어프레임 : https://miro.com/app/board/uXjVOyDuZrk=/
>
> 와이어 프레임은 굉장히 러프하게만 잡고 진행하였으나, 구현 과정에서 기획 단계에서 없던 기능을 추가 하는 등 변경점이 있었습니다.

---

> - (가산점) 추가 구현 사항에 대한 구현 방법과 설명
>
> 추가 구현 사항으로는 페이지 네이션과, 토글 버튼을 통한 색상 테마 변경이 있습니다.  
>
> 페이지 네이션의 경우, axios 요청을 통해 fetching 한 데이터를 기반으로 하였습니다.   
>
> 받아 온 데이터를 기반으로 게시글 리스트가 맵핑 되는 페이지에서, 각각 한 페이지의 최대 글 수를 보여주는 limit , 현재 페이지 수를 나타내는 page 를 상태로 추가하고,   
>
> 맵핑 할 데이터의 범위를 설정하기 위한 numChanger 변수를 선언하였고, (page -1) * limit를 할당하였으며, postNumber 변수를 선언하고 전체 데이터의 길이를 할당하였습니다.    
>
> 데이터는  맵핑 전 slice 메소드를 사용하여 numChanger ~ numChanger + limit 까지의 데이터만 맵핑 할 수 있도록 데이터에 제한을 두었고, 페이지 네이션 컴포넌트를 별도로 만들었습니다.   
> 
> 페이지네이션 컴포넌트로는 postNumber, limit, page, setPage 총 4개의 prop를 전달 하였으며, postNumber는 posts.length를 담고 있습니다   
>
> 페이지네이션에서는 totalPage 라는 상태 값을 새로 추가하며 빈 배열로 초기화를 시켜둡니다.   
>
> postNumber를 limit으로 나눈 수 까지 순차적으로 1씩 증가하는 반복문을 통해 숫자로 이루어진 배열을 생성하였으며, 이를 push를 통해 값을 넣었습니다.     
>
> 값이 들어 있는 totalPage를 맵핑하여 페이지네이션을 구현 하였으나, 버튼을 클릭 할 때마다 페이지네이션이 브라우저에 한 개씩 추가 생성 되었습니다.    
>
> 정확한 원인은 파악을 못 했지만, 상태가 변경 됨에 따라 리렌더링이 되고, 리렌더링이 될 때마다 반복이 다시 실행 되고, 배열에 push가 된다고 예상하였습니다.
>
> 그리하여 따로 배열을 하나 만들고, useEffect 내부에서 concat 하여 리렌더링에서 벗어 날 수 있도 하여 해결은 하였습니다.    
>
> 해결은 하였으나 정확히 어떤 사유로 이러한 에러가 발생하게 되었는지 파악은 못 한 상황입니다.   
>
> 개인적인 예상으로는 state의 불변성 과 상태 변경에 대한 리렌더링이 연관 된 것으로 보이지만, 아직 정확한 사유는 파악을 하지 못 해 보다 깊이 생각을 해봐야 할 것 같습니다. 
> 
>
> 다음으로 토글 버튼을 통한 테마 변경 입니다.   
> 
> 테마 변경은 styled-componenet의 ThemeProvider 기능을 이용하였습니다.  
>
> 다만 새로 생성하는 테마 객체에 대해서 현재 react에서 설명이 되어 있지 않기 때문에, style.d.ts 파일을 생성하여 styled-componenet의 테마 객체 인터페이스를 생성합니다.
>
> 인터페이스를 만든 후에는 theme.ts 파일에 새로운 테마 객체들을 생성 하였으며, state를 통해 ThemeProvider로 전달되는 theme을 삼항연산자로 결정 되게 하였습니다.  
>
> 마지막으로 상태변경함수를 props로 토글 컴포넌트로 전달하여 토글 컴포넌트가 작동 할 때 상태의 변경이 될 수 있도록 처리하고 어떤 테마로 변경 되는지 유저가 쉽게 파악 할 수 있도록 하였습니다.    
