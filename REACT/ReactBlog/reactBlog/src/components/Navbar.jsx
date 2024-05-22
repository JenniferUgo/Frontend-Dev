import { useState } from "react";
import { Link } from "react-router-dom";

const navigationItems = [
  { title: <Link to='/'>Home</Link>  },
  { title: <Link to={'/create'}>NewBlog</Link> },
  {
    title: "About Us", 
    submenu: [
      { title: "Our Team", link: "/about/team" },
      { title: "Mission", link: "/about/mission" },
    ],
  }, 
];

function Navbar() {
  const siteTitle = "Mastering React";
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <nav className="Navbar">
      <h1>{siteTitle}</h1>
      <ul>
        {navigationItems.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.title}</a>
            {item.submenu && (
              <>
                <button onClick={() => toggleSubmenu(index)}>▾</button>
                {activeSubmenu === index && (
                  <ul
                    className={`submenu ${
                      activeSubmenu === index ? "active" : ""
                    }`}
                  >
                    {item.submenu.map((subitem) => (
                      <li key={subitem.link}>
                        <a href={subitem.link}>{subitem.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
