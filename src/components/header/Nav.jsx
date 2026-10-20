import "./Nav.css";
import NavItem from "./NavItem";

// The links will point to real pages once the rest of the site is built
const links = [
    { title: "Home", href: "#home", active: true },
    { title: "Monuments & Memorials", href: "#monuments" },
    { title: "Capitol Tours", href: "#capitol-tours" },
    { title: "White House Tours", href: "#white-house-tours" },
    { title: "Smithsonian", href: "#smithsonian" },
    { title: "Contact", href: "#contact" }
];

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                {links.map((link) => (
                    <NavItem
                        key={link.title}
                        title={link.title}
                        href={link.href}
                        active={link.active}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
