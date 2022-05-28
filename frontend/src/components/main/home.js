import React from "react";
import { Link, NavLink } from "react-router-dom";
import app_config from "../../config";

const Home = () => {
  const url = app_config.backend_url;

  return (
    <div>
      <div>
        <div class="main-layout">
          {/* <!-- loader  --> */}
          {/* <div class="loader_bg">
         <div class="loader"> <img src={url + "/images/loading.gif"} alt="#" /></div>
         </div> */}
          <header>
            {/* <!-- header inner --> */}
            <div class="header">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                    <div class="full">
                      <div class="center-desk">
                        <div class="logo">
                          <a href="/home">
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
                      <div
                        class="collapse navbar-collapse"
                        id="navbarsExample04"
                      >
                        <ul class="navbar-nav mr-auto">
                          <li class="nav-item active">
                            <a class="nav-link" href="/home">
                              Home
                            </a>
                          </li>

                          <li class="nav-item">
                            <a class="nav-link" href="computer.html">
                              Panels
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="laptop.html">
                              Products
                            </a>
                          </li>

                          <li class="nav-item d_none">
                            <Link class="nav-link" to="/main/contactus">
                              contactus
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
          </header>

          <section class="banner_main">
            <div id="banner1" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li
                  data-target="#banner1"
                  data-slide-to="0"
                  class="active"
                ></li>
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
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or{" "}
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
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or{" "}
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
                              implement your solar panels and solar products
                              with secure tools that we provide. All of them are
                              fully vaccinated.
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
                            <a href="#">Chat </a>{" "}
                            <a href="contact.html">Email</a>
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
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.{" "}
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
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.{" "}
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
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                            <img
                              src="https://tse3.mm.bing.net/th?id=OIP.PT6yxfYGYV8g3V8u611-wgHaHa&pid=Api&P=0&w=169&h=169"
                              alt="#"
                            />
                          </figure>
                          <h3>LIGHTS</h3>
                        </div>
                      </div>
                      <div class="col-md-4 margin_bottom1">
                        <div class="product_box">
                          <figure>
                            <img
                              src="https://tse3.mm.bing.net/th?id=OIP.UllGVJXYtR1BX_d0edPrUQHaHa&pid=Api&P=0&w=165&h=165"
                              alt="#"
                            />
                          </figure>
                          <h3>SENSOR LIGHTS</h3>
                        </div>
                      </div>
                      <div class="col-md-4 margin_bottom1">
                        <div class="product_box">
                          <figure>
                            <img
                              src="https://tse1.mm.bing.net/th?id=OIP.ALFd7ASTiZ-KX5VvlPsd0QHaHa&pid=Api&P=0&w=167&h=167"
                              alt="#"
                            />
                          </figure>
                          <h3>LED LIGHTS</h3>
                        </div>
                      </div>
                      <div class="col-md-4 margin_bottom1">
                        <div class="product_box">
                          <figure>
                            <img
                              src="https://tse2.mm.bing.net/th?id=OIP.qzNPj9H2N-2mkJzpKFl8uwHaGi&pid=Api&P=0&w=186&h=164"
                              alt="#"
                            />
                          </figure>
                          <h3>Decoratives Items</h3>
                        </div>
                      </div>
                      <div class="col-md-4 margin_bottom1">
                        <div class="product_box">
                          <figure>
                            <img
                              src="https://tse1.mm.bing.net/th?id=OIP.6bIxeJBx-ioY6V_MmZYhEwHaHa&pid=Api&P=0&w=167&h=167"
                              alt="#"
                            />
                          </figure>
                          <h3>internet</h3>
                        </div>
                      </div>
                      <div class="col-md-4 margin_bottom1">
                        <div class="product_box">
                          <figure>
                            <img
                              src="https://tse1.mm.bing.net/th?id=OIP.UVlk_Xl2YKvmYhgKhtZrlgHaHa&pid=Api&P=0&w=181&h=181"
                              alt="#"
                            />
                          </figure>
                          <h3>Hardisk</h3>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="product_box">
                          <figure>
                            <img
                              src="https://tse1.mm.bing.net/th?id=OIP.unZq9kUWHeSHeXdr-pT4ygHaHa&pid=Api&P=0&w=178&h=178"
                              alt="#"
                            />
                          </figure>
                          <h3>Rams</h3>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="product_box">
                          <figure>
                            <img
                              src="https://tse3.mm.bing.net/th?id=OIP.Z6C6iHOW3uZdOXdmQlvG5wHaHa&pid=Api&P=0&w=169&h=169"
                              alt="#"
                            />
                          </figure>
                          <h3>Bettery</h3>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="product_box">
                          <figure>
                            <img
                              src="https://tse3.mm.bing.net/th?id=OIP.DW9ffLdY94CHpQfx5ppf8gHaHa&pid=Api&P=0&w=169&h=169"
                              alt="#"
                            />
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
                                  <img
                                    src="https://i.pinimg.com/originals/63/f7/e9/63f7e99d2bdb21c005ce2debca4c3a9e.jpg"
                                    style={{ height: "100px" }}
                                    alt="#"
                                  />
                                </i>
                                <h4>Neha Dixit</h4>
                                <p>
                                  This was my first expireance with this site
                                  and it was awesome! The imlementetion team's
                                  behaviour was good, experts response time was
                                  fine.
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
                                  <img
                                    src="https://1.bp.blogspot.com/-56qaqnSjSUs/XmDjV_YRBJI/AAAAAAAAPO0/QEKgs_qAvN8rIMgHvWoVq3sKc_v_A11gwCLcBGAsYHQ/s1600/Cute%2BGirl%2BDP%2BImages%2B%252818%2529.jpg"
                                    style={{ height: "100px" }}
                                    alt="#"
                                  />
                                </i>
                                <h4>Suman Chauhan</h4>
                                <p>Delivery service is awesome!!</p>
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
                                  <img
                                    src="https://www.whatsappimages.in/wp-content/uploads/2022/01/Free-Girl-DP-Wallpaper-Pics-Download.jpg"
                                    style={{ height: "100px" }}
                                    alt="#"
                                  />
                                </i>
                                <h4>Angel Priya</h4>
                                <p>Admin service is very good!!</p>
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
                                <img
                                  src="https://tse1.mm.bing.net/th?id=OIP.avSasd3jjmU5_Lno5xmxrgHaJ4&pid=Api&P=0&w=116&h=155"
                                  alt="#"
                                />

                                <img
                                  src="https://i.pinimg.com/originals/63/f7/e9/63f7e99d2bdb21c005ce2debca4c3a9e.jpg"
                                  style={{ height: "100px" }}
                                  alt="#"
                                />
                              </i>
                              <h4>Neha Dixit</h4>
                              <p>
                                This was my first expireance with this site and
                                it was awesome! The imlementetion team's
                                behaviour was good, experts response time was
                                fine.
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
                                <img
                                  src="https://1.bp.blogspot.com/-56qaqnSjSUs/XmDjV_YRBJI/AAAAAAAAPO0/QEKgs_qAvN8rIMgHvWoVq3sKc_v_A11gwCLcBGAsYHQ/s1600/Cute%2BGirl%2BDP%2BImages%2B%252818%2529.jpg"
                                  style={{ height: "100px" }}
                                  alt="#"
                                />
                              </i>
                              <h4>Suman Chauhan</h4>
                              <p>Delivery service is awesome!!</p>
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
                                <img
                                  src="https://www.whatsappimages.in/wp-content/uploads/2022/01/Free-Girl-DP-Wallpaper-Pics-Download.jpg"
                                  style={{ height: "100px" }}
                                  alt="#"
                                />
                              </i>
                              <h4>Angel Priya</h4>
                              <p>Admin service is very good!!</p>
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
