import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AuthProvider from "../provider/AuthProvider";
import ProtectedRouter from "./ProtectedRouter";
import Property from "../pages/Property";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Layout></Layout>
      </AuthProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data/data.json"),
      },
      {
        path: "/login",
        element: (
          <ProtectedRouter>
            <Login></Login>
          </ProtectedRouter>
        ),
      },
      {
        path: "/signup",
        element: (
          <ProtectedRouter>
            <SignUp></SignUp>
          </ProtectedRouter>
        ),
      },
      {
        path: "/property/:propertyName/:id",
        element: (
          <PrivateRouter>
            <Property></Property>
          </PrivateRouter>
        ),
        loader: () => fetch("/data/data.json"),
      },
    ],
  },
]);

export default router;
