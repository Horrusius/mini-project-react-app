import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Application Logo" />
      </div>
      <div className="title">
        <h1>Loop Troop</h1>
        <h2>Rent a Property</h2>
      </div>
    </header>
  );
};

export default Navbar;
