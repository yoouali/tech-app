import React, { useEffect, useState } from "react";
import "../../Styling/index.css";
import Header from "../../Components/Header";
import API from "../../api.js";
import { Redirect } from "react-router-dom";

function DashBord() {
  const [isLoading, setisLoading] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const Token = localStorage.getItem("token");
    if (!Token) return <Redirect to="/Login" />;
    API.get("user")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

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
