import React from 'react';


const CompanyMap = ({info, key}) => {

  

    const renderedJobs = info.map(el=> {

        return (
         <div>
           <div class='ui grid'>
             <div class='ui row'>
              <div class= 'job-list' >
                <header class="card-header">
                  <div className='title ui-header'>
                       {el.title}

                  </div>
                  <div className='place'>
                       {el.locations.city_one}
                       {el.locations.city_two}
                       {el.locations.city_three}
            
                </div>
               </header>
           
          <div>
            <img alt="imag" src={el.logo}/>
            </div>
              
          <div className='content'>
                {el.requirements}
                {el.jobType}
          <div className='salary'>
                <span>salary= {el.salary}</span>
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
       <h1><strong>Infosys</strong></h1>
       {renderedJobs}
   </div>
   );



};
export default CompanyMap;





