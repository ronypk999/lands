import { BsEmojiGrin } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";

import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import LoginProvider from "../components/loginProvider.jsx/LoginProvider";
const SignUp = () => {
  const { emailSignUp } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    setLoading(true);
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 8) {
      toast.error("Password should be at least 8 characters.");
      setLoading(false);
      return;
    }
    if (!/.*[0-9].*/.test(password)) {
      toast.error("Password must contain at least 1 number.");
      setLoading(false);
      return;
    }
    if (!/.*[A-Z].*/.test(password)) {
      toast.error("Password must contain at least 1 Uppercase letter.");
      setLoading(false);
      return;
    }
    if (!/.*[a-z].*/.test(password)) {
      toast.error("Password must contain at least 1 Lowercase letter.");
      setLoading(false);
      return;
    }

    emailSignUp(email, password)
      .then(() => {
        e.target.reset();
        setLoading(false);

        navigate("/", { state: "signup" });
      })
      .catch((error) => {
        if (error.code === "auth/weak-password") {
          toast.error("Password should be at least 6 characters.");
        } else if (error.code === "auth/email-already-in-use") {
          toast.error("Email already registered");
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
            <h1 className="text-4xl font-bold flex gap-3">
              Sign Up Folk! <BsEmojiGrin className="text-red-400"></BsEmojiGrin>
            </h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
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
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  {loading ? (
                    <>
                      Please wait
                      <span className="loading loading-spinner loading-xs"></span>
                    </>
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
              <LoginProvider></LoginProvider>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
