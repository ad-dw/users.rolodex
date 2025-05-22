import { useEffect, useState } from "react";
import SearchBox from "./components/searchComponent/search.component";
import UserList from "./components/userListComponent/userList.component";
import "./App.css";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) => user.name.toLowerCase().includes(searchValue))
    );
  }, [users, searchValue]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app-title">Users Rolodex</h1>
      <SearchBox handleSearchChange={handleSearchChange} />
      {!!filteredUsers.length && <UserList users={filteredUsers} />}
    </div>
  );
};

export default App;
