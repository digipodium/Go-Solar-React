//import React from 'react'
import { Search } from "@mui/icons-material";
import { InputAdornment, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import app_config from "../../config";
import "../../stylesheets/browseEquipment.css";

const BrowseEquipment = () => {
  const [datalist, setDatalist] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.backend_url;
  const navigate = useNavigate();

  const fetchData = () => {
    fetch(url + "/equipment/getall").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setDatalist(data);
          setLoading(false);
        });
      }
    });
  };

  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const displayData = () => {
    if (!loading) {
      return datalist.map(
        ({ title, description, image, features, price, seller, _id }) => (
          <div key={_id} class="col-md-12 col-lg-4 mb-4 mb-lg-0 ">
            <div class="product">
              <NavLink className="ripple" to={"/main/equipmentDetails/" + _id}>
                <img
                  src={url + "/uploads/" + image}
                  class="card-img-top"
                  alt="Laptop"
                />
              </NavLink>

              <h1 class="product__title">{title}</h1>
              <h3>₹ {price}</h3>
              <hr />
              {/* <p>The Nike Roshe One Print Men's Shoe offers breathability, lightweight cushioning and bold style with an injected unit midsole and colorful mesh upper. </p> */}
              <a href="./main/equipmentDetails" class="product__btn btn">
                Buy Now
              </a>
            </div>
          </div>
        )
      );
    }
  };

  const applyfilter = () => {};

  return (
    <div>
      <div style={{ background: "#eee", height: "300vh" }}>
        <img
          class="img-fluid"
          src="https://cdn.shopify.com/s/files/1/2980/5140/files/desktop_banner_-_3_5a730f81-fb4f-4a4f-9910-727963303dfa_1600x.png?v=1627145304"
        ></img>
        <div class="row ground">
          <div class="col-md-5 mb-3">
            <div class="form-outline form">
              {/* <label for="state" > </label> */}

              {/* <input class="applyNowBtn" id="event-search" type="submit" name="searchevent" value="Search"></input> */}

              {/* <a href="#" class="adSearchLink">Advance Search </a>   */}
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="header">
            <img
              class="solarimg"
              src="https://cdn.shopify.com/s/files/1/2980/5140/collections/loom_solar_banner_1200x.jpg?v=1641970493"
            ></img>

            {/* <h1 class="header__title">Expanding Card Grid</h1>
  <h2 class="header__subtitle">with Flexbox</h2> */}

            <div className="container">
              <div className="row">{displayData()}</div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

const styles = {
  header: {
    // background:
    //   "linear-gradient(to right, #0000009b, #000000ad), url(http://localhost:5000/images/browse_back.jpg)",
    padding: "2rem",
    textShadow: "2px 2px 3px #0000005c",
    height: "300px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

export default BrowseEquipment;
