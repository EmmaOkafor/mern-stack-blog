import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Person2Icon from '@mui/icons-material/Person2';
import { Link } from "react-router-dom";
export default function Profile() {

  const isLogged = false;


  
  return (
    <div className='profile'>
      {!isLogged ?
        <ul>
          <li class="nav-item" role="presentation">
            <Link class="nav-link rounded-5" id="contact-tab2" to="/login"  data-bs-toggle="tab" role="tab" aria-selected="false">Login</Link>
          </li>
          <li class="nav-item" role="presentation">
            <Link class="nav-link rounded-5" id="contact-tab2" to="/register" data-bs-toggle="tab" role="tab" aria-selected="false">Signup</Link>
          </li>
        </ul> :
        <ul>
          <li><Person2Icon /></li>
          <li><SearchIcon /></li>
        
        </ul>
      } 
    </div>
  )
}
