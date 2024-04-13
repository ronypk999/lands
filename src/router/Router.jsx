import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AuthProvider from "../provider/AuthProvider";
import ProtectedRouter from "./ProtectedRouter";
import Property from "../pages/Property";
import PrivateRouter from "./PrivateRouter";
import Error from "../pages/Error";
import UpdateProfile from "../pages/UpdateProfile";
import SubmitAds from "../pages/SubmitAds";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Layout></Layout>
      </AuthProvider>
    ),
    errorElement: <Error></Error>,
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
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <UpdateProfile></UpdateProfile>
          </PrivateRouter>
        ),
      },
      {
        path: "/ads",
        element: (
          <PrivateRouter>
            <SubmitAds></SubmitAds>
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default router;
