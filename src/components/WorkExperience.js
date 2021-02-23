import React, { useState } from "react";
import "../App.scss";
import WorkExDetails from './WorkExDetails.js';

const WorkExperience = () => {

  const [list, setList] = useState(false);
  const [jobTitle, setJobtitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [frMonth, setFrMonth] = useState("");
  const [frYear, setFrYear] = useState("");
  const [tMonth, setTMonth] = useState("");
  const [tYear, setTYear] = useState("");

  const myInfo = {
    
    jobtitle: jobTitle ,
    company:  company ,
    location:  location ,
    frommonth:  frMonth ,
    fromyear:  frYear ,
    toMonth:  tMonth ,
    toYear:  tYear ,
  };

  return (
    <div className="columns ">
      <div className="column is-two-thirds"></div>
      
      <div className="column card is-three-fifths"> 
      
      <h1 className="title">Work Experience</h1>
        
        <div class="field">
          <label class="label">Job Title</label>
          <div class="control">
            <input
              class="input is-primary"
              onChange={(e) => setJobtitle(e.target.value)}
              type="text"
              placeholder="Title of your Job"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Company</label>
          <div class="control">
            <input
              class="input is-primary"
              onChange={(e) => setCompany(e.target.value)}
              type="text"
              placeholder="Company or Institution"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Location</label>
          <div class="control">
            <input
              class="input is-primary"
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              placeholder="Location"
            />
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <div className="column is-half dropdown">
              <div class="field">
                <label class="label">From</label>
                <div class="control">
                  <div onChange={(e) => setFrMonth(e.target.value)}>
                    <select class="select">
                      <option>Jan</option>
                      <option>Feb</option>
                      <option>Mar</option>
                      <option>Apr</option>
                      <option>May</option>
                      <option>Jun</option>
                      <option>Jul</option>
                      <option>Aug</option>
                      <option>Sept</option>
                      <option>Oct</option>
                      <option>Nov</option>
                      <option>Dec</option>
                    </select>
                  </div>

                  <div onChange={(e) => setFrYear(e.target.value)}>
                    <select class="select is-primary">
                      <option>2005</option>
                      <option>2006</option>
                      <option>2007</option>
                      <option>2008</option>
                      <option>2009</option>
                      <option>2010</option>
                      <option>2011</option>
                      <option>2012</option>
                      <option>2013</option>
                      <option>2014</option>
                      <option>2015</option>
                      <option>2016</option>
                      <option>2017</option>
                      <option>2018</option>
                      <option>2009</option>
                      <option>2020</option>
                      <option>2021</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div class="column">
            <div className="column is-half dropdown">
              <div class="field">
                <label class="label">To</label>
                <div class="control">
                  <div onChange={(e) => setTMonth(e.target.value)}>
                    <select class="select">
                      <option>Jan</option>
                      <option>Feb</option>
                      <option>Mar</option>
                      <option>Apr</option>
                      <option>May</option>
                      <option>Jun</option>
                      <option>Jul</option>
                      <option>Aug</option>
                      <option>Sept</option>
                      <option>Oct</option>
                      <option>Nov</option>
                      <option>Dec</option>
                    </select>
                  </div>

                  <div onChange={(e) => setTYear(e.target.value)}>
                    <select class="select">
                      <option>2005</option>
                      <option>2006</option>
                      <option>2007</option>
                      <option>2008</option>
                      <option>2009</option>
                      <option>2010</option>
                      <option>2011</option>
                      <option>2012</option>
                      <option>2013</option>
                      <option>2014</option>
                      <option>2015</option>
                      <option>2016</option>
                      <option>2017</option>
                      <option>2018</option>
                      <option>2009</option>
                      <option>2020</option>
                      <option>2021</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
          <div class="field-label"></div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button
                  class="button is-primary"
                  onClick={() => setList(!list)}
                 >
                  {list ? "CLOSE" : "SAVE"}
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      
       
        <div class="column is-half">{list ? <WorkExDetails myInfo={myInfo} /> : ""}</div>


    </div>

        
      
       
       
  );

};

export default WorkExperience;
