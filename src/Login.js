import React, { useState } from "react";
import { auth } from "./Firebase";
export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px"
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(221, 93, 34, 0.986)",
          border: "2px solid black",
          width: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px"
        }}
      >
        <center>
          <form>
            <h3>Login</h3>
            <h8
              style={{
                marginTop: "10px",
                marginLeft: "-110px"
              }}
            >
              Email
            </h8>
            <br />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={changeHandler}
              style={{
                border: "1px solid black",
                outline: "none",
                borderRadius: "10px"
              }}
            />{" "}
            <br />
            <h8
              style={{
                marginTop: "10px",
                marginLeft: "-85px"
              }}
            >
              Password
            </h8>
            <br />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={changeHandler}
              style={{
                border: "1px solid black",
                outline: "none",
                borderRadius: "10px"
              }}
            />
            <br />
            <button
              style={{
                marginTop: "10px",
                color: "white",
                backgroundColor: "black",
                border: "none",
                borderRadius: "10px"
              }}
              onClick={(e) => {
                e.preventDefault();
                auth.signInWithEmailAndPassword(email, password);
              }}
            >
              {" "}
              Login{" "}
            </button>
            <button
              style={{
                marginTop: "10px",
                marginLeft: "10px",

                color: "white",
                backgroundColor: "black",
                border: "none",
                borderRadius: "10px",
                marginBottom: "10px"
              }}
              onClick={(e) => {
                e.preventDefault();
                auth.createUserWithEmailAndPassword(email, password);
              }}
            >
              Sign Up and login
            </button>
          </form>
        </center>
      </div>
    </div>
  );
}
