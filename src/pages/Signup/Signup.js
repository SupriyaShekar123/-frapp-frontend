import React, { useState, useEffect } from "react";
import PasswordMask from "react-password-mask";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(firstName, lastName, email, password));

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <form className="form-shape">
        <h1>Sign up</h1>
        <label>First Name</label>
        <input
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          type="text"
          placeholder="Enter first name"
          required
        />

        <label>Last Name</label>
        <input
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          type="text"
          placeholder="Enter last name"
          required
        />

        <label>Email address</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Enter email"
          required
        />

        <label>Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Enter password"
          required
        />

        <button className="myButton" type="submit" onClick={submitForm}>
          Signup
        </button>
      </form>
    </div>
  );
}
