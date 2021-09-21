import "./main.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import Pie from "../../components/charts/Pie";
//import Chart from "../../components/charts/Chart";

//import { PieChart } from "@material-ui/icons";

//import Dough from "../../components/charts/Dough";
import { FcLibrary } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
const Main = () => {
  const [totalInstitutes, setTotalInstitutes] = useState(0);
  const [totalApprovers, setTotalApprovers] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8000/superadmin/admin-number")
      .then((res) => {
        setTotalInstitutes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/superadmin/user-number")
      .then((res) => {
        setTotalUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/superadmin/approver-number")
      .then((res) => {
        setTotalApprovers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/superadmin/post-number/")
      .then((res) => {
        setTotalPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <div className="main__greeting">
            <h1>Welcome</h1>
            <p> welcome to dashboard</p>
          </div>
        </div>

        <div className="main__cards">
          <div className="card">
            <i className="fa fa-approvers-o fa-2x text-yellow"></i>
            <div className="card__inner">
              <i>
                {" "}
                <card />{" "}
              </i>
              <FcLibrary size="90px" />
              <p className="text-primary-p">Number of Institute</p>
              <span className="font-bold text-title">{totalInstitutes}</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-approvers-o fa-2x text-yellow"></i>
            <div className="card__inner">
              <i>
                {" "}
                <card />{" "}
              </i>
              <FcApproval size="90px" />

              <p className="text-primary-p">Number of Approvers</p>
              <span className="font-bold text-title">{totalApprovers}</span>
            </div>
          </div>
          <div className="card">
            <i>
              {" "}
              <card />{" "}
            </i>
            <div className="card__inner">
              <FcConferenceCall size="90px" />
              <p className="text-primary-p">Number of users</p>
              <span className="font-bold text-title">{totalUsers}</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-posts-o fa-2x text-blue"></i>
            <div className="card__inner">
              <FcCollaboration size="90px" />
              <p className="text-primary-p">Number of posts</p>
              <span className="font-bold text-title">{totalPosts}</span>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts">
            <div className="charts__lefttt" width="100%">
              <div className="charts__left__title">
                <p>Overall Reports</p>
                <i>
                  {" "}
                  <card style={{ width: "200px" }} />{" "}
                </i>
              </div>
              <Pie />
            </div>
            {/* <div className="charts__lefts">
              <div className="charts__left__titles">
                <p>Overall Reports</p>
                <i>
                  {" "}
                  <card />{" "}
                </i>
              </div>
              <Chart />
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Main;
