import "./Logo.css";
import icon from "../images/capitol_icon.png";

const Logo = () => {
    return (
        <a href="#home" className="logo columns-mobile">
            <img className="logo-icon" src={icon} alt="" />
            <span className="logo-text">CAPITOL COMPASS</span>
        </a>
    );
};

export default Logo;
