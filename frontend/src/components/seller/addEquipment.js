import { Formik } from "formik";
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import Swal from "sweetalert2";
import app_config from "../../config";
import { NavLink, useNavigate } from "react-router-dom";


const AddEquipment = () => {
  const url = app_config.api_url;

  const equipmentForm = {
    title: "",
    description: "",
    image: "",
    features: "",
    price: "",
    createdAt: "",
  };
  const userSubmit = (values) => {
    console.log(values);


    const reqOp = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    fetch(url + "/equipment/add", reqOp)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.message == "success") {
          Swal.fire({
            icon: "success",
            title: "Added Successfully!!",
          });
        }
      });
  };


  

  return (
    <div>
      {/* <h1>Add Equipment</h1> */}
      <div className="card">
        <div className="card-header">
          <h3 className="mb-0">Add Equipment</h3>
        </div>
        <div className="card-body">
          <Formik
            initialValues={equipmentForm}
            onSubmit={userSubmit}
            // validationSchema={myvalidation}
          >
            {({ values, handleSubmit, handleChange, errors }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  className="mt-3 w-100"
                  label="Title"
                  variant="outlined"
                  id="title"
                  value={values.title}
                  onChange={handleChange}
                  // helperText={errors.email}
                  // error={Boolean(errors.email)}
                />
                <TextField
                  className="mt-3 w-100"
                  label="Description"
                  variant="outlined"
                  id="description"
                  value={values.description}
                  onChange={handleChange}
                  // helperText={errors.email}
                  // error={Boolean(errors.email)}
                />
  <TextField
                  className="mt-3 w-100"
                  label="Features"
                  variant="outlined"
                  id="features"
                  value={values.features}
                  onChange={handleChange}
                  // helperText={errors.email}
                  // error={Boolean(errors.email)}
                />
<div class="d-flex justify-content-end pt-3">
               
               <button type="submit" class="btn btn-success btn-lg ms-2"
                    >Submit
                    <NavLink to="../main/browseEquipment"></NavLink></button>
               </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddEquipment;