import { Link } from "react-router-dom";
import useFetch from "../context/useFetch";

function Articles() {
  const {
    data: blogs, 
    isLoading, 
    error
  } = useFetch('http://localhost:8000/blogs')
  return (
    <article className="Article">
      <h2>All Blogs</h2>

      {isLoading && <div>Page is loading...</div>}
      {error && <div>{error}</div>}

      {blogs && blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <Link to={`/blogview/${blog.id}`}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <span>{blog.author}</span>
          <p>{blog.id}</p>
          </Link>
        </div>
      ))}
    </article>
  );
}

export default Articles;
