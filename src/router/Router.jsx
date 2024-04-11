import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AuthProvider from "../provider/AuthProvider";
import ProtectedRouter from "./ProtectedRouter";

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
    ],
  },
]);

export default router;
