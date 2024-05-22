import useFetch from "../context/useFetch"

function Sidebar() { 
  const {
    entries,
    isLoading, 
    error
  } = useFetch('http://localhost:3000/posts')

  const filteredPosts =
    entries && entries.filter((post) => post.author === 'student 2')

  return (
    <aside className="Sidebar">
        <h2>Filtered Posts</h2>

        {isLoading && <div>Page is loading...</div>}
        {error && <div> {error}</div>}

        {entries && filteredPosts.map((post) => (
          <div className="recent-posts" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <span>{post.author}</span>
            <p>{post.id}</p>
        </div>
        ))}
    </aside>
  )
}

export default Sidebar