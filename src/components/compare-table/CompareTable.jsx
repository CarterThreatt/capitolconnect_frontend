import "./CompareTable.css";

// The rows are passed in between the tags
const CompareTable = (props) => {
    return (
        <div className="compare-table">{props.children}</div>
    );
};

export default CompareTable;
