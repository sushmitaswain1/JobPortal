import React from "react";

const CompanyMapTCS = ({ info, key }) => {
  const renderedJobs = info.map((el) => {
    return (
      
       
        <div className="columns">
          <div className="column is-one-third"></div>
            
          <div class='column is-half'>
          <div class="card">
            <div class="media-content"><strong>{el.title}</strong></div>

            <div>
              <img alt="imag" src={el.logo} />
            </div>
           <div class="content-card">
          
           <div class="message-body">
              {el.requirements}
           <div class="content">
           <div>{el.jobType}</div>
              <p>
              <h6>
              {el.locations.city_one}, {el.locations.city_two}, {el.locations.city_three} 
              <br/>
              {el.salary}
              </h6> 
             
              </p>
            </div>
            </div>
           
           </div>
          
           </div>
            
      
        </div>
        
        </div>




    
    );
  });

  return (
    <div>
      <h1 className='head-title title'>
        <strong>TCS</strong>
      </h1>
      {renderedJobs}
    </div>
  );
};
export default CompanyMapTCS;
