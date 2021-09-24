import React from "react";

const UserData = (props) => {
  const { id, name, lastSeen, role } = props.user;

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{lastSeen}</td>
        <td>{role}</td>
        <td>
          <i
            class="far fa-trash-alt"
            onClick={() => props.clickHandler(id)}
          ></i>
        </td>
      </tr>
    </>
  );
};

export default UserData;
