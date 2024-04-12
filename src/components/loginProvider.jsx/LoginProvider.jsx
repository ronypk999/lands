import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const LoginProvider = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          className="btn w-full sm:w-fit btn-ghost border-2 border-primary"
          onClick={() => {
            providerLogin("login", googleProvider);
          }}
          type="button"
        >
          <FaGoogle></FaGoogle> with Google
        </button>
        <button
          className="btn  w-full sm:w-fit btn-ghost border-2 border-primary"
          onClick={() => {
            providerLogin("login", githubProvider);
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
