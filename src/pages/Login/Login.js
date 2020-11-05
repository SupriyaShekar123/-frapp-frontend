import React, { useState, useEffect } from "react";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { fetchItems } from "../../store/items/actions";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/WhatDoIHave");
      dispatch(fetchItems());
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <form className="form-shape">
        <h1>Log In</h1>
        <label>Email address</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Enter email"
          required
        />
        <label controlId="formBasicPassword">Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Enter password"
          required
        />
        <Link className="myButton" to="/signup">
          Signup
        </Link>{" "}
        <button type="submit" className="myButton" onClick={submitForm}>
          Login
        </button>
      </form>
    </div>
  );
}
