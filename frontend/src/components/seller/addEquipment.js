import { Formik } from "formik";
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const AddEquipment = () => {
  const equipmentForm = {
    title: "",
    description: "",
    features: [],
    price: Number,
  };

  const userSubmit =()=>{}

  return (
    <div>
      <h1>Add Equipment</h1>
      <div className="card">
        <div className="card-header">
          <h3 className="mb-0">Add New Expert</h3>
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
                  label="Full Name"
                  variant="outlined"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  // helperText={errors.email}
                  // error={Boolean(errors.email)}
                />
                <TextField
                  className="mt-3 w-100"
                  label="Qualification"
                  variant="outlined"
                  id="qualification"
                  value={values.qualification}
                  onChange={handleChange}
                  // helperText={errors.email}
                  // error={Boolean(errors.email)}
                />
                <TextField
                  className="mt-3 w-100"
                  label="Overall Experience"
                  variant="outlined"
                  id="experience"
                  value={values.experience}
                  onChange={handleChange}
                  // helperText={errors.email}
                  // error={Boolean(errors.email)}
                />
                <TextField
                  className="mt-3 w-100"
                  label="Main Area of Expertise"
                  variant="outlined"
                  id="mainareaofexperience"
                  value={values.mainareaofexperience}
                  onChange={handleChange}
                  // helperText={errors.email}
                  // error={Boolean(errors.email)}
                />
                <TextField
                  className="mt-3 w-100"
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  // helperText={errors.password}
                  // error={Boolean(errors.password)}
                />
                <TextField
                  className="mt-3 w-100"
                  label="Password"
                  type="password"
                  variant="outlined"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  // helperText={errors.password}
                  // error={Boolean(errors.password)}
                />

                <Button type="submit" className="mt-3" variant="contained">
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddEquipment;
