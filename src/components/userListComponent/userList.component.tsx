import { Component } from "react";
import UserCard from "../userCardComponent/userCard.component";
import "./userlist.styles.css";

class UserList extends Component {
  render() {
    return (
      <div className="user-list">
        {this.props.users.map((user) => {
          return <UserCard user={user} />;
        })}
      </div>
    );
  }
}

export default UserList;
