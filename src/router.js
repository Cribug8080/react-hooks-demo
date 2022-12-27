import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Table from "./Pages/Table";
import Infinite from "./Pages/Infinite";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <Home />,
    children: [
      {
        path: "/table",
        element: <Table />
      },
      {
        path: "/infinite",
        element: <Infinite />
      }
    ]
  }
]);

export default router;
