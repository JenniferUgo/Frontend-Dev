import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import { useState } from 'react'

function App() {
  const titleOne = "React Fundamentals: Understanding Components and JSX";
  const titleTwo = "The Power of State and Props in React";
  const titleThree = "Mastering the React Component Lifecycle";

  const article1 = "React revolutionizes web development by breaking UI into reusable components. Each component manages its own state and rendering logic. Understanding components is the foundation of React development. JSX, a syntax extension, provides a way to write HTML-like structures within your JavaScript code, making it incredibly intuitive to define the structure of your components and how they should look."
  const article2 = "In React, components thrive on data. State represents a component's internal data that can change over time, triggering UI updates. Props, short for properties, are how components communicate with each other. They allow you to pass data from parent components to child components, creating a clean, predictable data flow. Understanding state and props is essential for building organized React applications."
  const article3 = "React components have a well-defined lifecycle –  mounting (being added to the DOM), updating (reacting to state or prop changes), and unmounting (being removed from the DOM). React provides lifecycle methods like componentDidMount and componentWillUnmount that you can hook into to perform actions at specific phases, such as fetching data or cleaning up resources, giving you precise control."


  const [entries, setPosts ] = useState ([
   { 
    title: titleOne,
    content: article1,
    author: 'student1',
    id: 1
    },
    { 
    title: titleTwo,
    content: article2,
    author: 'student2',
    id: 2
    },
    { 
    title: titleThree,
    content: article3,
    author: 'student3',
    id: 3
    }

  ])
  const handleNewPost = () => {
    const newPost = {
      title: 'The Newst Post',
      content: 'This is an article about the post',
      author: 'Student 4',
      id: entries.length + 1,
    }

    setPosts({...entries, newPost})
  };

  const filteredPosts = entries.filter((post) => post.id === 'student 2')
  return (
    <div className='App-Component'>
      <Navbar/>
      <Navigation />
      <Home 
      posts={entries} 
      title='All Posts' 
      handleNewPost={handleNewPost} />
      <Sidebar title='Student 2 Posts'
      filteredPosts={filteredPosts} 
      />
      <Footer/>
    </div>
  )
}


export default App
