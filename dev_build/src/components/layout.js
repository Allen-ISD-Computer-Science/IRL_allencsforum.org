import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from "./topbar";

/*
    THE most simplest component but also the literal backbone of the entire website (excluding App.js/index.js)
    Provides the layout argument needed in react router to properly render pages with a constant component (the topbar in this instance)
    "Outlet" is in regard to whatever page is meant to be rendered at a given time
*/

export default function Layout() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}