import React, { useState } from "react";
import CompanyDataInf from "./CompanyDataInf";
import CompanyDataTCS from "./CompanyDataTCS";

import CompanyMapValley from "./CompanyMapValley";
import CompanyMapInfosys from "./CompanyMapInfosys.js";
import CompanyMapTCS from "./CompanyMapTCS.js";


const CompanyDetails = () => {
  const [info, setInfo] = useState([]);
  const [companyMapIn, setCompanyMapIn] = useState(false);
  const [companyMapTc, setCompanyMapTc] = useState(false);
  const [companyMapV, setCompanyMapV] = useState(false);

  const onInfClick = () => {
    setCompanyMapIn(true);
    setCompanyMapV(false);
    setCompanyMapTc(false);
    setInfo(CompanyDataInf);
  };

  const onTClick = () => {
    setCompanyMapTc(true);
    setCompanyMapV(false);
    setCompanyMapIn(false);
    setInfo(CompanyDataTCS);
  };

  const onValleyClick = () => {
    setCompanyMapV(true);
    setCompanyMapTc(false);
    setCompanyMapIn(false);
    setInfo(CompanyDataInf);
  };

  return (
    <div>
      <div>
          <br/>

          <div class='columns'>
            <div className="column is-two-fifths"></div>
            <div className="buttons column is-half">
              
            <button class="button is-info is-rounded is-success" onClick={(e) => onInfClick()}>
             Infosys
          </button>
        
        <button class="button is-info is-rounded is-success " onClick={(e) => onTClick()}>
          TCS
        </button>
       

        <button class="button is-info is-rounded is-success" onClick={(e) => onValleyClick()}>
          Talk Valley LLC
        </button>

            </div>
          </div>

      <div class="container ">
        {companyMapIn ? <CompanyMapInfosys info={info} /> : null}
      </div>
      <div class="container">
        {companyMapTc ? <CompanyMapTCS info={info} /> : null}
      </div>
      <div class="container">
        {companyMapV ? <CompanyMapValley info={info} /> : null}
      </div>
    </div>
    </div>
  );
};

export default CompanyDetails;
