import React, { Component } from "react";
class Pageheader2 extends Component {
  state = {};
  render() {
    const { children: pageTitle } = this.props;
    return (
      <div className="row">
        <div className="col-12 my-5">
          <h1 className="display-4">{pageTitle}</h1>
        </div>
      </div>
    );
  }
}

export default Pageheader2;
