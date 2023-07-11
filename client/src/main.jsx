import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./Landing.jsx";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
  } from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Landing />} />
    )
)


ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
);
