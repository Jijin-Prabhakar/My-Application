import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="col-12">
        <a href="#" className="link-1">
          <p>Products</p>
        </a>
      </div>
      <div className="col-12">
        <a href="#" className="link-2">
          <p>Demo Script</p>
        </a>
      </div>
      <div className="col-12">
        <a href="#" className="link-3">
          <p>Customers</p>
        </a>
      </div>
      <div className="col-12">
        <a href="#" className="link-4">
          <p>Sales Team</p>
        </a>
      </div>
      <div className="col-12">
        <a href="#" className="link-5">
          <p>Demos</p>
        </a>
      </div>
      <div className="col-12 settings">
        <a href="#" className="link-6">
          <p>Settings</p>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
