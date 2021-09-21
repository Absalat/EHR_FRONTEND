import React, { useEffect, useState } from "react";
import "./Add.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
} from "reactstrap";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import MainContainer from "../../components/shared/MainContainer";
import { useFormik } from "formik";
import * as yup from "yup";
import { Snackbar } from "@material-ui/core";

const userSchema = yup.object().shape({
  username: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, "Only characters are allowed in this field")
    .required("Username is required"),
  name: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, "Only characters are allowed in this field")
    .required("Name is required"),
  password: yup.string().required("Password is required"),
  passwordConfirm: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Add = () => {
  const history = useHistory();
  const [alertSuccess, setAlertSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      console.log(values);
      const data = { ...values, role: "admin" };
      axios
        .post(
          "http://localhost:8000/superadmin/register-admin",
          JSON.stringify(data),
          {
            headers: {
              "x-access-token":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjEzZGE1YWZmOGQzNTE1NGNmZTdjYmU3Iiwicm9sZSI6InN1cGVyYWRtaW4iLCJ1c2VybmFtZSI6IlNBRE1JTiIsImlhdCI6MTYzMTg5MTk0OCwiZXhwIjoxNjMyNDk2NzQ4fQ.qmK3TCSw2flWrIKb6awl6tCHsxmaiKdjTgs3Ka9u0Ok",
            },
          }
        )
        .then((res) => {
          setAlertSuccess(true);
          formik.resetForm();
          setTimeout(() => {
            history.push("/manage");
          }, 1500);
        })
        .catch((err) => console.log(err));
    },
  });

  const { setValues } = formik;
  useEffect(() => {
    setValues({
      username: "",
      name: "",
      password: "",
      passwordConfirm: "",
    });
  }, [setValues]);

  return (
    <MainContainer>
      <Snackbar
        open={alertSuccess}
        autoHideDuration={6000}
        message="Admin successfully added!"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
      <Breadcrumb>
        <BreadcrumbItem
          onClick={() => history.push("/manage")}
          style={{ cursor: "pointer" }}
        >
          Manage
        </BreadcrumbItem>
        <BreadcrumbItem active>Add</BreadcrumbItem>
      </Breadcrumb>
      <h3>Add User</h3>
      <div className="mt-4">
        <Form
          onSubmit={formik.handleSubmit}
          style={{
            marginLeft: "300px",
            //marginBottom: "10px",
          }}
        >
          <Row>
            <FormGroup>
              <Label>User Name</Label>
              <Input
                style={{
                  width: "500px",
                  height: "50px",
                  fontSize: "18px",
                  overflow: "hidden",
                  resize: "none",
                  boxShadow: "green",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
                placeholder="User Name"
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                invalid={formik.errors.username && formik.touched.username}
              />
              <FormFeedback>{formik.errors.username}</FormFeedback>
            </FormGroup>

            <FormGroup>
              <Label>Full Name</Label>
              <Input
                style={{
                  width: "500px",
                  height: "50px",
                  fontSize: "18px",
                  overflow: "hidden",
                  resize: "none",

                  boxShadow: "green",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
                type="text"
                name="name"
                placeholder="Full Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                invalid={formik.errors.name && formik.touched.name}
              />
              <FormFeedback>{formik.errors.name}</FormFeedback>
            </FormGroup>
          </Row>
          <Row className="mt-4">
            <FormGroup>
              <Label> Password </Label>
              <Input
                style={{
                  width: "500px",
                  height: "50px",
                  fontSize: "18px",
                  overflow: "hidden",
                  resize: "none",

                  boxShadow: "green",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
                name="password"
                type="password"
                placeholder="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                invalid={formik.errors.password && formik.touched.password}
              />
              <FormFeedback>{formik.errors.password}</FormFeedback>
            </FormGroup>
          </Row>
          <Row className="mt-4">
            <FormGroup>
              <Label> Confirm Password </Label>
              <Input
                style={{
                  width: "500px",
                  height: "50px",
                  fontSize: "18px",
                  overflow: "hidden",
                  resize: "none",

                  boxShadow: "green",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
                name="passwordConfirm"
                type="password"
                placeholder="Confirm Password"
                value={formik.values.passwordConfirm}
                onChange={formik.handleChange}
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
};

export default Add;
