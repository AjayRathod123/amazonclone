import React, { useEffect, useState } from "react";
import "./Login.css";
import { NavLink, useHistory } from "react-router-dom";
import firebaseApp, { auth } from "./firebase";

const Login = () => {
  // const history = useHistory();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");

  const clearInput = () => {
    setEmail("");
    setPassword("");
  };

  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };

  const login = (e) => {
    clearError();
    e.preventDefault();
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disable":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const register = (e) => {
    clearError();
    e.preventDefault();
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const logout = () => {
    firebaseApp.auth().signOut();
  };

  const authListener = () => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="login">
      <NavLink to="/">
        <img
          className="login__amazonlogo"
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          alt="logo"
        />
      </NavLink>
      <div className="login__container">
        <h1 className="login__heading">Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.password)}
          />
          <button className="login__signinButton" type="submit" onClick={login}>
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale.Please see our Privacy Notice,our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          className="login__registerButton"
          onClick={register}
          type="submit"
        >
          Create Your Accout
        </button>
      </div>
    </div>
  );
};

export default Login;
