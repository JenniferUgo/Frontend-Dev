import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div>
        <h1>Sorry : = \</h1>
        <p>Page not found</p>

        <Link to={'/'}>Go back to homepage</Link>
    </div>
  )
}

export default NotFound