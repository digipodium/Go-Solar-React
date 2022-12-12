import { Button, Container, TextField } from "@mui/material";
import { Formik } from "formik";
import React, { useEffect, useRef } from "react";
import * as Yup from "yup";
import app_config from "../../config";
import Swal from "sweetalert2";
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";

const Signup = ({}) => {
  let screen = useRef(null);
  let body = useRef(null);

  useEffect(() => {
    var tl = new TimelineMax();
    tl.to(screen, {
      duration: 1.2,
      width: "100%",
      left: "0%",
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 1,
      left: "100%",
      ease: Power3.easeInOut,
      delay: 0.3,
    });
    tl.set(screen, { left: "-100%" });
    TweenMax.to(body, 0.3, {
      css: {
        opacity: "1",
        pointerEvents: "auto",
        ease: Power4.easeInOut,
      },
    }).delay(2);
    // TweenMax.from(body, 1, {
    //   css: {
    //     opacity: "0",
    //     pointerEvents: "none",
    //   },
    // });
    tl.from(body, {opacity : 0})
  });

  const url = app_config.backend_url;
  const userForm = {
    email: "",
    password: "",
    username: "",
    age: 0,
  };
  const userSubmit = (formdata) => {
    console.log(formdata);

    fetch(url + "/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Registered Successfully",
        });
      });
  };

  //   3. Create Formik Component inside JSX

  //   4. Create Validation Schema
  const myvalidation = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Enter Email"),
    password: Yup.string().min(3, "Too Short!!").required("Password Required"),
  });

  return (
    <section className="">
      <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)}></div>
      </div>
      <div
        className="px-4 py-6 px-md-5 text-center text-lg-start"
        style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
      />
      <div data-barba="container" className="container">
        <div ref={(el) => (body = el)} className="row gx-lg-5 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="my-5 display-3 fw-bold ls-tight">
              <span className="text-primary">Signup Form</span>
            </h1>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="card">
              <div className="card-body py-5 px-md-5">
                <Formik initialValues={userForm} onSubmit={userSubmit}>
                  {({ values, handleSubmit, handleChange, errors }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <TextField
                            className="mt-3"
                            label="Email Address"
                            variant="outlined"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <TextField
                            className="mt-3"
                            label="Password"
                            type="password"
                            variant="outlined"
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <TextField
                            className="mt-3"
                            label="Username"
                            type="text"
                            variant="outlined"
                            id="username"
                            value={values.username}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <TextField
                            className="mt-3"
                            label="Age"
                            type="number"
                            variant="outlined"
                            id="age"
                            value={values.age}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-4">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example33"
                          checked
                        />
                        <label
                          className="form-check-label"
                          for="form2Example33"
                        >
                          Subscribe to our newsletter
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                      >
                        Sign up
                      </button>
                      <a href="/main/login">Login Here</a>

                      <div className="text-center">
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <a href="https://www.fb.com" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <a href="https://www.google.com" target="_blank">
                            <i className="fab fa-google"></i>
                          </a>
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <a href="https://www.github.com" target="_blank">
                            <i className="fab fa-github"></i>
                          </a>
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Signup;
