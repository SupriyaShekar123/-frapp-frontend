import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchItems } from "../store/items/actions";
import { getUserWithStoredToken, logOut } from "../store/user/actions";
import { selectToken, selectId } from "../store/user/selectors";
import "./navbar.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const id = useSelector(selectId);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch, id]);

  return (
    <nav>
      <ul className="contain borderXwidth">
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
            <NavLink to="/">Home</NavLink>
            <NavLink to="/WhatDoIHave">What do I Have ?</NavLink>
            <NavLink to="/RecipeSuggestions">Recipe Suggestions</NavLink>
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
