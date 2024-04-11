import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  } else {
    return children;
  }
};

export default ProtectedRouter;
