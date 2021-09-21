import React, { Component } from "react";
import axios from "axios";
import "./loginregister.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Field, Form } from "formik";

const loginSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
});

class LoginRegister extends Component {
    //const [addclass, setaddclass] = useState("");

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const data = {
            username: this.state.username,
            password: this.state.password,
        };
        console.log(data);
    };

    componentDidMount() {
        const isAuthenticated = !!localStorage.getItem("user");
        if (isAuthenticated) {
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <div>
                <div className="form-container  contact-container">
                    <form>
                        <h2>ETHIOPIAN RESEARCH HUB</h2>

                        <h3>GET IN TOUCH </h3>
                        <h4>Email: Ethiopianresearchhub@gmail.com</h4>
                        <h5> Phone: +251912323443</h5>

                        <button
                            className="ghost1"
                            id="signIn"
                            //onClick={() => setaddclass("")}
                        >
                            BACK TO LOGIN
                        </button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <Formik
                        initialValues={{ username: "", password: "" }}
                        validationSchema={loginSchema}
                        onSubmit={(values) => {
                            console.log(values);
                            axios
                                .post(
                                    "http://localhost:8000/api/auth/login",
                                    values
                                )
                                .then((res) => {
                                    console.log(res.data);
                                    localStorage.setItem(
                                        "user",
                                        JSON.stringify(res.data)
                                    );
                                    this.props.history.push(
                                        `/complete-profile`
                                    );
                                });
                        }}
                    >
                        {() => (
                            <Form>
                                <h1>Sign In</h1>
                                <Field type="text" name="username" />
                                <ErrorMessage
                                    name="username"
                                    component="div"
                                    className="text-danger"
                                />
                                <Field type="password" name="password" />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-danger"
                                />
                                <button className="ghost2" type="submit">
                                    LOGIN
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left"></div>
                        <div className="overlay-panel overlay-right">
                            <button
                                className="ghost"
                                id="contact"
                                //onClick={() => setaddclass("right-panel-active")}
                            >
                                CONTACT INFO.
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginRegister;
