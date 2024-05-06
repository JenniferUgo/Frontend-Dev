function Home({posts, title, handleNewPost}) {
  return (
    <main className="Home">
        <h2>{title}</h2>
        {posts.map((post) => (
        <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <span>{post.author}</span>
            <p>{post.id}</p>
        </div>
        ))}
        <button onClick={handleNewPost}>Add Post</button>
    </main>
  )
}

export default Home