import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebase";

const AuthHook = () => {
  const emailSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  return { emailSignUp };
};

export default AuthHook;
