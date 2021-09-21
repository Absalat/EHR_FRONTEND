import React, { useEffect } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const history = useHistory();
    const isAuthenticated = !!localStorage.getItem("user");
    const isProfileComplete = !JSON.parse(localStorage.getItem("user"))
        ?.changeProfile;

    useEffect(() => {
        if (!isAuthenticated) {
            history.push("/login");
        }
    }, [isAuthenticated, history]);

    useEffect(() => {
        if (!isProfileComplete) {
            <Redirect to="/complete-profile" />;
        } else {
            <Redirect to="/" />;
        }
    }, [isProfileComplete]);

    console.log({ isProfileComplete });

    return (
        <Route
            {...restOfProps}
            render={(props) =>
                isAuthenticated ? (
                    isProfileComplete ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to="/complete-profile" />
                    )
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
}

export default ProtectedRoute;
