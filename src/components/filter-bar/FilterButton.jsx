import "./FilterButton.css";

const FilterButton = (props) => {
    return (
        <button
            className={props.active ? "filter-button filter-button-active" : "filter-button"}
            onClick={props.onClick}>{props.text}</button>
    );
};

export default FilterButton;
