import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import img from "../img/burgerback.jpg";

export default function LogIn() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://foodiee-mern.vercel.app/api/loginuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials");
    }
    if (json.success) {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=826&t=st=1704454064~exp=1704454664~hmac=b446ccafb92b94e5fe192bc037766d9a86d7bb4e0dd227bd6031dcb154f63a0e)",
          backgroundImage: `url(${img})`,
          height: "77vh",
        }}
      >
        <div className="container">
          <form
            className=" w-75
            m-auto p-5  border border-white   rounded "
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control border border-white"
                name="email"
                value={credentials.email}
                onChange={onChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label ">
                Password
              </label>
              <input
                type="password"
                className="form-control border border-white"
                name="password"
                value={credentials.password}
                onChange={onChange}
              />
            </div>

            <button
              type="submit"
              className="m-3 btn btn-success border border-white"
            >
              Submit
            </button>
            <Link
              to="/createuser"
              className="m-3 btn btn-danger border border-white"
            >
              Create a user
            </Link>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
