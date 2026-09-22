import { type RouteObject } from "react-router-dom";
import HomePage from "../../features/Home/Home";
import DashboardLayout from "../../features/Dashboard/Index";

const routeObj: RouteObject[] = [
  {
    path: "/nextrole",
    children: [
      { path: "home", element: <HomePage /> },
      { path: "dashboard", element: <DashboardLayout /> },
    ],
  },
];

export default routeObj;
