import "./FilterBar.css";
import FilterButton from "./FilterButton";

const filters = [
    { text: "All", value: "all" },
    { text: "Presidential", value: "presidential" },
    { text: "War Memorials", value: "war" },
    { text: "Open 24 Hours", value: "open24" },
    { text: "Tickets Required", value: "tickets" }
];

// selected is the filter that is on now, onSelect is called with the value of the button that was clicked
const FilterBar = (props) => {
    return (
        <nav className="filter-bar" aria-label="Filter monuments and memorials">
            {filters.map((filter) => (
                <FilterButton
                    key={filter.value}
                    text={filter.text}
                    active={props.selected == filter.value}
                    onClick={() => props.onSelect(filter.value)} />
            ))}
        </nav>
    );
};

export default FilterBar;
