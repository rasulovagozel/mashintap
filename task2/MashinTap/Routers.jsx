import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/pages/features/Layout";
import Home from "./src/pages/Home";
import MasintapCategory from "./src/pages/MasintapCategory";
import Details from "./src/pages/Details";

export const routers = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element:<MasintapCategory />,
        path:"/masintapcategory"
      },
      {
        element:<Details />,
        path:"/detailsmashintap"
      }
    ],
  },
]);
