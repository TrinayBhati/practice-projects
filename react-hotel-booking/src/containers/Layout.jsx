import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Layout = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/");
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      {props.children}
      <footer>Copyright</footer>
    </>
  );
};

export default Layout;

// on onclick of log out call auth.signOut().then().catch to log out
