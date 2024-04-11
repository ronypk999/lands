import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import LoginProvider from "../components/loginProvider.jsx/LoginProvider";
import PopupProvider from "../components/popupProvider/PopupProvider";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const { emailSignIn, token } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    emailSignIn(email, password)
      .then(() => {
        setLoading(false);

        navigate("/", { state: "login" });
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          toast.error("Invalid Email/Password");
        } else {
          toast.error(error.message);
          console.error(error);
        }

        setLoading(false);
      });
  };
  return (
    <>
      <ToastContainer></ToastContainer>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  {loading ? (
                    <>
                      Please wait
                      <span className="loading loading-spinner loading-xs"></span>
                    </>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
              <LoginProvider></LoginProvider>
              <PopupProvider></PopupProvider>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
