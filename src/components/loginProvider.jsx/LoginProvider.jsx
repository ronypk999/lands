import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const LoginProvider = () => {
  const { googleAuth, githubAuth } = useContext(AuthContext);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          className="btn w-full sm:w-fit btn-ghost border-2 border-primary"
          onClick={() => {
            googleAuth("login");
          }}
          type="button"
        >
          <FaGoogle></FaGoogle> with Google
        </button>
        <button
          className="btn  w-full sm:w-fit btn-ghost border-2 border-primary"
          onClick={() => {
            githubAuth("login");
          }}
          type="button"
        >
          <FaGithub></FaGithub> with Github
        </button>
      </div>
    </>
  );
};

export default LoginProvider;
