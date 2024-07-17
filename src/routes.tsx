import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout.tsx";
import { Home } from "./pages/home/Home.tsx";
import { Cv } from "./pages/cv/Cv.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cv",
        element: <Cv />,
      },
    ],
  },
]);
