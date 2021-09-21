import React, { useState, useEffect } from "react";
import "./edit.css";
import { useHistory, useParams } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Form,
  FormFeedback,
} from "reactstrap";
import { Button } from "@material-ui/core";
import axios from "axios";
import MainContainer from "../../components/shared/MainContainer";
import { useFormik } from "formik";
import * as yup from "yup";
import { Snackbar } from "@material-ui/core";

const userSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  name: yup.string().required("Name is required"),
  password: yup.string().required("Password is required"),
  passwordConfirm: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

function Edit() {
  const history = useHistory();
  const { id } = useParams();
  const [alertSuccess, setAlertSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      let data;
      if (values.password) {
        data = { ...values };
      } else {
        data = { username: values.username };
      }

      console.log(data);

      // axios
      // .put("http://localhost:8000/superadmin/update/" + id, data)

      // .then((res) => {
      //   history.push("/manage");
      // })
      // .catch((err) => {
      //   console.log("Error in update!");
      // });
    },
  });

  const { setValues } = formik;
  useEffect(() => {
    axios
      .get("http://localhost:8000/superadmin/admin/" + id)
      .then((res) => {
        setValues({
          name: res.data.name,
          username: res.data.username,
          password: "",
          passwordConfirm: "",
        });
      })
      .catch((err) => {
        console.log(" Error ");
      });

    // eslint-disable-next-line
  }, [id]);

  return (
    <MainContainer>
      <Snackbar
        open={alertSuccess}
        autoHideDuration={6000}
        message="User successfully updated!"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
      <Breadcrumb>
        <BreadcrumbItem
          onClick={() => history.push("/manage")}
          style={{ cursor: "pointer" }}
        >
          Manage
        </BreadcrumbItem>
        <BreadcrumbItem active>Edit</BreadcrumbItem>
      </Breadcrumb>
      <h3>Edit Institute </h3>
      <div className="mt-4">
        <Form onSubmit={formik.handleSubmit}>
          <Row className="mb-4">
            <Col>
              <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  invalid={formik.errors.name && formik.touched.name}
                />
                <FormFeedback>{formik.errors.name}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <FormGroup>
                <Label for="exampleEmail">Username</Label>
                <Input
                  type="text"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  invalid={formik.errors.username && formik.touched.username}
                />
                <FormFeedback>{formik.errors.username}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row className="mb-4">
            <FormGroup>
              <Label for="exampleEmail">Password</Label>
              <Input
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                invalid={formik.errors.password && formik.touched.password}
              />
              <FormFeedback>{formik.errors.password}</FormFeedback>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label for="exampleEmail">Confirm Password</Label>
              <Input
                type="Password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.passwordConfirm}
                invalid={
                  formik.errors.passwordConfirm &&
                  formik.touched.passwordConfirm
                }
              />
              <FormFeedback>{formik.errors.passwordConfirm}</FormFeedback>
            </FormGroup>
          </Row>
          <div className="mt-5 d-flex justify-content-end">
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </MainContainer>
  );
}

export default Edit;
