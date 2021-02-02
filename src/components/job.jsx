import React from "react";

const Job = ({ job }) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3 mb-3">
      <div className="card">
        <div className="card-header">
          <h3>{job.title}</h3>
        </div>
        <div className="card-body">
          <p>
            <b>Place:</b>
            {job.place}
          </p>
          <p>
            <b>Sallery:$</b>
            {job.sallery}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Job;
