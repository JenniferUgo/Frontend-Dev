import { useEffect, useState } from "react";
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Sidebar from './components/Sidebar'

function App() {

  const [entries, setPosts ] = useState (null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleNewPost = () => {
    const newPost = {
      title: 'The Newst Post',
      content: 'This is an article about the post',
      author: 'Student 4',
      id: entries.length + 1,
    }

    setPosts({...entries, newPost})
  };

     // Fetch data on initial render
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3000/posts")
      .then((res) => {
        if (!res.ok) {
          throw Error("Info Not Found")
        }

        return res.json()
      })
      .then((data) => {
        setIsLoading(false)
        setPosts(data)
        setError(null)
      })
      .catch(err => {
        setIsLoading(false)
        setError(err.message)
      })
    }, 2000)
    }, [])


    // fetch data on any update (blog state change)
  useEffect(() => {
    if(entries)
      fetch('https://localhost:3000/posts')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setPosts(data)
    })
  })


  const filteredPosts = 
  entries && entries.filter((post) => post.author === 'student 2')
  
  return (
    <div className='App-Component'>
      <Navbar/>

      {error && <div>{error}</div>}

      {isLoading && <div>Page is Loading...</div>}

      <Navigation />

      {entries && (<Home 
      posts={entries} 
      title='All Posts' 
      handleNewPost={handleNewPost} 
      />
      )}

      {entries && (<Sidebar title='Student 2 Posts'
      filteredPosts={filteredPosts} 
      />
    )}
      
      <Footer/>
    </div>
  )
}


export default App
