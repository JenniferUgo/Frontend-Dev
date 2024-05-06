import "./App.css";
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const weatherUpdate = "Lorem ipsum dolor sit amet.";
  const trafficUpdate = "Lorem ipsum dolor sit amet.";
  const studentUpdate = "Lorem ipsum dolor sit amet.";

  const article1 =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium vel veniam culpa eligendi omnis consectetur, quod sed maiores itaque ipsa ex assumenda esse impedit nulla tempore animi voluptatum, rerum iusto sunt inventore obcaecati. Delectus rerum maxime facilis ipsum consequatur quas tempora, non, ducimus architecto harum similique, autem officia esse. ";
  const article2 =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam molestias incidunt facere quia alias repudiandae atque debitis hic? Possimus suscipit commodi eaque beatae velit praesentium enim, consequatur doloremque mollitia ab repudiandae, iusto id dolorum voluptatem nulla porro. Et accusantium perferendis vel, alias numquam voluptates rerum pariatur corrupti id aut doloremque. ";
  const article3 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, facilis dolorem fugit fugiat ut, qui optio ullam, quae voluptas delectus enim saepe beatae quasi debitis quo. Neque possimus eveniet, repellendus natus magnam et, molestiae cum tempore blanditiis tenetur ab officiis suscipit recusandae unde aliquid minus ipsa. Aliquam saepe quaerat sed. ";

  const [blogs, setBlogs] = useState([
    {
      title: weatherUpdate,
      content: article1,
      author: "student 1",
      id: 1,
    },

    {
      title: trafficUpdate,
      content: article2,
      author: "student 2",
      id: 2,
    },
    {
      title: studentUpdate,
      content: article3,
      author: "student 3",
      id: 3,
    },
  ]);
  const handleNewBlog = () => {
    const newBlog = {
      title: "The Newest Blog",
      content: "This is an article about the post",
      author: "student 4",
      id: blogs.length + 1,
    };

    setBlogs([...blogs, newBlog]);
  };

  const filteredArticles = blogs.filter((blog) => blog.author === 'student 2')

  return (
    <div className="App-Component">
      <Navbar />
      <Articles
        articles={blogs}
        title="All blogs"
        handleNewBlog={handleNewBlog}
      />

      <Sidebar 
      title="Student Two Blogs" 
      filteredArticles={filteredArticles} />
      <Footer />
    </div>
  );
}

export default App;
