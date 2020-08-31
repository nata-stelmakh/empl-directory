import React from "react";


function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse row" id="navbarNav">

                <div className="search-area col-4">
                    <div className="searchbox">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="">
                                    Search
            </span>
                            </div>
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="search"
                                aria-label="Search"

                            />
                        </div>
                    </div>

                </div>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Country
    <span className="caret"></span></button>
                    <ul className="dropdown-menu">

                        <li><a href="#">USA</a></li>
                        <li><a href="#">Germany</a></li>
                        <li><a href="#">Netherlands</a></li>
                        <li><a href="#">Spain</a></li>
                        <li><a href="#">Turkey</a></li>
                        <li><a href="#">Brazil</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
