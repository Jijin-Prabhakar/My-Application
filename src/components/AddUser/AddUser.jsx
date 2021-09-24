import React from "react";
import "./AddUser.css";

class AddUser extends React.Component {
  state = {
    name: "",
    lastSeen: "2 days ago",
    role: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "") {
      alert("Please enter your Email ID !");
      return;
    }
    this.props.addUserHandler(this.state);
    this.setState({ name: "" });
  };

  render() {
    return (
      <>
        <div className="container modal-container">
          <div className="row">
            <button
              type="button"
              class="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add User
            </button>
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="row">
                    <div className="col-12 col-md-6 content_left">
                      <p>
                        <i className="fas fa-user-plus"></i>
                      </p>
                      <p className="left-content">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Natus quas, quibusdam maxime perferendis quisquam
                        expedita cumque quia. Aperiam provident dolore iure
                        expedita, ratione nobis ipsa. Accusantium libero
                        laudantium doloremque dignissimos?
                      </p>
                    </div>
                    <div className="col-12 col-md-6 content_right">
                      <div className="form-section">
                        <h5 class="modal-title" id="exampleModalLabel">
                          User Information
                        </h5>
                        <form onSubmit={this.add}>
                          <div className="pt-3">
                            <label htmlFor="#">Email ID of User</label>
                            <br />
                            <input
                              type="text"
                              value={this.state.name}
                              onChange={(e) =>
                                this.setState({ name: e.target.value })
                              }
                            />
                          </div>
                          <div className="pt-3">
                            <label htmlFor="#">Role</label>
                            <br />
                            <select
                              name="role"
                              id="role"
                              onChange={(e) =>
                                this.setState({ role: e.target.value })
                              }
                            >
                              <option value="Admin">Admin</option>
                              <option value="Sales">Sales</option>
                              <option value="Owner">Owner</option>
                            </select>
                          </div>
                          <div className="button-section pt-4">
                            <button
                              type="button"
                              className="btn btn-warning"
                              data-bs-dismiss="modal"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="btn btn-primary"
                              data-bs-dismiss="modal"
                            >
                              Add
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddUser;
