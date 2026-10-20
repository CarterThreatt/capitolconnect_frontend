import "./NavItem.css";
import { NavLink } from "react-router-dom";

// NavLink adds the class "active" by itself to the link of the page you are on
const NavItem = ({ title, to }) => {
    return (
        <li className="nav-item">
            <NavLink to={to} end className="nav-link">
                {title}
            </NavLink>
        </li>
    );
};

export default NavItem;
