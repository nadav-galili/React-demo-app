import React from "react";

const PageHeader = (props) => {
  return (
    <div className="row">
      <div className="col-12 my-5">
        <h1 className="display-4">{props.children}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
