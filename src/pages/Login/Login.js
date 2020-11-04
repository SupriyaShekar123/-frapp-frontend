import React, { useState, useEffect } from "react";
import PasswordMask from "react-password-mask";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    console.log(token);
    if (token !== null) {
      history.push("/WhatDoIHave");
    }
  }, [token, history]);

  function submitForm(event) {
    console.log("hi");
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <div>
        <h1>Log In</h1>
        <form>
            <div>
                <label controlId="formBasicEmail">Email address
                    <textarea
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        type="email"
                        placeholder="Enter email"
                        required
                    />
                 </label>    
            </div>

            <div>
                <label controlId="formBasicPassword">Password
                    <PasswordMask
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        type="password"
                        placeholder="Enter password"
                        required
                    />
                </label>
            </div>

            <input type="submit" value="Log In" onClick={submitForm}/>
        </form>
    </div>
  );
}
