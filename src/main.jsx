import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
// import Error from "./Components/Error/Error";
// import Home from "./Components/Home/Home";
// import Statistics from "./Components/Statistics/Statistics";
// import Dashboard from "./Components/Dashboard/Dashboard";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "/home",
//         element: <Home />,
//           },
//       {
//         path: "/statistics",
//         element: <Statistics />,
//           },
//       {
//         path: "/dashboard",
//         element: <Dashboard />,
//           },
//     ],
//   },
// ]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
    {/* <RouterProvider router={router} /> */}
  </StrictMode>
);
