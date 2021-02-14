import React from 'react';
import {Link} from 'react-router-dom';

const Navbar=()=>
{
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className='row'>
                <div className='col-10 mx-auto'>


        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Ritik Agrawal</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <Link class="nav-link" to='/'>Home <span class="sr-only">(current)</span></Link>
      </li>


      <li class="nav-item">
        <Link class="nav-link" to='/about'>About</Link>
      </li>

      <li class="nav-item">
        <Link class="nav-link" to='/contact'>Contact</Link>
      </li>

    </ul>
  </div>
</nav>
                </div>
            </div>
        </div>
 
        </>
    )
};
export default Navbar;