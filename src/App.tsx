import { useEffect, useState } from "react";
import Router from "./componenet/router";

interface postsDataInterface {
  body: string;
  id: number;
  title: string;
  userId: number;
}
function App() {
  const [postData, setPostData] = useState<postsDataInterface[]>();

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
