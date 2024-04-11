import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";

const PopupLinkAccount = ({ providerName }) => {
  const { googleAuth, githubAuth } = useContext(AuthContext);
  if (providerName === "google.com") {
    return (
      <>
        <button
          className="btn w-full btn-ghost border-2 border-primary"
          onClick={() => {
            googleAuth("link");
          }}
          type="button"
        >
          <FaGoogle></FaGoogle> Link with Google
        </button>
      </>
    );
  }

  if (providerName === "github.com") {
    return (
      <>
        <button
          className="btn w-full btn-ghost border-2 border-primary"
          onClick={() => {
            githubAuth("link");
          }}
          type="button"
        >
          <FaGithub></FaGithub> Link with Github
        </button>
      </>
    );
  }
};

export default PopupLinkAccount;
