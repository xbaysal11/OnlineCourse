import React from "react";

import { Route } from "react-router-dom";

import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Index from "./pages/Index";

const routes = () => (
    <>
        <Route exact path="/" component={Index} />
        <Route path="/profile" component={Profile} />
        <Route path="/settings" component={Settings} />
    </>
);
export default routes;
