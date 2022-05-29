import "../../stylesheets/payment.css"
import { useEffect, useState } from "react";
const Payment = () => {
    let count = 1;

    const [qty, setQty] = useState(1);

    const increment = () => {
        console.log('clicked!!');
        console.log(count);
        count++;
        setQty(qty + 1);
    }
    return (
        <div class="cardds">
        <div class="card card-c" >
  <div class="card-header">
    Price Details
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Price(1 item)<strong class="strong">	
Rs. 1,050</strong></li>
    <li class="list-group-item">Delivery Charges<strong class="strong">	
Free</strong></li>
    <li class="list-group-item">Total Payable<strong class="strong">	
Rs. 1,050</strong></li>
  </ul>
</div>
        <div></div>
           
<div class="card card-a">
  <div class="card-header">
  Delivery Address
  </div>
  <div class="card-body">
    <h5 class="card-title">Janhavi Srivastava</h5>
    <p class="card-text">Vishal Khand, Gomti Nagar, Lucknow (up)226010</p>
    <a href="#" class="btn btn-primary button">Delivery Here</a>
    <a href=""class="edit">Edit</a>
  </div>
</div>


<div class="card card-bb">
  <div class="card-header">
    Order Summary
  </div>
  <img class="imggg"src="https://cdn.shopify.com/s/files/1/2980/5140/products/panel10_700x.jpg?v=1618827654"></img>
  <div class="card-body card-b">
      
    <h5 class="card-title">Loom Solar Panel 10 watt - 12 volt for Mobile Charging</h5>
    <p class="card-text">Rs. 1,050</p>
    <h3 className="quantity">Quantity : {qty}</h3>
                        <button className="btn btn-primary quantity" onClick={increment}> <i class="fa fa-chevron-up" aria-hidden="true"></i> </button>
    {/* <a href="#" class="btn btn-primary"></a> */}
  </div>
</div>
</div>


    )
};
export default Payment;