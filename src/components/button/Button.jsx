import "./Button.css";

// A button that opens a page outside of this site in a new tab
const Button = (props) => {
    return (
        <a className="button" href={props.href} target="_blank" rel="noreferrer">{props.text}</a>
    );
};

export default Button;
