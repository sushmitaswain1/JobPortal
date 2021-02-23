import React from "react";
import "./JobStyles.css";

const JobDetails = (props) => {
  if (!props.job) {
    return <div className="spinner"> </div>;
  } else
    return (
      <div class="card">
        <header class="card-header" >
          <p class="card-header-title" className="title">
            {props.job.name}
            <div className="placee">{props.job.location.city}</div>
          </p>
        </header>
        <div class="card-image" className="mid_head">
          <figure class="image is-2by1">
            <img src={props.job.logo} alt="jobpic" />
          </figure>
        </div>
        <div class="card-content">
          <div class="content" className="content">
            <p class=" is-4">{props.job.description}</p>
            <p class="is-4" className="sal">
              {props.job.salary}
            </p>
          </div>
        </div>
      </div>
    );
};
export default JobDetails;
