import useFetch from "../context/useFetch";
import { Link } from "react-router-dom";

function Articles() {
  const { 
    data: posts, 
    isLoading, 
    error 
  } = useFetch("http://localhost:3000/posts");
  return (
    <main className="Articles">
      <h2>All Posts</h2>

      {isLoading && <div>Page is loading...</div>}
      {error && <div> {error} </div>}

      {posts && posts.map((post) => (
          <div className="post" key={post.id}>
            <Link to={`/postview/${post.id}`}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <span>{post.author}</span>
              <p>{post.id}</p>
            </Link>
          </div>
        ))}
    </main>
  );
}

export default Articles;
