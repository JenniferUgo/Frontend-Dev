import { useParams } from "react-router-dom";
import useFetch from "../context/useFetch";

function PostView() {
  const { id } = useParams();

  const { data: post, 
    isLoading, 
    error } = useFetch(
    `http://localhost:3000/posts/${id}`
  );

  return (
    <>
      {isLoading && <div>Content is loading...</div>}
      {error && <div>Error loading content...</div>}
      {post && (
        <main>
          <h2>{post.title}</h2>
          <p>{post.author}</p>
          <div>{post.content}</div>
        </main>
      )}
    </>
  );
}

export default PostView;
