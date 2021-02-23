import React, { useState } from "react";

const EducationDetails = ({ myInfo }) => {
  const [degree] = useState(myInfo.degr);
  const [college] = useState(myInfo.colg);
  const [place] = useState(myInfo.place);
  const [fromMonth] = useState(myInfo.frommonth);
  const [fromYear] = useState(myInfo.fryear);
  const [toMonth] = useState(myInfo.toMonth);
  const [toYear] = useState(myInfo.toyear);
  return (
    <div className="card is-horizontal">
      <div className="card-content">
        
          <label class="label">Degree : {degree} </label>
          <label class='label'>College: {college}</label>
         
          <label class="label">Place : {place}</label>
          <label className="label">From : {fromMonth} {fromYear}</label>
          <label className="label">To: {toMonth} {toYear}</label>
        
        </div>
        <button className="button is-link">EDIT INFO</button>
      
    </div>
  );
};
export default EducationDetails;