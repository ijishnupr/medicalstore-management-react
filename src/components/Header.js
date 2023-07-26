
import { NavLink } from "react-router-dom";
function Header() {

    return <nav className="navbar navbar-expand-sm navbar-light">
        <div className="navbar-brand">
            <h2>curemart</h2>
        </div>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div
            className="collapse navbar-collapse mr-auto"
            id="navbarNav"
            style={{ float: "left" }}
        >
            <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>

                <li className="nav-item">
                    <NavLink to={"/"} className="nav-link">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/about"} className="nav-link">
                        About us
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/logout"} className="nav-link">
                        logout
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>;
}
export default Header;