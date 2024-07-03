import React, { useState } from "react";
import axios from "axios";
import joi from "joi";
import { useNavigate } from "react-router-dom";
import stsyels from "./login.module.css";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login({ saveUSerData }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [errorsList, setErrorsList] = useState([]);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  let goToHome = () => {
    navigate("/");
  };
  let goToRegister = () => {
    navigate("/register");
  };
  let goToForgetPassword = () => {
    navigate("/forgetPassword");
  };

  let submitFormData = async (e) => {
    e.preventDefault();

    let { data } = await axios.post(
      "https://grackle-notable-hardly.ngrok-free.app/api/login/",
      user
    );
    console.log(data);

    if (data) {
      console.log("done to home");
      localStorage.setItem("token", data.access);
      goToHome();

      // saveUSerData();
      setLoading(false);
    } else {
      setErrorMsg(data.message);
    }
  };

  let getInputValue = (e) => {
    let myUser = { ...user }; //1  deep copy
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };
  return (
    <div className="h-screen d-flex justify-content-center  align-items-center">
      <div className="text-center h-screen form_cont">
        <img
          src="https://res.cloudinary.com/daesz5k6b/image/upload/v1703109277/qq2rauho2rngbr3mw0e9.jpg"
          alt=""
          className=""
        />
        <div>
          <form className=" " onSubmit={submitFormData}>
            <h4 className=" text-muted  text-center ">Login Form</h4>
            {errorsList.map((error, index) => (
              <div
                key={index}
                className="alert alert-danger w-100  m-auto text-center p-2 my-2"
              >
                {error.message}
              </div>
            ))}

            {errorMsg ? (
              <div className="alert alert-danger m-auto  text-center p-2">
                {errorMsg}
              </div>
            ) : (
              ""
            )}
            <div className="form_input">
              <label htmlFor="username">Username</label>
              <input
                onChange={getInputValue}
                className="form-control my-2"
                name="username"
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <input
                onChange={getInputValue}
                type="password"
                className="form-control my-2"
                name="password"
              />
            </div>
            <div className=" d-flex justify-content-between py-4 ">
              <div>
                don't have an account ?{" "}
                <Link to="/register" onClick={goToRegister}>
                  Sign Up
                </Link>
              </div>
              <div>
                <Link to="/forgetPassword" onClick={goToForgetPassword}>
                  Forget Password ?
                </Link>
              </div>

              <button className="btn btn-info float-end p-3 px-4 rounded-xl font-bold">
                {loading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
