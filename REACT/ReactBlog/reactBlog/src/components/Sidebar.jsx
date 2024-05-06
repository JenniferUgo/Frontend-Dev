function Sidebar( {title, filteredPosts} ) { 
  return (
    <aside className="Sidebar">
        <h2>{title}</h2>
        {filteredPosts.map((post) => (
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