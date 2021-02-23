import React, { useState } from "react";
import "../App.scss";
import EducationDetails from './EducationDetails.js';

const Education = () => {
  const [chosenInfo, setChosenInfo] = useState(false);
  const [degree, setDegree] = useState("");
  const [college, setCollege] = useState("");
  const [place, setPlace] = useState("");
  const [fromMonth, setFromMonth] = useState("");
  const [fromYear, setFromYear] = useState("");
  const [toMonth, setToMonth] = useState("");
  const [toYear, setToYear] = useState("");

  const myInfo = {

    degr: degree,
    colg: college,
    place: place,
    frommonth: fromMonth,
    fryear: fromYear,
    toMonth: toMonth,
    toyear: toYear,

  };

  return (
    <div className="columns ">
      <div className="column is-two-thirds"></div>
      <div className="column card is-three-fifths">
        <h1 className="ed_heading">
          <strong>Education</strong>
        </h1>
        <form>
          <div class="field">
            <label class="label" for="degree">
              Degree:{" "}
            </label>
            <div class="control">
              <input
                class="input is-primary"
                onChange={(e) => setDegree(e.target.value)}
                id="degree"
                type="text"
                placeholder="degree"
              />
            </div>
          </div>

          <div class="field">
            <label class="label" for="colg">
              College:{" "}
            </label>
            <div class="control">
              <input
                class="input is-primary"
                onChange={(e) => setCollege(e.target.value)}
                id="colg"
                type="text"
                placeholder="College"
              />
            </div>
          </div>

          <div class="field">
            <label class="label" for="place">
              Location:{" "}
            </label>
            <div class="control">
              <input
                class="input is-primary"
                onChange={(e) => setPlace(e.target.value)}
                id="place"
                type="text"
                placeholder="location"
              />
            </div>
          </div>

          <h3>
            <strong>Time period</strong>
          </h3>
          <div class="columns">
            <div class="column">
              <div className="column is-half dropdown">
                <div class="field">
                  <label class="label">From</label>
                  <div class="control">
                    <select
                      class="select"
                      name="month"
                      onChange={(e) => setFromMonth(e.target.value)}
                    >
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

                    <select
                      class="select"
                      name="year"
                      onChange={(e) => setFromYear(e.target.value)}
                    >
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

            <div class="column">
              <div className="column is-half dropdown">
                <div class="field">
                  <label class="label"> To: </label>
                  <div class="control">
                    <select
                      class="select"
                      name="month"
                      onChange={(e) => setToMonth(e.target.value)}
                    >
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

                    <select
                      class="select"
                      name="year"
                      onChange={(e) => setToYear(e.target.value)}
                    >
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
        </form>

        <div class="field is-horizontal">
          <div class="field-label"></div>
          <div class="field-body">
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
        </div>
      </div>
      <div class="column is-half">{chosenInfo ? <EducationDetails myInfo={myInfo} /> : ""}</div>

     </div>
  );
};

export default Education;
