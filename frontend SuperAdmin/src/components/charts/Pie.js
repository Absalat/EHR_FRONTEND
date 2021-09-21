import React, { PureComponent } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
export default class Example extends PureComponent {
  constructor(props) {
    super(props);
    // this.deleteUser = this.deleteUser.bind(this);
    this.state = {
      admins: [],
      users: [],
      approvers: [],
      posts: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8000/superadmin/admin-number").then((res) => {
      // console.log("Print-showBookDetails-API-response: " + res.data);
      this.setState({
        admins: res.data,
      });
    });
    axios.get("http://localhost:8000/superadmin/user-number").then((res) => {
      // console.log("Print-showBookDetails-API-response: " + res.data);
      this.setState({
        users: res.data,
      });
    });
    axios
      .get("http://localhost:8000/superadmin/approver-number")
      .then((res) => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          approvers: res.data,
        });
      });
    axios.get("http://localhost:8000/superadmin/post-number").then((res) => {
      // console.log("Print-showBookDetails-API-response: " + res.data);
      this.setState({
        posts: res.data,
      });
    });
  }

  render() {
    return (
      <Chart
        width={"1000px"}
        height={"500px"}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Task", "ERH Members"],
          ["user", this.state.users],
          ["approver", this.state.approvers],
          ["admin", this.state.admins],
          ["post", this.state.posts],
        ]}
        options={{
          // Just add this option
          is3D: true,
        }}
        rootProps={{ "data-testid": "2" }}
      />
    );
  }
}
