import React from 'react';
import '../css/main.css';
import Product from './product'
function NavBar() {
  return (
    <div>
      <div className="grad headerBg">
          <div className="container pb-5 pt-3 sideSpacing">
              <nav className="navbar text-white justify-content-between">
                  <a className="navbar-brand impact"><ul className="bullet"><li></li></ul>Impact<span className="scout">Scout</span></a>
                  <div className="form-inline">
                      <span className="alex-doe">Alex Doe</span>
                  </div>
              </nav>
              <nav className="navbar navbar-expand-sm navbar-dark paddingBottom">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                      <ul className="navbar-nav">
                          <li className="nav-item active">
                              <a className="nav-link pl-4 pr-4" style={{borderRadius:"50px",width:"fit-content"}} href="#">Home</a>
                          </li>
                          <li className="nav-item active">
                              <a className="nav-link pl-4 pr-4" style={{borderRadius:"50px",width:"fit-content",backgroundColor:"#447cc3", fontWeight:"bold"}} href="#">Previous Project</a>
                          </li>
                          <li className="nav-item active">
                              <a className="nav-link pl-4 pr-4" style={{borderRadius:"50px",width:"fit-content"}} href="#">Draft Project</a>
                          </li>
                      </ul>
                      <form className="form-inline">
                          <input className="form-control mr-sm-2 searchInput" type="search" placeholder="Search project" aria-label="Search"/>
                          <div class="input-group-append searchIcon">
                                <i class="fa fa-search"></i>
                          </div>
                          <img className="filter" src="https://www.mdi-online.nl/Content/Images/hamburger.png"/>
                      </form>
                  </div>
              </nav>

          </div>
      </div>
        <Product/>
    </div>
  );
}

export default NavBar;
