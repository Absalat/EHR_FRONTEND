import React, { Component, useState } from "react";
import axios from "axios";
import "./manageusers.css";
import { useFormik } from "formik";
import {
  Table,
  Card,
  CardHeader,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Delete, Edit } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

class Manage extends Component {
  constructor(props) {
    super(props);
    //this.deleteUser = this.deleteUser.bind(this);
    this.state = {
      admins: [],
      deleteModal: false,
      admintoDelete: "",
      ///toggleDelete: false,
    };
  }

  //const history = useHistory();
  //const [deleteModal, setDeleteModal] = => useState();

  toggleDelete = (adminid = "") => {
    this.setState((state, props) => ({ deleteModal: !state.deleteModal }));
    this.setState({ admintoDelete: adminid });
  };

  componentDidMount() {
    //console.log("Print id: " + this.props.match.params.id);
    axios
      .get("http://localhost:8000/superadmin/admin-list")
      .then((res) => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          admins: res.data,
        });
      })
      .catch((err) => {
        console.log(" Error ");
      });
  }
  deleteAdmin(id) {
    console.log(id);
    axios
      .delete("http://localhost:8000/superadmin/delete/" + id)
      .then((res) => {
        console.log("deleted");
        axios
          .get("http://localhost:8000/superadmin/admin-list")
          .then((res) => {
            this.setState({
              admins: res.data,
              //deleteModal: false,
            });
          })
          .catch((err) => {
            console.log(" Error ");
          });
      })
      .catch((err) => {
        console.log("Error form deleteClick");
      });
  }

  render() {
    const admins = this.state.admins;
    console.log("PrintUser: " + admins);
    console.log(JSON.stringify(admins));

    const adminList = admins.map((admin) => (
      <tr className="center__row">
        <td>{admin.name}</td>
        <td>{admin.username}</td>
        {/* <td>{admin.password}</td> */}
        <td>
          <IconButton
            onClick={() =>
              this.props.history.push(`/manageusers/edit/${admin._id}`)
            }
          >
            <Edit />
          </IconButton>
          <IconButton
            type="button"
            className="btn btn-outline-danger btn-lg btn-block"
            onClick={() => this.toggleDelete(admin._id)}
          >
            <Delete />
          </IconButton>
        </td>
      </tr>
    ));
    return (
      <div
        style={{ marginTop: "30px", marginLeft: "200px", padding: "0 30px" }}
      >
        <Modal isOpen={this.state.deleteModal} toggle={this.toggleDelete}>
          <ModalHeader toggle={this.toggleDelete}>Delete</ModalHeader>
          <ModalBody>Are you sure you want to delete this admin?</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleDelete}>
              Cancel
            </Button>{" "}
            <Button
              color="secondary"
              onClick={() => this.deleteAdmin(this.state.admintoDelete)}
            >
              Delete
            </Button>
          </ModalFooter>
        </Modal>

        <Button
          id="Popover1"
          size="large"
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          onClick={() => this.props.history.push(`/manageusers/add`)}
        >
          Add
        </Button>
        <div className="table mt-5">
          <card>
            <CardHeader>Insitutes</CardHeader>
          </card>
          <Table striped>
            <thead>
              <tr>
                <th>Name</th>
                <th>UserName</th>
                {/* <th>Password</th> */}

                <th></th>
              </tr>
            </thead>
            <tbody>{adminList}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Manage;
