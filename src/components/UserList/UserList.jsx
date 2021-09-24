import React from "react";
import "./UserList.css";
import UserData from "../UserData/UserData";

const UserList = (props) => {
  const deleteUser = (id) => {
    props.getUserId(id);
  };

  const renderUserList = props.users.map((user) => {
    return (
      <>
        <UserData user={user} clickHandler={deleteUser} key={user.id} />
      </>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <table className="table table-bordered">
          <thead className="table-secondary">
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Last Signed In</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-body">{renderUserList}</tbody>
        </table>
        <div className="pagination">
          <nav aria-label="...">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item" aria-current="page">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default UserList;
