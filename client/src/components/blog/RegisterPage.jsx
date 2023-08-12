import React, { useState } from 'react';

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev) {
    ev.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200) {
        alert('Registration successful');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration');
    }
  }

  return (
    <>
      <div className='wrapper register row '>
        <div className="col-sm-12">
          <form onSubmit={register} className='bg-white'>
            <h5><strong>SIGNUP</strong></h5>          
                <input
                  className='form-control'
                  type="text"
                  value={username}
                  placeholder="Username"
                  onChange={ev => setUsername(ev.target.value)}
                />
                <input
                  className='form-control'
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={ev => setEmail(ev.target.value)}
                />
                <input
                  className='form-control'
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={ev => setPassword(ev.target.value)}
                />
                <button className="form-control">Register</button>
          </form>
        </div>
      </div>
    </>
  );
}
