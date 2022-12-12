import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Expertlogin = () => {
  const url = app_config.backend_url;
  const navigate = useNavigate();

  const loginForm = {
    email: "",
    password: "",
  };

  const loginSubmit = (formdata) => {
    console.log(formdata);

    fetch(url + "/expert/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success!!",
          text: "Successfully loggedin",
        });
        res.json().then((data) => {
          console.log(data);
          sessionStorage.setItem("expert", JSON.stringify(data));
          navigate("/expert/expertchat");
        });
      } else if (res.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Oops!!",
          text: "Login Failed",
        });
      }
    });
  };

  return (
    <div style={styles.container}>
      <div className="container">
        <div>
          <div className="row align-items-center justify-content-center h-100">
            <div className="col-md-4">
              <div className="expert-card">
              <div className="card">
                <div className="card-header">
                  <h1 className="mb-2">Expert Login</h1>
                </div>
                <div className="card-body">
                  <Formik initialValues={loginForm} onSubmit={loginSubmit}>
                    {({ values, handleChange, handleSubmit }) => (
                      <form onSubmit={handleSubmit}>
                        <div class="form-outline">
                          <div class="form-outline">
                            <input
                              type="email"
                              id="email"
                              value={values.email}
                              onChange={handleChange}
                              class="form-control"
                            />
                            <label class="form-label" for="typeEmail">
                              Email 
                            </label>
                          </div>
                        </div>
                        <div class="form-outline">
                          <input
                            type="text"
                            id="password"
                              value={values.password}
                              onChange={handleChange}
                            class="form-control"
                          />
                          <label class="form-label" for="typeText" type ={"password"}>
                            password
                          </label>
                        </div>
                        <a class="l-link" href="/main/resetpassword"/>

                        
                        <a class = "l-link" href="/main/resetpassword">

                          Forget password ? <br></br>
                        </a>
                        <a class="l-link" href="/main/expertsignup">
                          SignUp
                        </a>
                        <br></br>
                        <br></br>
                        <Button
                          type="submit"
                          variant="contained"
                          className="w-100"
                          color="error"
                        >
                          Submit
                        </Button>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
            </div>
            <div className="col-md-8">
              <div style={{ height: "100%", padding: "5rem" }}>
                <img
                  className="img-fluid"
                  alt=""
                  src="https://minutes.co/wp-content/uploads/2019/04/shutterstock_323897318.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: "#d3e9f7",
    height: "100vh",
  },
};

export default Expertlogin;
