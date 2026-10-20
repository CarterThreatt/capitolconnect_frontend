import "./Logo.css";
import { Link } from "react-router-dom";
import icon from "./images/capitol_icon.png";

const Logo = () => {
    return (
        <Link to="/" className="logo columns-mobile">
            <img className="logo-icon" src={icon} alt="" />
            <span className="logo-text">CAPITOL COMPASS</span>
        </Link>
    );
};

export default Logo;
