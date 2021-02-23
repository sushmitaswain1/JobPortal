import React from "react";
import "./home-component.styles.scss";
import { Link } from "react-router-dom";

const Home = () => {
    const imageUrl = "https://i.ibb.co/f0pkxnH/work.jpg";
  return (
      <div>
                <div className="menu-item">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">India's most trusted Job Portal</h1>
        <br/>
        <span className="subtitle">
          {" "}
          <Link to="/jobs"> FIND JOBS NOW</Link>
        </span>
      </div>
    </div>
      </div>
    
  );
};

export default Home;
