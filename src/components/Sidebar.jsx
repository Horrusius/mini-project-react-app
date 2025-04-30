import { NavLink } from "react-router-dom";

function Sidebar () {
    return (
        <div id="sidebar">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/createRental">Create Rental</NavLink>
            </nav>
        </div>
    );
}

export default Sidebar;
