import { useState, useEffect } from 'react';

export default function About() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data.slice(0, 5)); // Show first 5 users
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="loading">Loading users...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <main className="about-page">
      <h2>About This SPA</h2>
      <p>This demonstrates API integration with JSONPlaceholder.</p>

      <section className="users-list">
        <h3>Sample Users from API:</h3>
        <div className="users-grid">
          {users.map(user => (
            <div key={user.id} className="user-card">
              <h4>{user.name}</h4>
              <p>📧 {user.email}</p>
              <p>🏢 {user.company.name}</p>
              <p>🌐 {user.website}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}