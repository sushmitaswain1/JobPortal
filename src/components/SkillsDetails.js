import React, { useState } from "react";

const SkillsDetails = ({ myInfo }) => {
  const [skillSet] = useState(myInfo.skills);
  const [score] = useState(myInfo.score);
   console.log("skillsdetails");
  return (
    <div className=" ">
      <div className="card is-horizontal">
      <div className="card-content">
        <label class="label"> Skills: {skillSet}  </label>
        <label class="label">Score: {score} </label>
        
      </div>
      <button className="button is-link">EDIT INFO</button>
    </div>
    </div>
    
  );
};
export default SkillsDetails;
