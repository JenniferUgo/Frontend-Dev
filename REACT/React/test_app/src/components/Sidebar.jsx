function Sidebar() {
  const sidebar1 = "Handling Events and Forms in React"
  const sidebar2 = "Routing in React Applications"
  const sidebar3 = "Optimizing React Performance"

  const sArticle1 = "React provides a streamlined way to handle user interactions like clicks, form submissions, and more. Learn how to use event handlers and controlled components to create responsive, interactive forms."
  const sArticle2 = "Build multi-page experiences within your React applications using a routing library like React Router. This enables seamless navigation and management of different sections within your web app."
  const sArticle3 = "React is fast, but there are always ways to make it even faster. Explore techniques like memoization, lazy loading, and the use of production builds to maximize your React application's performance"
  return (
    <aside className="Sidebar">
      <h2>Recent Posts</h2>
      <div className="recent-blogs">
        <h3>{sidebar1}</h3>
        <p>
          {sArticle1}
        </p>
      </div>

      <div className="recent-blogs">
        <h3>{sidebar2}</h3>
        <p>
          {sArticle2}
        </p>
      </div>

      <div className="recent-blogs">
        <h3>{sidebar3}</h3>
        <p>
          {sArticle3}
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
