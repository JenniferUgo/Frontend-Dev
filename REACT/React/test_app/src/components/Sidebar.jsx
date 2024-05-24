import { Link } from "react-router-dom";
import useFetch from "../context/useFetch";

function Sidebar() {
  const {
    data: blogs, 
    isLoading, 
    error
  } = useFetch('http://localhost:8000/blogs')

  const filteredBlogs = 
    blogs && blogs.filter((blog) => blog.author === 'student 2')
  
    return (
    <aside className="Sidebar">
      <h2>Filtered Posts</h2>

      {isLoading && <div>Page is loading...</div>}
      {error && <div> {error}</div>}

      {filteredBlogs && filteredBlogs.map((blog) => (
        <div className="recent-blogs" key={blog.id}>
          <Link to={`/blogview/${blog.id}`}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <span>{blog.author }</span>
          <p>{blog.id}</p>
          </Link>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
