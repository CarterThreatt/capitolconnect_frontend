import "./Dot.css";

const Dot = (props) => {
    return (
        <button
            className={props.active ? "dot dot-active" : "dot"}
            onClick={props.onClick}
            aria-label={"Go to stop " + props.number}></button>
    );
};

export default Dot;
