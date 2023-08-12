  // import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
  // import AddIcCallIcon from '@mui/icons-material/AddIcCall';
  // import BookIcon from '@mui/icons-material/Book';
  // import RssFeedIcon from '@mui/icons-material/RssFeed';
import { Link } from "react-router-dom";


function Navbar(){
  return(
    <div>
      <ul class="nav nav-pills nav-fill gap-2 p-1 small shadow-sm" id="pillNav2" role="tablist" >
            <li class="nav-item" role="presentation">
            <Link class="nav-link active rounded-5" id="home-tab2" to="/" data-bs-toggle="tab" role="tab" aria-selected="true">HOME</Link>
            </li>
            <li class="nav-item" role="presentation">
            <Link class="nav-link rounded-5" id="profile-tab2" to="/about" data-bs-toggle="tab" role="tab" aria-selected="false">ABOUT</Link>
            </li>
            <li class="nav-item" role="presentation">
            <Link class="nav-link rounded-2" id="contact-tab2" to="/contact" data-bs-toggle="tab" role="tab" aria-selected="false">CONTACT</Link>
            </li>
            <li class="nav-item" role="presentation">
            <Link class="nav-link rounded-5" id="contact-tab2" to="/write" data-bs-toggle="tab" role="tab" aria-selected="false">WRITE</Link>
            </li>
            <li class="nav-item" role="presentation">
            <Link class="nav-link rounded-5" id="contact-tab2" to="/logout" data-bs-toggle="tab" role="tab" aria-selected="false">LOGOUT</Link>
            </li>
        </ul>   
    </div>
  );
}

export default Navbar;
