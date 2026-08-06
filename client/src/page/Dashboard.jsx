import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import api from "../services/api";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await api.get("/users/profile");

        setUser(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };

    getProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}!</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
