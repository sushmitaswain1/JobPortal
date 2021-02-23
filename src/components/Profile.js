import React from 'react';
import Education from './Education.js';

import Skills from './Skills.js';
import WorkExperience from './WorkExperience.js';
import PersonalInfo from './Personal-info';
import './Styling.css';





class Profile extends React.Component{

    render(){
     return(
    <div className="columns">
       
        <div className="column is-half">
        
        <section className="section"></section>

        <PersonalInfo/>

        <section className="section"></section>
       <WorkExperience />

       <section className="section"></section>
        <Education />
        <section className="section"></section>
        <Skills/>
        </div>
      
    </div>
        );



     }
}


export default Profile;


