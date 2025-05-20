import { Component } from "react";

class UserCard extends Component {
  render() {
    const { id, name } = this.props.user;
    return <h1 key={id}>{name}</h1>;
  }
}

export default UserCard;
