import React from "react";
import "./JobStyles.css";

const JobBriefList = ({ work, task }) => {
  return (
    <div onClick={() => task(work)}>
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image  is-96x96">
                <img src={work.logo} alt="work logo" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{work.name}</p>
              <p class="subtitle is-6">{work.location.city}, salary= {work.salary}</p>
            </div>
          </div>

          <div class="content">
            {work.description} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBriefList;
