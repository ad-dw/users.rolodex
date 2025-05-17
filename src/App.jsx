import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }));
  }

  handleSearchChange(event) {
    this.setState({ searchValue: event.target.value.toLowerCase() });
  }

  render() {
    const filteredUsers = this.state.users.filter((user) =>
      user.name.toLowerCase().includes(this.state.searchValue)
    );
    return (
      <div>
        <input
          type="search"
          placeholder="Search user"
          onChange={this.handleSearchChange.bind(this)}
        />
        {!!filteredUsers.length &&
          filteredUsers.map((user) => <h1 key={user.id}>{user.name}</h1>)}
      </div>
    );
  }
}

export default App;
