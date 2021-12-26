import React, { useEffect, useState } from "react";
import "../../Styling/index.css";
import Header from "../../Components/Header";
import API from "../../api.js";
import { Redirect, useHistory } from "react-router-dom";

function DashBord() {
  const history = useHistory();
  const [isLoading, setisLoading] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const Token = localStorage.getItem("token");
    API.get("user", { headers: { Authorization: `Bearer ${Token}` } })
      .then((res) => {
        setUser(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        if (err.response.data.message === "Unauthenticated.") {
          // localStorage.removeItem("token");
          history.push("/Login");
        }
      });
  }, []);
  if (isLoading) return <div>Loding</div>;
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
