import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comment from "./Comment";
import Main from "../Page/Main";
import Post from "../Page/Post";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:postId" element={<Post />}>
          <Route path="price" element={<Comment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
