import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Sidebar() {
  return (
    <div
      id="sidebar"
      className="w-[280px] fixed top-0 left-0 bottom-0 border-r border-amber-200/80 bg-amber-100/60"
    >
      <Navbar />

      <nav className="p-8 flex flex-col gap-2 [&_a]:text-lg [&_a.active]:font-bold [&_a.active]:text-yellow-500">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/createRental">Create Rental</NavLink>
      </nav>

      <Footer />
    </div>
  );
}

export default Sidebar;
