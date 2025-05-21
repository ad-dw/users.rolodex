import { Component } from "react";
import "./userCard.styles.css";

class UserCard extends Component {
  render() {
    const { id, name, email } = this.props.user;
    return (
      <div className="card-container">
        <img src={`https://robohash.org/${id}?set=set5&size=150x150`} />
        <h3 className="user-name">{name}</h3>
        <p>{email}</p>
      </div>
    );
  }
}

export default UserCard;
