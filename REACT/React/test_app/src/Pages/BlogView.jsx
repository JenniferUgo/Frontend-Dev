import { useParams } from "react-router-dom";
import useFetch from "../context/useFetch";

function BlogView() {
  const { id } = useParams();

  const { data: blog, 
    isLoading, 
    error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  
  return (
    <>
      {isLoading && <div>Content is loading...</div>}
      {error && <div>Error loading content..</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <div>{blog.content}</div>
        </article>
      )}
    </>
  );
}

export default BlogView;
