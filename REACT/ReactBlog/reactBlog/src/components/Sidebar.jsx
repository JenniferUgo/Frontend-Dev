import useFetch from "../context/useFetch";
import { Link } from "react-router-dom";

function Sidebar() {
  const { 
    data: posts, 
    isLoading, 
    error 
  } = useFetch("http://localhost:3000/posts");

  const filteredPosts =
    posts && posts.filter((post) => post.author === "student 2");

  return (
    <aside className="Sidebar">
      <h2>Recent Posts</h2>

      {isLoading && <div>Page is loading...</div>}
      {error && <div> {error}</div>}

      {filteredPosts &&
        filteredPosts.map((post) => (
          <div className="recent-posts" key={post.id}>
            <Link to={`/postview/${post.id}`}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <span>{post.author}</span>
              <p>{post.id}</p>
            </Link>
          </div>
        ))}
    </aside>
  );
}

export default Sidebar;
