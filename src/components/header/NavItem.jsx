import "./NavItem.css";
import { NavLink } from "react-router-dom";

// NavLink adds the class "active" by itself to the link of the page you are on
const NavItem = (props) => {
    return (
        <li className="nav-item">
            <NavLink to={props.to} end className="nav-link">
                {props.title}
            </NavLink>
        </li>
    );
};

export default NavItem;
