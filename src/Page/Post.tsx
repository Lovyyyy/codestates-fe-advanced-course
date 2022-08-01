import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();

  return (
    <div>
      <div>Hi</div>
    </div>
  );
};

export default Post;
