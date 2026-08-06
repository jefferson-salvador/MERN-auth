import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/users/login", {
        username,
        password,
      });

      localStorage.setItem("token", response.data.token);

      navigate("/dashboard");

      console.log("Login successful!");
    } catch (error) {
      console.error("Login error:", error);

      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleLogin}>
        <div>
          <label>Username</label> <br />
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <br />
        <div>
          <label>Password</label> <br />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
