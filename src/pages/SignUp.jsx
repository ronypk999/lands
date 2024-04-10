import { BsEmojiGrin } from "react-icons/bs";
import AuthHook from "../hook/AuthHook";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const { emailSignUp } = AuthHook();
  const handleSignUp = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 8) {
      toast.error("Password should be at least 8 characters.");
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/.test(password)) {
      toast.error(
        "Password must contain at least 1 Uppercase, 1 lowercase and 1 number character."
      );
      return;
    }

    emailSignUp(email, password)
      .then(() => {
        e.target.reset();
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
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
