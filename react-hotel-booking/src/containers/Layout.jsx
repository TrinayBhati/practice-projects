import Navbar from "../components/Navbar";
const Layout = () => {
  return (
    <>
      <Navbar />
      {props.children}
      <footer>Copyright</footer>
    </>
  );
};

export default Layout;
