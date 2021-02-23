import React from 'react';
import Logio from './image.png'; 
import './styles.css';
export default class Demo extends React.Component {
 
render() {
return(
<div style={{marginLeft: '40px', marginTop : '40px'}}>
   <h1><strong>Exercise 1: understanding JSX</strong></h1>
   
    <div className="companyName">
       <h2><strong>MentorStudents Job-Portal </strong></h2>
        <img src = {Logio} alt="1" className="company-banner"/>
    </div>
    <div className="search-panel" style={{marginTop: '20px'}}>
       <span>
      <label htmlFor="search-what">What: </label>
      <input id="search-what" type="text" placeholder="Job title, keywords or company"/>
      </span>
      <span style={{marginLeft: '20px'}}>
      <label htmlFor="search-where">Where: </label>
      <input id="search-where" type="text" placeholder="Enter city"/>
      </span>
      <span style={{marginLeft: '20px'}}>
      <button style={{color: 'blue'}}>Find jobs</button>
      </span>
    </div>

    <div className="jobs" style={{maxWidth: '20vw'}}>
        </div>
    <div>
      <h4><strong> Full-stack developer </strong></h4>
      <h5><strong>Delhi</strong></h5>
      <img src = {Logio} alt="1" className="job-post-image"/>
      <p className="para">
        Company looking for some crazy people, we are looking for challenge accepter who move with "I can do" attitude.
        Quick decision makers, living with the passion of work, never feeling or saying "I am tired"
      </p>
      <div className="salary">Salary: 30K - 40K</div>
      <button style={{backgroundColor: 'blue', color: 'white'}}>Apply</button>
      <button style={{backgroundColor: 'red', color: 'white'}}>Not interested</button>
      <hr/>
      </div>
      <div>
      <h4> <strong> Front-end developer</strong></h4>
      <h5><strong>Pune</strong></h5>
      <img src= {Logio} alt="1" class="job-post-image"/>
      <p className="para" >
        Company looking for some crazy people, we are looking for challenge accepter who move with "I can do" attitude.
        Quick decision makers, living with the passion of work, never feeling or saying "I am tired"
      </p>
      <div className="salary">Salary: 15K - 30K</div>
      <button style={{backgroundColor: 'blue', color: 'white'}}>Apply</button>
      <button style={{backgroundColor: 'red', color: 'white'}}> Not interested </button>
      <hr/>
    </div>
    <div>
      <h4><strong>Back-end developer</strong></h4>
      <h5><strong>Mumbai</strong></h5>
      <img  src ={Logio} alt="1" className="job-post-image"/>
      <p className='para'>
      Company looking for some crazy people, we are looking for challenge accepter who move with "I can do" attitude.
        Quick decision makers, living with the passion of work, never feeling or saying "I am tired"
      </p>
      <div className="salary">Salary: 20K - 30K</div>
      <button  className ="apply" >Apply</button>
      <button className= "notinterested">Not interested</button>
      <hr/>
    </div>
    <div className="pagination" style={{marginTop: '20px'}}>
      <button> Prev</button>
      <button>Next  </button>
    </div>
</div>
)
}
 }

