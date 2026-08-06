import {useState, useEffect} from 'react';
import api from '../services/api';

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await api.get('/users/profile');

        setUser(response.data.user);
      } catch (error) {
        console.error(error)
      }
    }

    getProfile();
  }, [])

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Name: {user.name}</h2>
      <h2>Username: {user.username}!</h2>
    </div>
  );
}

export default Dashboard;