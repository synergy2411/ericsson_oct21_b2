import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <nav className="navbar">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/notes">Notes</NavLink>
                    </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/posts">Posts</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default Header;