import { Formik } from "formik";
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import Swal from "sweetalert2";
import app_config from "../../config";
import { NavLink, useNavigate } from "react-router-dom";
import "../../stylesheets/addequip.css";


const AddEquipment = () => {
  const url = app_config.backend_url;
  const [image, setImage] = useState("");
  const [EquipmentFile, setEquipmentFile] = useState("");
    const navigate = useNavigate();


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
      values.image = image;
      values.myfile = EquipmentFile;
  
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
  const uploadimage = (event) => {
    const formdata = new FormData();
    formdata.append("myfile", event.target.files[0]);

    const reqOptions = {
      method: "POST",
      body: formdata,
    };

    fetch(url + "/util/uploadfile", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImage(event.target.files[0].name);
      });
  };

  const uploadfile = (event) => {
    const formdata = new FormData();
    formdata.append("myfile", event.target.files[0]);

    const reqOptions = {
      method: "POST",
      body: formdata,
    };

    fetch(url + "/util/createfile", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEquipmentFile(event.target.files[0].name);
      });

  };
  navigate("/main/browseEquipment");
  

  return (
    <div>
      {/* <h1>Add Equipment</h1> */}
      <div className="card cardss">
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
                  <input
              
              onChange={uploadfile}
              type="file"
              fullwidth
              className="form-control mt-4 mx-0"
              title="Select image"
            required/>
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
                                <TextField
                  className="mt-3 w-100"
                  label="Price"
                  variant="outlined"
                  id="price"
                  value={values.price}
                  onChange={handleChange}
                  // helperText={errors.email}
                  // error={Boolean(errors.email)}
                />
                <TextField
                  className="mt-3 w-100"
                  label="CreatedAt"
                  variant="outlined"
                  id="createdAt"
                  value={values.createdAt}
                  onChange={handleChange}
                  // helperText={errors.email}
                  // error={Boolean(errors.email)}
                />

                
<div class="d-flex justify-content-end pt-3">
               
               <button type="submit" class="btn btn-success btn-lg ms-2"
                    >Submit
                    <NavLink to="./main/browseEquipment"></NavLink>
                    </button>
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