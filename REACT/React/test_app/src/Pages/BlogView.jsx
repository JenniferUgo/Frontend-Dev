import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../context/useFetch";

function BlogView() {
  const { id } = useParams();

  const navigate = useNavigate()

  const { data: blog, 
    isLoading, 
    error } = useFetch(
    `http://localhost:8000/blogs/${id}`);

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
        method: 'DELETE'
    }).then(() => navigate('/'))
  }

  return (
    <>
      {isLoading && <div>Content is loading...</div>}
      {error && <div>Error loading content..</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <div>{blog.content}</div>

          <button className="delete" onClick={() => handleDelete()}>Delete</button>
        </article>
      )}
    </>
  );
}

export default BlogView;
