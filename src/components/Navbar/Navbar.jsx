import React from 'react';

const Navbar = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <button>Residents</button>
      </li>
      <li className="nav-item active">
        <button>Professional</button>
      </li>
      <li className="nav-item active">
        <button>Goverment</button>
      </li>
      <li className="nav-item active">
        <button>Services</button>
      </li>
    </ul>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Account</button>
  </div>
</nav>
    )
}

export default Navbar;