import React, { Component } from "react";
import axios from "axios";
import User2 from "./user2";

class Users2 extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      this.setState({ users: response.data });
    });
  }

  removeUser = (userId) => {
    let { users } = this.state;
    users = users.filter((user) => user.id !== userId);
    this.setState({ users });
  };

  render() {
    const { users } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered mt-5">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <User2
                    user={user}
                    key={user.id}
                    removeUser={() => this.removeUser(user.id)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Users2;
