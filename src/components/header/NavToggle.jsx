import "./NavToggle.css";

// The three line button that opens and closes the menu on small screens
const NavToggle = (props) => {
    return (
        <button
            className={props.open ? "nav-toggle nav-toggle-open" : "nav-toggle"}
            onClick={props.onToggle}
            aria-label="Toggle navigation menu"
            aria-expanded={props.open}>
            <span className="nav-toggle-line"></span>
            <span className="nav-toggle-line"></span>
            <span className="nav-toggle-line"></span>
        </button>
    );
};

export default NavToggle;
