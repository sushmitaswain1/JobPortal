import React, { useState } from "react";
import "../App.scss";
import SkillsDetails from './SkillsDetails.js';

import "./Styling.css";

const Skills = () => {
  const [chosenInfo, setChosenInfo] = useState(false);
  const [skills, setSkills] = useState("");
  const [score, setScore] = useState("");

  const myInfo = {
      skills : skills,
      score: score,
  }
  return (
    <div className="columns ">
      <div className="column is-two-thirds"></div>
      <div className="column card is-three-fifths">
        <h1 className="title">
         Skills
        </h1>
       
          <div class="field">
            <label class="label" for="skill">
              Skills/Technology name:{" "}
            </label>
            <div class="control">
              <input
                class="input is-primary"
                onChange={(e) => setSkills(e.target.value)}
                id="skill"
                type="text"
                placeholder="Enlist your skills"
              />
            </div>
          </div>
          <div class="field">
            <label class="label" for="score">
              Rating out of 10
            </label>
            <div class="control">
              <input
                class="input is-primary"
                onChange={(e) => setScore(e.target.value)}
                id="score"
                type="tel"
                placeholder="Rate your knowledge in the skill"
              />
            </div>
          </div>
          <div class="field">
              <div class="control">
                <button
                  class="button is-primary"
                  onClick={() => setChosenInfo(!chosenInfo)}
                 >
                  {chosenInfo ? "CLOSE" : "SAVE"}
                </button>
              </div>
            </div>     
      </div>

      <div className="column is-half"> {chosenInfo ? <SkillsDetails myInfo ={myInfo}/> : ""}  </div> 

     </div>
   
       
  
  );
};

export default Skills;
