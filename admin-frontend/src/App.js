import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import LoginRegister from "./pages/login/LogInRegister";
import ManageUsers from "./pages/manageusers/ManageUsers";
import AddUser from "./pages/manageusers/AddUser";
import EditProfile from "./pages/profile/EditProfile";
import Profile from "./pages/profile/Profile";
import CompleteProfile from "./pages/completeProfile/CompleteProfile";
import ManageDepartments from "./pages/manageusers/managedepartment";
import AddDepartment from "./pages/manageusers/AddDepartment";
import EditUser from "./pages/manageusers/EditUser";
import ManageApprovers from "./pages/manageusers/manageapprover";
import EditDepartment from "./pages/manageusers/EditDepartment";
import ManageExternalUser from "./pages/manageusers/manageexternaluser";
import AddExternalUser from "./pages/manageusers/AddExternalUser";
import EditExternalUser from "./pages/manageusers/EditExternalUser";

function App() {
    return (
        <>
            <Switch>
                <ProtectedRoute exact path="/" component={Dashboard} />
                <ProtectedRoute exact path="/profile" component={Profile} />
                <Route path="/complete-profile" component={CompleteProfile} />
                <ProtectedRoute path="/profile/edit" component={EditProfile} />
                <ProtectedRoute
                    exact
                    path="/manage-users"
                    component={ManageUsers}
                />
                <ProtectedRoute path="/manage-users/add" component={AddUser} />
                <ProtectedRoute
                    path="/manage-users/edit/:id"
                    component={EditUser}
                />
                <ProtectedRoute
                    exact
                    path="/manage-approvers"
                    component={ManageApprovers}
                />
                <ProtectedRoute
                    exact
                    path="/manage-departments"
                    component={ManageDepartments}
                />
                <ProtectedRoute
                    path="/manage-departments/add"
                    component={AddDepartment}
                />
                <ProtectedRoute
                    path="/manage-departments/edit/:id"
                    component={EditDepartment}
                />
                <ProtectedRoute
                    exact
                    path="/manage-externalusers"
                    component={ManageExternalUser}
                />
                <ProtectedRoute
                    path="/manage-externalusers/add"
                    component={AddExternalUser}
                />
                <ProtectedRoute
                    path="/manage-externalusers/edit/:id"
                    component={EditExternalUser}
                />
                <Route path="/login" component={LoginRegister} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    );
}

export default App;
