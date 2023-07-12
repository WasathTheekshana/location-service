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
import Notfound from "./components/Notfound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Landing />} />
      <Route path="/:locationSlug" element={<LocationDetails />} />
      <Route path="/:locationSlug/*" element={<Notfound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
