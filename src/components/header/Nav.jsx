import "./Nav.css";
import NavItem from "./NavItem";

// Each link points to a route set up in index.js
const links = [
    { title: "Home", to: "/" },
    { title: "Monuments & Memorials", to: "/monuments-and-memorials" },
    { title: "Capitol Tours", to: "/capitol-tours" },
    { title: "White House Tours", to: "/white-house-tours" },
    { title: "Smithsonian", to: "/smithsonian" },
    { title: "Contact", to: "/contact" }
];

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                {links.map((link) => (
                    <NavItem
                        key={link.title}
                        title={link.title}
                        to={link.to}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
