import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

interface postsDataInterface {
  body: string;
  id: number;
  title: string;
  userId: number;
}
function App() {
  const [postData, setPostData] = useState<postsDataInterface[]>();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setPostData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(postData);

  return (
    <div>
      <h1>HELLO MY LOVE!</h1>
    </div>
  );
}

export default App;
