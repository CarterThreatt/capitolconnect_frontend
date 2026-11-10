import "./StatusMessage.css";

const StatusMessage = (props) => {
    return (
        <div className={"status-message " + props.kind}>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    );
};

export default StatusMessage;
