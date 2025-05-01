import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <header className="flex p-6 gap-4 items-center">
      <div className="logo">
        <img src={logo} alt="Application Logo" />
      </div>
      <div className="title">
        <h1 className="font-bold text-2xl">Loop Troop</h1>
        <h2 className="text-lg">Rent a Property</h2>
      </div>
    </header>
  );
};

export default Navbar;
