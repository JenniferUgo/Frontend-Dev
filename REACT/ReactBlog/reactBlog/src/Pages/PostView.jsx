import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../context/useFetch";

function PostView() {
  const { id } = useParams();

  const navigate = useNavigate()

  const { data: post, 
    isLoading, 
    error } = useFetch(
    `http://localhost:3000/posts/${id}`
  );

  const handleDelete = () => {
    fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE'
    }).then(() => navigate('/'))
  }

  return (
    <>
      {isLoading && <div>Content is loading...</div>}
      {error && <div>Error loading content...</div>}
      {post && (
        <main>
          <h2>{post.title}</h2>
          <p>{post.author}</p>
          <div>{post.content}</div>

          <button className="delete" onClick={() => handleDelete()}>Delete</button>
        
        </main>
      )}
    </>
  );
}

export default PostView;
