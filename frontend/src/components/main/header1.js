import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header1 = () => {

  return (
    <div
      class="header"
      style={{ background: `url('images/banner.jpg')` }}
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
            <div class="full">
              <div class="center-desk">
                <div class="logo d-3">
                  <a href="/home">
                    <img src={"images/logo.png"} alt="logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
            <nav class="navigation navbar-expand-md navbar-dark ">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarsExample04"
                aria-controls="navbarsExample04"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarsExample04">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <NavLink className="nav-link" to="/home">
                      Home
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className="nav-link" to="/main/signup">
                      SignUp
                    </NavLink>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="/main/browseEquipment">
                      Panels
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/main/browseEquipment">
                      Products
                    </a>
                  </li>

                  <li class="nav-item d_none">
                    <Link class="nav-link" to="/main/contactus">
                      ContactUs
                    </Link>
                  </li>
                  {/* <li class="nav-item d_none">
                          <a class="nav-link" href="#">
                            <i class="fa fa-search" aria-hidden="true"></i>
                          </a>
                        </li> */}
                  <li class="nav-item d_none">
                    <Link class="nav-link" to="/main/login">
                      Login
                    </Link>
                  </li>
                  <li class="nav-item d_none">
                    <Link class="nav-link" to="/main/sellerlogin">
                      Seller Login
                    </Link>
                  </li>
                  <li class="nav-item d_none">
                    <Link class="nav-link" to="/main/expertlogin">
                      Expert Login
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
