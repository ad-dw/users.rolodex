import { Component } from "react";
import "./search.styles.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        className="search-box"
        type="search"
        placeholder="Search user"
        onChange={this.props.handleSearchChange}
      />
    );
  }
}

export default SearchBox;
