import UserCard from "../userCardComponent/userCard.component";
import "./userlist.styles.css";

const UserList = ({ users }) => (
  <div className="user-list">
    {users.map((user) => {
      return <UserCard user={user} />;
    })}
  </div>
);

export default UserList;
