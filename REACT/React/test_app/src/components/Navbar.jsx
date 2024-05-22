import { Link } from "react-router-dom"

function Navbar() {
    const companyName = 'Puzzle Blog'
    return (
        <nav className="Navbar">
            <h1>{companyName}</h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/create'>New Blog</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;

