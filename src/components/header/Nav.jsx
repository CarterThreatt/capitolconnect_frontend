import "./Nav.css";
import React from "react";
import NavItem from "./NavItem";
import NavToggle from "./NavToggle";

// Each link points to a route set up in index.js
const links = [
    { title: "Monuments & Memorials", to: "/monuments-and-memorials" },
    { title: "Capitol Tours", to: "/capitol-tours" },
    { title: "White House Tours", to: "/white-house-tours" },
    { title: "Smithsonian", to: "/smithsonian" },
    { title: "Contact", to: "/contact" }
];

const Nav = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    // picking a page closes the menu again
    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <nav className="nav">
            <NavToggle open={menuOpen} onToggle={toggleMenu} />
            <ul className={menuOpen ? "nav-list show" : "nav-list"}>
                {links.map((link) => (
                    <NavItem
                        key={link.title}
                        title={link.title}
                        to={link.to}
                        onClick={closeMenu}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
