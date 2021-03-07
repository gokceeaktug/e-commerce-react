import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import Koroglu from '../pages/images/koroglu.png';

function Navbar()
{
  return(
    <nav>
      <div className="row">
        <div className="col-md-3">
          <img src={Koroglu}></img>
        </div> 
        <div className="col-md-9">
            <ul className="nav-links">
            <Link to="/"><li>Home</li>
            </Link>
            <Link to="/pricing">
              <li>Pricing</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            </ul>
        </div> 
      </div>
    </nav>
  )
  
}
export default Navbar;
