import React, { Component } from "react";

class New extends Component {
  state = {};
  render() {
    const { item } = this.props;
    return (
      <div className="col-md-6 col-lg-4 col-xl-3 mb-3">
        <div className="card">
          <div className="card-header">
            <h3>{item.title}</h3>
          </div>
          <div className="card-body">
            <p>{item.article}</p>
            <p>
              <b>Published on date</b>
              {item.date}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default New;
