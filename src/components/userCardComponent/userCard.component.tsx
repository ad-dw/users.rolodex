import "./userCard.styles.css";

const UserCard = ({ user: { id, name, email } }) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${id}?set=set5&size=150x150`}
      className="user-image"
    />
    <h3 className="user-name" title={name}>
      {name}
    </h3>
    <p className="user-email" title={email}>
      {email}
    </p>
  </div>
);

export default UserCard;
