import React, { useState } from "react";

const PersonalInfoDetails = ({ myInfo }) => {
  const [firstName] = useState(myInfo.firstname);
  const [lastName] = useState(myInfo.lastname);
  const [mail] = useState(myInfo.mail);
  const [phone] = useState(myInfo.phone);
  const [city] = useState(myInfo.city);
  const [postal] = useState(myInfo.postal);
  const [para] = useState(myInfo.para);
  return (
    <div >
        <div className=" card is-horizontal">
         <div className="card-content">
        <label class="label"> Name: {firstName} {lastName}</label>
        
        <label class="label">Email: {mail} </label>
        <label className="label">Phone: {phone} </label>
        <label className="label"> Address : {city} {postal}</label>
        <label className="label">Description: {para} </label>
      </div>
      <button className="button is-link">EDIT INFO</button>
    </div>
    </div>
    
  );
};
export default PersonalInfoDetails;
