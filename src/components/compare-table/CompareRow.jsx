import "./CompareRow.css";
import CompareCell from "./CompareCell";

// type is "compare-header" for the navy row on top, leave it out for a normal row
const CompareRow = (props) => {
    return (
        <div className={"columns compare-row " + (props.type || "")}>
            <div className="one compare-label">{props.label}</div>
            {props.cells.map((cell) => (
                <CompareCell key={cell} text={cell} />
            ))}
        </div>
    );
};

export default CompareRow;
