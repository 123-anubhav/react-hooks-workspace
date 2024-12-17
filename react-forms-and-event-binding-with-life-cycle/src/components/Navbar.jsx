import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Optional for additional custom styles

let Navbar = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand fw-bold " to="/">React with forms and Event binding Example</Link>
                    <div className="d-flex">
                        <Link className="nav-link " to="/form-binding">forms and Event binding</Link>
                        &nbsp;&nbsp;
                        <Link className="nav-link " to="/life-cycle">life-cycle class based</Link>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
