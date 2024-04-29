import { useState } from "react";

function Articles() {
  const weatherUpdate = "React Fundamentals: Understanding Components and JSX";
  const trafficUpdate = "The Power of State and Props in React";
  const studentUpdate = "Mastering the React Component Lifecycle";

  const article1 = "React revolutionizes web development by breaking UI into reusable components. Each component manages its own state and rendering logic. Understanding components is the foundation of React development. JSX, a syntax extension, provides a way to write HTML-like structures within your JavaScript code, making it incredibly intuitive to define the structure of your components and how they should look."
  const article2 = "In React, components thrive on data. State represents a component's internal data that can change over time, triggering UI updates. Props, short for properties, are how components communicate with each other. They allow you to pass data from parent components to child components, creating a clean, predictable data flow. Understanding state and props is essential for building organized React applications."
  const article3 = "React components have a well-defined lifecycle –  mounting (being added to the DOM), updating (reacting to state or prop changes), and unmounting (being removed from the DOM). React provides lifecycle methods like componentDidMount and componentWillUnmount that you can hook into to perform actions at specific phases, such as fetching data or cleaning up resources, giving you precise control."


  const [blogs, setBlogs] = useState ([
  {
    title: weatherUpdate, 
    content: article1,
    author: 'student 1',
    id: 1
  },

  {
    title: trafficUpdate, 
    content: article2,
    author: 'student 2',
    id: 2
  },
  {
    title: studentUpdate, 
    content: article3,
    author: 'student 3',
    id: 3
  }
])

  return (
    <article className="Article">
      {blogs.map((blog) => (
      <div className="blog" key={blog.id}>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
        <span>{blog.author}</span>
      </div>
      ))}
    </article>
  )
}

export default Articles;
