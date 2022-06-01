import "../../stylesheets/payment.css";
import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import app_config from "../../config";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        padding: "0.5rem",
        iconColor: "#c4f0ff",
        color: "#000",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "#fce883",
        },
        "::placeholder": {
          color: "#87bbfd",
        },
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: "#ffc7ee",
      },
    },
  };

  const stripe = useStripe();
  const elements = useElements({});
  const [isPaymentLoading, setPaymentLoading] = useState(false);
  const navigate = useNavigate();

  const getIntent = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: (product.price + del_charge) * 100 }),
    };
    return fetch(url + "/create-payment-intent", requestOptions).then(
      (response) => response.json()
    );
  };

  const checkoutSubmit = () => {
    fetch(url + "/order/add/", {
      method: "POST",
      body: JSON.stringify({
        product: product._id,
        orderedBy: currentUser._id,
        createdAt: new Date(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Location Booked Successfully",
          });
          navigate("/user/manageorder");
        });
      }
    });
  };

  const payMoney = async (e) => {
    e.preventDefault();
    getIntent().then((res) => {
      console.log(res);
      let clientSecret = res.client_secret;

      completePayment(clientSecret);
    });
  };

  const completePayment = async (key) => {
    const paymentResult = await stripe.confirmCardPayment(key, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser.name,
        },
      },
    });

    setPaymentLoading(false);
    if (paymentResult.error) {
      alert();
      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text: paymentResult.error.message,
      });
      console.log(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        console.log(paymentResult);
        checkoutSubmit();
      }
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

  let count = 1;

  const [qty, setQty] = useState(1);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const [product, setProduct] = useState(
    JSON.parse(sessionStorage.getItem("product"))
  );

  const url = app_config.backend_url;
  const del_charge = 0;

  const increment = () => {
    console.log("clicked!!");
    console.log(count);
    count++;
    setQty(qty + 1);
  };
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-8">
          <div class="card">
            <div class="card-header">Delivery Address</div>
            <div class="card-body">
              <h5 class="card-title">{currentUser.username}</h5>
              <p className="text-muted">{currentUser.email}</p>
              <TextField
                label="Installation Address"
                variant="outlined"
                className="mt-4 w-100"
                placeholder="Your Address"
                multiline
                rows={3}
              />

              <a href="#" class="btn btn-primary button">
                Delivery Here
              </a>
              <a href="" class="edit">
                Edit
              </a>
            </div>
          </div>

          <div class="card mt-5">
            <div class="card-header">Order Summary</div>
            <img class="imggg" src={url + "/images/" + product.image} alt="" />
            <div class="card-body card-b">
              <h5 class="card-title">{product.title}</h5>
              <p class="card-text">Rs. {product.price}</p>
              <h3 className="quantity">Quantity : {qty}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card">
            <div class="card-header">Price Details</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Price(1 item)<strong class="strong">Rs. {product.price}</strong>
              </li>
              <li class="list-group-item">
                Delivery Charges
                <strong class="strong">Rs. {del_charge}</strong>
              </li>
              <li class="list-group-item">
                Total Payable<strong class="strong">Rs. {product.price}</strong>
              </li>
            </ul>
            <div className="card-body">
              <form onSubmit={payMoney}>
                <CardElement className="card" options={CARD_OPTIONS} />

                <Button
                  disabled={isPaymentLoading}
                  className="mt-5 w-100"
                  variant="contained"
                  type="submit"
                >
                  {isPaymentLoading
                    ? "Loading..."
                    : `Pay ₹${product.price + del_charge}/-`}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
