import React from "react";

const User2 = ({ user, removeUser }) => {
  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={removeUser}>
          Remove
        </button>
      </td>
    </tr>
  );
};

export default User2;
