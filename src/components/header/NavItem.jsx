import "./NavItem.css";

const NavItem = ({ title, href, active }) => {
    return (
        <li className="nav-item">
            <a href={href} className={active ? "nav-link nav-link-active" : "nav-link"}>
                {title}
            </a>
        </li>
    );
};

export default NavItem;
