import React, { useState } from "react";
import PersonalInfoDetails from "./PersonalInfoDetails.js";

const PersonalInfo = () => {
  const [chosenInfo, setChosenInfo] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhoneNo] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [para, setPara] = useState("");

  const myInfo = {
    firstname: firstName,
    lastname: lastName,
    mail: mail,
    phone: phone,
    city: city,
    postal: postal,
    para: para,
  };
  return (
    <div className="columns">
      <div className="column is-two-thirds"></div>
      <div className="column card is-three-fifths">
        <h1 className="title">Personal Education</h1>

        <div class="field is-horizontal">
          <div class="field-label ">
            <label class="label">Name</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  class="input is-primary"
                  type="text"
                  placeholder="First Name"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left has-icons-right">
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  class="input is-success"
                  type="text"
                  placeholder="Last Name"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">PhoneNo</label>
          </div>
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <a href="/" class="button is-static">
                    +91
                  </a>
                </p>
                <p class="control is-expanded">
                  <input
                    onChange={(e) => setPhoneNo(e.target.value)}
                    class="input is-primary"
                    type="tel"
                    placeholder="Your phone number"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Email</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input
                  onChange={(e) => setMail(e.target.value)}
                  class="input is-primary"
                  type="text"
                  placeholder="Your email"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label ">
            <label class="label">City</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input
                  onChange={(e) => setCity(e.target.value)}
                  class="input is-primary"
                  type="text"
                  placeholder="City Name"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left has-icons-right">
                <input
                  onChange={(e) => setPostal(e.target.value)}
                  class="input is-success"
                  type="text"
                  placeholder="Postal code"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div class="field-label">
            <label class="label is-small">Upload your resume</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <div class="file is-small is-info">
                  <label class="file-label">
                    <input
                      class="file-input is-small"
                      type="file"
                      name="resume"
                    />
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-upload"></i>
                      </span>
                      <span class="file-label">Choose a file…</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Description</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea
                  onChange={(e) => setPara(e.target.value)}
                  class="textarea is-primary"
                  placeholder="Describe your position and accomplishments as a Full stack Developer"
                ></textarea>
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
                  onClick={() => setChosenInfo(!chosenInfo)}
                >
                  {chosenInfo ? "CLOSE" : "SAVE"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-half">{chosenInfo ? <PersonalInfoDetails myInfo={myInfo} /> : ""}</div>
    </div>
  );
};
export default PersonalInfo;
