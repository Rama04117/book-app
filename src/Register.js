import React, { useState } from 'react';

function RegisterPage() {

  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert('Register clicked!');
  };

  return (
    <div style={{ padding: '20px' }}>

  {/* Page title */}
  <h2>Create an Account</h2>

  {/* Registration form */}
  <form onSubmit={handleSubmit}>

  {/* Username field */}
  <div style={{ marginBottom: '10px' }}>
    <input
      type="text"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)} // Updates username when user types
      />
     </div>

  {/* Email field */}
  <div style={{ marginBottom: '10px' }}>
    <input
     type="email"
     placeholder="Email Address"
      value={email}
      onChange={(e) => setEmail(e.target.value)} // Updates email when user types
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

  {/* Register button */}
    <button type="submit">Register</button>

    </form>
    </div>
  );
}

export default RegisterPage;