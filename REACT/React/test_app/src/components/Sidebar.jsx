function Sidebar({ title, filteredArticles }) {
  return (
    <aside className="Sidebar">
      <h2>{title}</h2>
      {filteredArticles.map((blog) => {
        <div className="recent-blogs" key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <span>{blog.author }</span>
          <p>{blog.id}</p>
        </div>;
      })}
    </aside>
  );
}

export default Sidebar;
