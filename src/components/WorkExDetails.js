import React, { useState } from "react";

const WorkExDetails = ({ myInfo }) => {
  const [position] = useState(myInfo.jobtitle);
  const [company] = useState(myInfo.company);
  const [location] = useState(myInfo.location);
  const [fromMonth] = useState(myInfo.frommonth);
  const [fromYear] = useState(myInfo.fromyear);
  const [toMonth] = useState(myInfo.toMonth);
  const [toYear] = useState(myInfo.toYear);
  return (
    <div className="card is-horizontal">
      <div className="card-content">
        
          <label class="label">Position : {position} </label>
          <label class='label'>Company: {company}</label>
         
          <label class="label">Location: {location}</label>
          <label className="label">From: {fromMonth} {fromYear}</label>
          <label className="label">To: {toMonth} {toYear}</label>
        
        </div>
        <button className="button is-link">EDIT INFO</button>
      
    </div>
  );
};
export default WorkExDetails;