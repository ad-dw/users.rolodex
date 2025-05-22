import "./search.styles.css";

const SearchBox = ({ handleSearchChange }) => (
  <input
    className="search-box"
    type="search"
    placeholder="Search user"
    onChange={handleSearchChange}
  />
);

export default SearchBox;
