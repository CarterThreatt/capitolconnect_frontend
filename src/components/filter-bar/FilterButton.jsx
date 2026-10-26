import "./FilterButton.css";

// status is "filter-button-active" for the button that is selected
const FilterButton = (props) => {
    return (
        <button className={"filter-button " + (props.status || "")}>{props.text}</button>
    );
};

export default FilterButton;
