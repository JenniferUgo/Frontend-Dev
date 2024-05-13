import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleNewBlog = () => {
    const newBlog = {
      title: "The Newest Blog",
      content: "This is an article about the post",
      author: "student 4",
      id: blogs.length + 1,
    };

    setBlogs([...blogs, newBlog]) ;
  };

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:3000/blogs')
      .then((res) => {
        if (!res.ok) {
          throw Error("Info not found" )
        }
        
        return res.json()
      })
    .then((data) => {
      setIsLoading(false)
      setBlogs(data)
      setError(null)
    })
    .catch(err => {
      setIsLoading(false)
      setError(err.message);
    })
    }, 2000)
    
  });

  const filteredArticles = 
  blogs && blogs.filter((blog) => blog.author === 'student 2')

  return (
    <div className="App-Component">
      <Navbar />

      {error && <div>{error}</div>}

      {isLoading && <div>Page is Loading...</div>}

       {blogs && (<Articles
        articles={blogs}
        title="All blogs"
        handleNewBlog={handleNewBlog}
      />
    )}

      {blogs && (
      <Sidebar 
      title="Student Two Blogs" 
      filteredArticles={filteredArticles} />
      )}
      <Footer />
    </div>
  );
}

export default App;
