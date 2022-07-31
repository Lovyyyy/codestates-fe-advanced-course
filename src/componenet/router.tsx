import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Post from "./Post";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:postId" element={<Post />}>
          {/* <Route path="chart" element={<Comment />} /> */}
          {/* <Route path="price" element={<Price />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
