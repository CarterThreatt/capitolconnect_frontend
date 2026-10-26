import "./StatBox.css";

const StatBox = (props) => {
    return (
        <div className="one stat-box">
            <p className="stat-box-number">{props.number}</p>
            <p>{props.text}</p>
        </div>
    );
};

export default StatBox;
