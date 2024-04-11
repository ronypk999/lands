import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Home = () => {
  const locate = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (locate && locate.state === "login") {
      toast.success("Login successfull.");
      navigate({ state: null });
    }
    if (locate && locate.state === "signup") {
      toast.success("Sign Up successfull.");
      navigate({ state: null });
    }
    if (locate && locate.state === "logout") {
      toast.success("Logout successfull.");
      navigate({ state: null });
    }
    if (locate && locate.state === "link") {
      toast.success("Account linked! successfull.");
      navigate({ state: null });
    }
  }, [locate]);
  return (
    <>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Home;
