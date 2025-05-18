import React from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { title: "Home", url: "/" },
  { title: "Users", url: "/users" },
  { title: "Todos", url: "/todos" },
  { title: "Posts", url: "/posts" },
];

const Navbar = () => {

  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav__box">
            <Link to="/" className="logo" data-text="Awesome">
              <span className="logo__actual-text">&nbsp;Data&nbsp;</span>
              <span aria-hidden="true" className="logo__hover-text">
                &nbsp;Data&nbsp;
              </span>
            </Link>
            <ul className="nav__list">
              {links.map((links, i) => (
                <li key={i}>
                  <NavLink to={links.url} className="nav__link link">
                    {links.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
