import React, { useState } from "react";
import axios from "axios";

const LoginRegisterForm = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: loginEmail,
        password: loginPassword,
      });
      // handle successful login
      console.log(response.data);
    } catch (error) {
      // handle login error
      console.log(error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/register", {
        email: registerEmail,
        password: registerPassword,
      });
      // handle successful registration
      console.log(response.data);
    } catch (error) {
      // handle registration error
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <label>
          Email:
          <input
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        <label>
          Email:
          <input
            type="email"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default LoginRegisterForm;