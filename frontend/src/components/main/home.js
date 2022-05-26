import React from 'react'
import "../../stylesheets/home.css";
const Home = () => {
  return (
    <div class="whole">
    <div id="carouselExampleIndicators" class="carousel slide" data-mdb-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-mdb-target="#carouselExampleIndicators"
        data-mdb-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-mdb-target="#carouselExampleIndicators"
        data-mdb-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-mdb-target="#carouselExampleIndicators"
        data-mdb-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://solarrooftop.gov.in/img/new_login2021/banner/slider-4.jpg" class="d-block w-100" alt="Wild Landscape"/>
      </div>
      <div class="carousel-item">
        <img src="https://solarrooftop.gov.in/img/new_login2021/banner/slider-5.jpg" class="d-block w-100" alt="Camera"/>
      </div>
      <div class="carousel-item">
        <img src="https://solarrooftop.gov.in/img/new_login2021/banner/slider-6.jpg" class="d-block w-100" alt="Exotic Fruits"/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>
  )
}
export default Home;