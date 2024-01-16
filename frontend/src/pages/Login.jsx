import React, { useState } from "react";
import styles from "../styles/Singup.module.css";
import NavBar from "./NavBar.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    let obj = {
      email,
      password,
    };

    fetch("http://localhost:4000/login", {
      method: "post",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          setPassword("");
          setEmail("");
          localStorage.setItem("token", data.token);
          alert("User logged in");
        } else {
          alert("Something went wrong");
        }
        console.log(data);
      });
  };

  return (
    <div>
      <div className={styles.container}>
        <h2>Login</h2>

        <div className={styles.form}>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
          </div>
          <button className={styles.button} onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
