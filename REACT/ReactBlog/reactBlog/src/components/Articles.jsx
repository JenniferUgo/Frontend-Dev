import useFetch from '../context/useFetch'

function Articles() {
  const {
    entries, 
    isLoading, 
    error
  } = useFetch('http://localhost:3000/posts')
  return (
    <main className="Articles">
        <h2>All Posts</h2>

        {isLoading && <div>Page is loading...</div>}
        {error && <div> {error} </div>}

        {entries && entries.map((post) => (
        <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <span>{post.author}</span>
            <p>{post.id}</p>
        </div>
        ))}
    </main>
  )
}

export default Articles