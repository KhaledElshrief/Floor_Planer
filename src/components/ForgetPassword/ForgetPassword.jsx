import React, { useState } from "react";
import axios from "axios";
import joi from "joi";
import { useNavigate } from "react-router-dom";
import "./forgetPassword.css";

export default function ForgetPassword() {
  const [user, setUser] = useState({
    email: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [errorsList, setErrorsList] = useState([]);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  let goTologin = () => {
    navigate("/login");
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
      goTologin();

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
            <h4 className=" text-muted  text-center ">Forget Password Form</h4>
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
              <label htmlFor="email">Email</label>
              <input
                onChange={getInputValue}
                className="form-control my-2"
                name="email"
              />
            </div>

            <div className=" d-flex justify-content-center py-4 ">
              <button className="btn btn-info float-end py-3 px-5 ">
                {loading ? <i className="fas fa-spinner fa-spin"></i> : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
