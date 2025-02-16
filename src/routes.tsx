import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout.tsx";
import { Home } from "./pages/home/Home.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);
