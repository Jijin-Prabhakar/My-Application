import React from "react";
import "./Header.css";
import logo from "../../assets/logo.PNG";
import user from "../../assets/user.png";

const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row header-section">
          <div className="col-7 col-md-3 brand-section">
            <div className="brand">
              <div className="brand-image">
                <a href="#">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
              <div className="brand-name">
                <p>MY APPLICATION</p>
              </div>
            </div>
          </div>
          <div className="col-5 col-md-9 user-section">
            <div className="user">
              <div className="user-image">
                <a href="#">
                  <img src={user} alt="user" />
                </a>
              </div>
              <div className="user-name">
                <a href="#">
                  <p>Barde Ridel</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
