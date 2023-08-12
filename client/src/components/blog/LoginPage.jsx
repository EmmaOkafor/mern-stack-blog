// import React, {useState} from 'react';
// import {Navigate} from "react-router-dom";

// function LoginPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [redirect, setRedirect] = useState(false);

//   async function login(ev) {
//     ev.preventDefault();
//       const response = await fetch('http://localhost:4000/login', {
//         method: 'POST',
//         body: JSON.stringify({ username, password }),
//         headers: { 'Content-Type': 'application/json' },
//         credentials: 'include',
//       });

//       if (response.ok) {
//         setRedirect(true);
//       } else {
//         alert('Wrong Credentials');
//       }
//   }

//   if(redirect){
//     return <Navigate to={'/'} />;
//   }
//   return (
//     <div>
//         <div className='wrapper login row'>
//               <div className="col-sm-12">
//                 <form onSubmit={login}>
//                 <h5><strong>LOGIN</strong></h5>               
//                   <input 
//                     className="form-control" 
//                     type="text" 
//                     value={username} 
//                     placeholder="Username" 
//                     onChange={ev => setUsername(ev.target.value)}
//                     />
//                   <input 
//                     class="form-control" 
//                     type="password" 
//                     value={password} 
//                     placeholder="password"
//                     onChange={ev => setPassword(ev.target.value)}
//                      />
//                   <button className='form-control'>Login</button>
//                 </form>
//               </div>
//         </div>
//     </div>
//   )
// }

// export default LoginPage;

import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    } else {
      alert('Wrong Credentials');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div>
      <div className="wrapper login row">
        <div className="col-sm-12">
          <form onSubmit={login}>
            <h5>
              <strong>LOGIN</strong>
            </h5>
            <input
              className="form-control"
              type="text"
              value={username}
              placeholder="Enter your username"
              onChange={(ev) => setUsername(ev.target.value)}
            />
            <input
              className="form-control"
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <button className="form-control">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
