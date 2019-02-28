import React from 'react';
import { NavLink as Link } from 'react-router-dom';
export default () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        {/*<img
                            src="https://bulma.io/images/bulma-type-white.png"
                            alt="Logo"
                        />*/}
                        <h2 className="is-size-3 has-text-weight-bold is-family-sans-serif">
                            NodeLTS
                        </h2>
                    </Link>
                    <span
                        className="navbar-burger burger"
                        data-target="navbarMenuHeroA"
                    >
                        <span />
                        <span />
                        <span />
                    </span>
                </div>
                <div id="navbarMenuHeroA" className="navbar-menu">
                    <div className="navbar-end">
                        <Link
                            to="/current"
                            activeClassName="is-active"
                            className="navbar-item"
                        >
                            Current
                        </Link>
                        <Link
                            to="/future"
                            activeClassName="is-active"
                            className="navbar-item"
                        >
                            Future
                        </Link>
                        <Link
                            to="/past"
                            activeClassName="is-active"
                            className="navbar-item"
                        >
                            Past
                        </Link>
                        {/* <Link
                            to="/raw"
                            activeClassName="is-active"
                            className="navbar-item"
                        >
                            Raw Data
                        </Link> */}
                        <span className="navbar-item">
                            <a
                                href="https://www.github.com/rajatkumar/node-lts"
                                className="button is-primary is-inverted"
                            >
                                <span className="icon">
                                    <i className="fa fa-github" />
                                </span>
                                <span>Github</span>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};
