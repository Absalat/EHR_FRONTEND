import "./manageapprover.css";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, IconButton } from "@material-ui/core";
import { Add, Delete } from "@material-ui/icons";
import axios from "axios";
import MainLayout from "../../layouts/MainLayout";

const useStyles = makeStyles((theme) => ({
    inputGroup: {
        marginBottom: theme.spacing(1),
    },
}));

export default function ManageApprovers() {
    const classes = useStyles();
    const userTemplate = { name: "", department: "", number: "", email: "" };
    const [users, setUsers] = useState([userTemplate]);
    const [departments, setDepartments] = useState([]);

    const removeUser = (index) => {
        const filteredUsers = [...users];
        filteredUsers.splice(index, 1);
        setUsers(filteredUsers);
    };

    useEffect(() => {
        axios
            .get("http://localhost:8000/department/department-list", {
                headers: {
                    "x-access-token": JSON.parse(localStorage.getItem("user"))
                        .token,
                },
            })
            .then((res) => {
                console.log(res.data);
                setDepartments(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <MainLayout>
            {departments?.map((department, index) => (
                <div key={department._id}>
                    <h4 className="pb-2">{department.name}</h4>
                    <Grid
                        container
                        spacing={3}
                        key={index}
                        className={classes.inputGroup}
                    >
                        <Grid item md={5}>
                            <TextField
                                label={
                                    department.approvers[0].username
                                        ? ""
                                        : "Username"
                                }
                                placeholder="Enter fulll name"
                                variant="outlined"
                                name="name"
                                fullWidth
                                value={department.approvers[0].username}
                            />
                        </Grid>

                        <Grid item md={5}>
                            <TextField
                                label="Password"
                                placeholder="email"
                                variant="outlined"
                                name="email"
                                fullWidth
                            />
                        </Grid>
                        <Grid item md={2}>
                            {department.approvers[0].username ? null : (
                                <IconButton
                                    color="primary"
                                    onClick={() => removeUser(index)}
                                >
                                    <Add />
                                </IconButton>
                            )}
                            <IconButton
                                color="secondary"
                                onClick={() => removeUser(index)}
                            >
                                <Delete />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        spacing={3}
                        key={index}
                        className={classes.inputGroup}
                    >
                        <Grid item md={5}>
                            <TextField
                                label="Username"
                                placeholder="Enter fulll name"
                                variant="outlined"
                                name="name"
                                fullWidth
                            />
                        </Grid>

                        <Grid item md={5}>
                            <TextField
                                label="Password"
                                placeholder="email"
                                variant="outlined"
                                name="email"
                                fullWidth
                            />
                        </Grid>
                        <Grid item md={2}>
                            <IconButton
                                color="primary"
                                onClick={() => removeUser(index)}
                            >
                                <Add />
                            </IconButton>
                            <IconButton
                                color="secondary"
                                onClick={() => removeUser(index)}
                            >
                                <Delete />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        spacing={3}
                        key={index}
                        className={classes.inputGroup}
                    >
                        <Grid item md={5}>
                            <TextField
                                label="Username"
                                variant="outlined"
                                name="name"
                                fullWidth
                            />
                        </Grid>

                        <Grid item md={5}>
                            <TextField
                                label="Password"
                                placeholder="email"
                                variant="outlined"
                                name="email"
                                fullWidth
                            />
                        </Grid>
                        <Grid item md={2}>
                            <IconButton
                                color="primary"
                                onClick={() => removeUser(index)}
                            >
                                <Add />
                            </IconButton>
                            <IconButton
                                color="secondary"
                                onClick={() => removeUser(index)}
                            >
                                <Delete />
                            </IconButton>
                        </Grid>
                    </Grid>
                </div>
            ))}
        </MainLayout>
    );
}
