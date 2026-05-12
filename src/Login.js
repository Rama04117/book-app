// Import React and useState hook to manage form inputs
import React, { useState } from 'react';

// LoginPage component — shows a login form to the user
function LoginPage() {

  // Stores what the user types in each field
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Runs when the user clicks the Login button
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page from refreshing
    alert('Login clicked!'); // Placeholder message
  };

  return (
    <div style={{ padding: '20px' }}>

      {/* Page title */}
      <h2>Login</h2>

      {/* Login form */}
      <form onSubmit={handleSubmit}>

        {/* Username field */}
        <div style={{ marginBottom:'10px' }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Password field */}
        <div style={{ marginBottom: '10px' }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Updates password when user types
          />
        </div>

        {/* Login button */}
        <button type="submit">Login</button>

      </form>
    </div>
  );
}

// Makes LoginPage available to be used in App.js
export default LoginPage;
