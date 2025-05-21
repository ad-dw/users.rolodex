import { Component } from "react";
import SearchBox from "./components/searchComponent/search.component";
import UserList from "./components/userListComponent/userList.component";
import "./App.css";

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
      <div className="App">
        <SearchBox handleSearchChange={this.handleSearchChange.bind(this)} />
        {!!filteredUsers.length && <UserList users={filteredUsers} />}
      </div>
    );
  }
}

export default App;
