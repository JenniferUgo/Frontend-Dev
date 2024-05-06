function Navbar() {
    const companyName = 'Puzzle Blog'
    return (
        <nav className="Navbar">
            <h1>{companyName}</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Signin</li>

            </ul>
        </nav>
    )
}

export default Navbar

