import React, { Component } from "react";
import Job from "./job";

class Jobs extends Component {
  state = {
    jobs: [
      {
        id: 1,
        title: "wanted for PHP",
        place: "Tel Aviv",
        sallery: "Negotiable",
      },
      {
        id: 2,
        title: "wanted for Mysql",
        place: "Ramat-Gan",
        sallery: "15,000$",
      },
      {
        id: 3,
        title: "wanted for Laravel",
        place: "Tel Aviv",
        sallery: "12,999$",
      },
    ],
  };
  render() {
    const { jobs } = this.state;
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 mb-3">
            <h1 className="display-4">Jobs Page</h1>
          </div>
        </div>
        <div className="row">
          {jobs.map((job) => (
            <Job job={job} key={job.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Jobs;
