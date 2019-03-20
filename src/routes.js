import React from "react";

import { Route } from "react-router-dom";

import { Profile, Settings, Java, Courses, Teachers, Lessons } from "./pages";

const routes = () => (
    <>
        <Route exact path="/" component={Teachers} />
        <Route path="/profile" component={Profile} />
        <Route path="/settings" component={Settings} />
        <Route path="/java" component={Java} />
        <Route path="/syllabus" component={Courses} />
        {/* <Route path="/lessons" component={Lessons} /> */}
        <Route path="/lessons/:lesson_id/:tab(home|code)" component={Lessons} />
    </>
);
export default routes;
