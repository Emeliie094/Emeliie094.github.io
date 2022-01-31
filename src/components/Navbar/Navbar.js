import React, { useState } from "react";
import { Link } from 'react-scroll'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar" id="navbar">
                <div className="nav-container">
                    <Link to="home" className="nav-logo">
                        <i className="fas fa-code"></i>
                    </Link>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                to="home"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}

                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="my-work"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                My Work
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
