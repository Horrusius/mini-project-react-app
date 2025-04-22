import logo from "../assets/images/logo.jpg";

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Application Logo" />
      </div>
      <h1>App Name</h1>
    </header>
  );
};

export default Navbar;
