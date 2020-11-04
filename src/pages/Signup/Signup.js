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

    console.log("new user details:", {
      firstName,
      lastName,
      email,
      password
    })

    dispatch(signUp(firstName, lastName, email, password));

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div>
        <h1>SIGN UP</h1>
        <form>
            <div>
                <label controlId="formBasicEmail">First Name
                    <textarea
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                    type="text"
                    placeholder="Enter first name"
                    required
                    />
                </label>
            </div>
          
            <div>
                <label controlId="formBasicLastName">Last Name
                    <textarea
                    value={lastName}
                    onChange={event => setLastName(event.target.value)}
                    type="text"
                    placeholder="Enter last name"
                    required
                    />
                </label>
            </div>

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

    
