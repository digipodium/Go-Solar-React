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
        ({
          title,
          description,
          image,
          features,
          price,
          createdAt,
          _id,
        }) => (

          <div key={_id} class="col-md-12 col-lg-4 mb-4 mb-lg-0 ">
             <div class="row">
  <div class="col l4 m8 s12 offset-m2 offset-l4">
    <div class="product-card">
        <div class="card  z-depth-4">
            <div class="card-image">
                <a href="#" class="btn-floating btn-large price waves-effect waves-light brown darken-3">{price}</a>

                <img src={url + "/images/microsoftteams-image_4_.png"} alt="#" class="user-img"/>
                <span class="card-title"><span>{title}</span></span>
            </div>
            {/* <div class="card-action-buttons flaticon">
                
                <a  href=""><img src="https://cdn-icons.flaticon.com/png/128/4208/premium/4208394.png?token=exp=1653700752~hmac=31b2b893c628753cdf7a52bed5022555"></img></a>
                
                <a  href=""><img src="https://cdn-icons.flaticon.com/png/128/2652/premium/2652171.png?token=exp=1653700917~hmac=e1bc614e347df67d7dbc80374f93d5e6"></img></a>
                
                
            </div> */}
            <div class="card-content">
                <div class="row">
                    <div class="col s12">
                        {/* <p>
                            <strong>{description}</strong> <br />

                        </p> */}
                    </div>
                    
                </div>
      <Button onClick={e=>navigate("/main/equipmentDetails/" + _id)} variant="contained">Click For Full Details</Button>
                
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
  
        )
      );
    }
  };

  const applyfilter = () => {};

  return (
    <div >
              
     
    <div style={{ background: "#eee", height: "300vh" }}>
    <img class="banner" src="https://cdn.shopify.com/s/files/1/2980/5140/files/desktop_banner_-_3_5a730f81-fb4f-4a4f-9910-727963303dfa_1600x.png?v=1627145304"></img>
    <div class=" row ground">
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
  <img class="solarimg" src="https://cdn.shopify.com/s/files/1/2980/5140/collections/loom_solar_banner_1200x.jpg?v=1641970493"></img>
  
  {/* <h1 class="header__title">Expanding Card Grid</h1>
  <h2 class="header__subtitle">with Flexbox</h2> */}
  

      <div className="container">
        <div className="row">{displayData()}</div>
      </div>
    </div>
    </div>  </div>   
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