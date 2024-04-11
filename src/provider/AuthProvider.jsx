import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  linkWithCredential,
  OAuthProvider,
} from "firebase/auth";
import auth from "../config/firebase";

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, SetUser] = useState(null);
  const [token, setToken] = useState(null);
  const emailSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const emailSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleAuth = (type) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        if (type === "link") {
          const credential = OAuthProvider.credentialFromError(token);

          linkWithCredential(result.user, credential)
            .then(() => {
              navigate("/", { state: type });
            })
            .catch((error) => {
              console.log(error);
              toast.error("Account linking failed. try again later");
            });
        } else {
          navigate("/", { state: type });
        }
      })
      .catch((error) => {
        if (error.code === "auth/account-exists-with-different-credential") {
          setToken(error);
        } else {
          toast.error(
            "Google is not available at this moment. try again later"
          );
        }
      });
  };

  const githubAuth = (type) => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        if (type === "link") {
          const credential = OAuthProvider.credentialFromError(token);
          linkWithCredential(result.user, credential)
            .then(() => {
              navigate("/", { state: type });
            })
            .catch(() => {
              toast.error("Account linking failed. try again later");
            });
        } else {
          navigate("/", { state: type });
        }
      })
      .catch((error) => {
        if (error.code === "auth/account-exists-with-different-credential") {
          setToken(error);
        } else {
          toast.error(
            "Github is not available at this moment. try again later"
          );
        }
      });
  };

  const logout = () => {
    return signOut(auth)
      .then(() => {
        navigate("/", { state: "logout" });
      })
      .catch();
  };

  useEffect(() => {
    const unsunscribe = onAuthStateChanged(auth, (user) => {
      SetUser(user);
    });
    return () => unsunscribe();
  }, []);
  const values = {
    googleAuth,
    githubAuth,
    emailSignUp,
    emailSignIn,
    token,
    setToken,
    logout,
    user,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
