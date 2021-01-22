import React from "react";

import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Cats</h1>
            <span>Get Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Dogs</h1>
            <span>Get Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Birds</h1>
            <span>Get Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Nest</h1>
            <span>Get Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Cages</h1>
            <span>Get Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
