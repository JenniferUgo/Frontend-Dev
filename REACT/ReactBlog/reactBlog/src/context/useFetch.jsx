import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [entries, setPosts ] = useState (null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)


         // Fetch data on initial render
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
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
      fetch(url)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setPosts(data)
    })
  }, [entries])

  return {entries, isLoading, error}
}

export default useFetch