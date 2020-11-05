import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";
import "./navbar.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  return (
    <nav>
      <ul>
        {!token ? (
          <>
            <NavLink to="/" className="button">
              Home
            </NavLink>
            <NavLink to="/login" className="button">
              Login
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/WhatDoIHave">What do I Have ?</NavLink>
            <NavLink to="/MyWaste" className="button">
              My waste
            </NavLink>
            <NavLink
              to="/"
              className="button"
              onClick={() => dispatch(logOut())}
            >
              Logout
            </NavLink>
          </>
        )}
      </ul>
    </nav>
  );
}
