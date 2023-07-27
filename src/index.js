import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Homepage from "./pages/Homepage";
import "./App.css";
import BookingPage from "./pages/BookingPage";
import BookingConfirmPage from "./pages/BookingConfirmPage";
import { ROUTES } from "./pages/routes";
import UnderConstruction from "./pages/UnderConstruction";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.home.path,
        element: <Homepage />,
      },
      {
        path: ROUTES.booking.path,
        element: <BookingPage />,
      },
      {
        path: ROUTES.confirm.path,
        element: <BookingConfirmPage />,
      },
      {
        path: ROUTES.menu.path,
        element: <UnderConstruction />,
      },
      {
        path: ROUTES.about.path,
        element: <UnderConstruction />,
      },

      {
        path: ROUTES.order.path,
        element: <UnderConstruction />,
      },
      {
        path: ROUTES.login.path,
        element: <UnderConstruction />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
