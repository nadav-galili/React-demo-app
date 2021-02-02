import React, { Component } from "react";

class Tasks extends Component {
  state = {
    tasks: [
      { id: 1, title: "drink coffe", done: false },
      { id: 2, title: "do homework", done: true },
      { id: 3, title: "take a shower", done: true },
      { id: 4, title: "eat dinner", done: false },
      { id: 5, title: "watch tv", done: true },
    ],
  };

  removeTask = (taskId) => {
    let { tasks } = this.state;
    tasks = tasks.filter((task) => task.id !== taskId);
    this.setState({ tasks });
  };

  changeStatus = (taskId) => {
    let { tasks } = this.state;
    tasks = tasks.map((task) => {
      if (task.id === taskId) task.done = !task.done;
      return task;
    });

    this.setState({ tasks });
  };
  render() {
    const { tasks } = this.state;
    if (tasks.length === 0)
      return (
        <p>
          <i>All the tasks are done</i>
        </p>
      );
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Done</th>

                  <th>Status change</th>

                  <th>Remove task</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.done ? "Yes" : "No"}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          this.changeStatus(task.id);
                        }}
                      >
                        Change Status
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          this.removeTask(task.id);
                        }}
                      >
                        remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;
