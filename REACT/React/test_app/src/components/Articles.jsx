function Articles({ articles, title, handleNewBlog }) {
  return (
    <article className="Article">
      <h2>{title}</h2>
      {articles.map((blog) => (
        <div className="blog" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <span>{blog.author}</span>
          <p>{blog.id}</p>
        </div>
      ))}
      <button onClick={handleNewBlog}>Add Blog</button>
    </article>
  );
}

export default Articles;
