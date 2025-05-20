import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <input
        type="search"
        placeholder="Search user"
        onChange={this.props.handleSearchChange}
      />
    );
  }
}

export default SearchBox;
