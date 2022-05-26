import React from "react";
import { Link, NavLink } from "react-router-dom";
import app_config from "../../config";

const Home = () => {
  const url = app_config.backend_url;

  return (
    <div>
      <div>
        <header>
          {/* <!-- header inner --> */}
          <div class="header">
            <div class="container-fluid">
              <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                  <div class="full">
                    <div class="center-desk">
                      <div class="logo">
                        <a href="index.html">
                          <img src={url + "/images/logo3.png"} alt="#" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                  <nav class="navigation navbar navbar-expand-md navbar-dark ">
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
                        <li class="nav-item active">
                          <a class="nav-link" href="index.html">
                            Home
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="about.html">
                            About
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="computer.html">
                            Computer
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="laptop.html">
                            Laptop
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="product.html">
                            Products
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="contact.html">
                            Contact Us
                          </a>
                        </li>
                        <li class="nav-item d_none">
                          <a class="nav-link" href="#">
                            <i class="fa fa-search" aria-hidden="true"></i>
                          </a>
                        </li>
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
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section class="banner_main">
          <div id="banner1" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#banner1" data-slide-to="0" class="active"></li>
              <li data-target="#banner1" data-slide-to="1"></li>
              <li data-target="#banner1" data-slide-to="2"></li>
              <li data-target="#banner1" data-slide-to="3"></li>
              <li data-target="#banner1" data-slide-to="4"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container">
                  <div class="carousel-caption">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="text-bg">
                          <span>CREATING A GREEN WORLD WITH</span>
                          <h1>SOLAR PANELS</h1>
                          <p>
                            It's time to create a more safe, secure and green
                            world with solar pannels. We provide india's most
                            trusted solar panels and solar products with easy
                            implementation{" "}
                          </p>
                          <a href="#">BROWSE </a>{" "}
                          <a href="contact.html">Contact </a>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="text_img">
                          <figure>
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMYL3aRoBx6A5XRjB7WYLznge7l0z9GD32Jg&usqp=CAU"
                              alt="#"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container">
                  <div class="carousel-caption">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="text-bg">
                          <span>A MORE ADVANCE</span>
                          <h1>SOLAR PANELS ARE HERE</h1>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or{" "}
                          </p>
                          <a href="#">Buy Now </a>{" "}
                          <a href="contact.html">Contact </a>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="text_img">
                          <figure>
                            <img
                              src="images/2.jpg"
                              height="278"
                              width="696"
                              alt="#"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container">
                  <div class="carousel-caption">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="text-bg">
                          <span>MORE ADVANCE </span>
                          <h1>SOLAR PRODUCTS ARE HERE</h1>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or{" "}
                          </p>
                          <a href="#">BROWSE </a>{" "}
                          <a href="contact.html">Contact </a>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="text_img">
                          <figure>
                            <img
                              src="images/intro_solar_system.png"
                              height="278"
                              width="696"
                              d37
                              alt="#"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container">
                  <div class="carousel-caption">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="text-bg">
                          <span>OUR IMPLEMENTATION TEAM WILL</span>
                          <h1>IMPLEMENT AT EASE</h1>
                          <p>
                            Our implementation team will help you to place,
                            implement your solar panels and solar products with
                            secure tools that we provide. All of them are fully
                            vaccinated.
                          </p>
                          <a href="#">Buy Now </a>{" "}
                          <a href="contact.html">Contact </a>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="text_img">
                          <figure>
                            <img
                              src="images/solar-panel-on-a-roof-of-a-house-concept-of-sustainable-resources-illustration-design-vector.jpg"
                              height="278"
                              width="696"
                              alt="#"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container">
                  <div class="carousel-caption">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="text-bg">
                          <span>SOLAR PANELS</span>
                          <h1>ACCORDING TO YOUR NEED</h1>
                          <p>
                            We can help you to calculate your electricity need
                            and we can provide best suitable solar panel
                            according to your need. You can contact us for for
                            information{" "}
                          </p>
                          <a href="#">Chat </a> <a href="contact.html">Email</a>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="text_img">
                          <figure>
                            <img
                              src="images/Solar-Companies-in-Ranchi.jpg"
                              height="278"
                              width="696"
                              alt="#"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#banner1"
              role="button"
              data-slide="prev"
            >
              <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </a>
            <a
              class="carousel-control-next"
              href="#banner1"
              role="button"
              data-slide="next"
            >
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
          </div>
        </section>
        {/* <!-- end banner -->
    <!-- three_box --> */}
        <div class="three_box">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="box_text">
                  <i>
                    <img src="images/thr.png" alt="#" />
                  </i>
                  <h3>SOLAR PRODUCTS</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.{" "}
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="box_text">
                  <i>
                    <img src="images/thr1.png" alt="#" />
                  </i>
                  <h3>SOLAR PRODUCTS</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.{" "}
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="box_text">
                  <i>
                    <img src="images/thr2.png" alt="#" />
                  </i>
                  <h3>OTHER SERVICES</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- three_box -->
    <!-- products --> */}
        <div class="products">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="titlepage">
                  <h2>Our Products</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="our_products">
                  <div class="row">
                    <div class="col-md-4 margin_bottom1">
                      <div class="product_box">
                        <figure>
                          <img src="images/product1.png" alt="#" />
                        </figure>
                        <h3>Computer</h3>
                      </div>
                    </div>
                    <div class="col-md-4 margin_bottom1">
                      <div class="product_box">
                        <figure>
                          <img src="images/product2.png" alt="#" />
                        </figure>
                        <h3>Laptop</h3>
                      </div>
                    </div>
                    <div class="col-md-4 margin_bottom1">
                      <div class="product_box">
                        <figure>
                          <img src="images/product3.png" alt="#" />
                        </figure>
                        <h3>Tablet</h3>
                      </div>
                    </div>
                    <div class="col-md-4 margin_bottom1">
                      <div class="product_box">
                        <figure>
                          <img src="images/product4.png" alt="#" />
                        </figure>
                        <h3>Speakers</h3>
                      </div>
                    </div>
                    <div class="col-md-4 margin_bottom1">
                      <div class="product_box">
                        <figure>
                          <img src="images/product5.png" alt="#" />
                        </figure>
                        <h3>internet</h3>
                      </div>
                    </div>
                    <div class="col-md-4 margin_bottom1">
                      <div class="product_box">
                        <figure>
                          <img src="images/product6.png" alt="#" />
                        </figure>
                        <h3>Hardisk</h3>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="product_box">
                        <figure>
                          <img src="images/product7.png" alt="#" />
                        </figure>
                        <h3>Rams</h3>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="product_box">
                        <figure>
                          <img src="images/product8.png" alt="#" />
                        </figure>
                        <h3>Bettery</h3>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="product_box">
                        <figure>
                          <img src="images/product9.png" alt="#" />
                        </figure>
                        <h3>Drive</h3>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <a class="read_more" href="#">
                        See More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end products -->
    <!-- laptop  section --> */}
        <div class="laptop">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="titlepage">
                  <p>Every Computer and laptop</p>
                  <h2>Up to 40% off !</h2>
                  <a class="read_more" href="#">
                    Shop Now
                  </a>
                </div>
              </div>
              <div class="col-md-6">
                <div class="laptop_box">
                  <figure>
                    <img src="images/pc.png" alt="#" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end laptop  section -->
    <!-- customer --> */}
      <div class="customer">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>Customer Review</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div
                id="myCarousel"
                class="carousel slide customer_Carousel "
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="container">
                      <div class="carousel-caption ">
                        <div class="row">
                          <div class="col-md-9 offset-md-3">
                            <div class="test_box">
                              <i>
                                <img src="images/cos.png" alt="#" />
                              </i>
                              <h4>Sandy Miller</h4>
                              <p>
                                ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit
                                esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="container">
                      <div class="carousel-caption">
                        <div class="row">
                          <div class="col-md-9 offset-md-3">
                            <div class="test_box">
                              <i>
                                <img src="images/cos.png" alt="#" />
                              </i>
                              <h4>Sandy Miller</h4>
                              <p>
                                ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit
                                esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="container">
                      <div class="carousel-caption">
                        <div class="row">
                          <div class="col-md-9 offset-md-3">
                            <div class="test_box">
                              <i>
                                <img src="images/cos.png" alt="#" />
                              </i>
                              <h4>Sandy Miller</h4>
                              <p>
                                ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit
                                esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#myCarousel"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#myCarousel"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
