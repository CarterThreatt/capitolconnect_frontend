import "./FilterBar.css";
import FilterButton from "./FilterButton";

// The buttons will filter the list once the list is read from the json file
const FilterBar = () => {
    return (
        <nav className="filter-bar" aria-label="Filter monuments and memorials">
            <FilterButton text="All" status="filter-button-active" />
            <FilterButton text="Presidential" />
            <FilterButton text="War Memorials" />
            <FilterButton text="Open 24 Hours" />
            <FilterButton text="Tickets Required" />
        </nav>
    );
};

export default FilterBar;
