import React from "react";

import { Route } from "react-router-dom";

import { Profile, Java,  Home, Lessons } from "./pages";
import Courses from "./pages/Courses";

const routes = () => (
    <>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/java" component={Java} />
        <Route path="/syllabus" component={Courses} />
        <Route
            path="/lessons/:lesson_id/:tab(home|code)?"
            component={Lessons}
        />
    </>
);
export default routes;
