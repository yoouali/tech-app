import React from "react";
import "../../Styling/index.css";
import Header from "../../Components/Header";

function DashBord() {
  return (
    <div className="box">
      <Header />
      <div className="DashBord">
        <div id="sideBar" className="SideBar"></div>
        <div className="mainBord">
          <div className="userBord"></div>
          <div className="userDepa"></div>
        </div>
      </div>
    </div>
  );
}

export default DashBord;
