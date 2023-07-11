import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./Landing.jsx";
import LocationDetails from "./pages/LocationDetails.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Landing />} />
      <Route path="/:locationSlug" element={<LocationDetails />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
