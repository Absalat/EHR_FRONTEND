import React, { useCallback, useEffect, useState } from "react";
import "./LoginRegister.css";
import axios from "axios";
//import { Formik } from "formik";
//import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
//import * as Yup from "yup"; // used when validating with a pre-built solution

function LoginRegister(props) {
  const [addclass, setaddclass] = useState("");

  const [state, setState] = useState({
    username: "",
    password: "",
    successMessage: null,
  });

  const onChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: state.username,
      password: state.password,
    };
    console.log(data);
    axios
      .post("http://localhost:8000/api/auth/login", data)
      .then((res) => {
        if (res.status === 200) {
          setState((prevState) => ({
            ...prevState,
            successMessage: "Login successful. Redirecting to home page..",
          }));

          console.log(res.data);
          localStorage.setItem("token", JSON.stringify(res.data.token));
          // redirectToHome();
          props.showError(null);
        } else if (res.code === 204) {
          props.showError("Username and password do not match");
        } else {
          props.showError("Username does not exists");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={`middle ${addclass}`} id="middle">
      <div className="form-middle  contact-middle">
        <form>
          <h2>ETHIOPIAN RESEARCH HUB</h2>

          <h3>GET IN TOUCH </h3>
          <h4>Email: Ethiopianresearchhub@gmail.com</h4>
          <h5> Phone: +251912323443</h5>

          <button
            className="ghost1"
            id="signIn"
            onClick={() => setaddclass("")}
          >
            BACK TO LOGIN
          </button>
        </form>
      </div>
      <div className="form-middle sign-in-middle">
        <form onSubmit={onSubmit}>
          <h1>Sign In</h1>
          <input
            id="username"
            type="text"
            placeholder="ID"
            value={state.username}
            onChange={onChange}
          />
          <input
            type="password"
            id="password"
            placeholder="PASSWORD"
            value={state.password}
            onChange={onChange}
          />
          <button className="ghost2" onClick={state.onSubmit} type="submit" >
            LOGIN
          </button>
        </form>
      </div>
      <div className="overlay-middle">
        <div className="overlay">
          <div className="overlay-panel overlay-left"></div>
          <div className="overlay-panel overlay-right">
            <button
              className="ghost"
              id="contact"
              onClick={() => setaddclass("right-panel-active")}
            >
              CONTACT INFO.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginRegister;
