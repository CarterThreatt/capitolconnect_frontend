import "./SlideButton.css";

const SlideButton = (props) => {
    return (
        <button className="slide-button" onClick={props.onClick} aria-label={props.label}>{props.text}</button>
    );
};

export default SlideButton;
