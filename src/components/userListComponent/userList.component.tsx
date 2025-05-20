import { Component } from "react";
import UserCard from "../userCardComponent/userCard.component";

class UserList extends Component {
  render() {
    return this.props.users.map((user) => {
      return (
        <div key={user.id}>
          <UserCard user={user} />
        </div>
      );
    });
  }
}

export default UserList;
