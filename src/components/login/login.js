import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Import the Link component
import "./login.css";

function Login({ setShowNavbar, setIsAuthenticated }) {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setShowNavbar(false);
    return () => setShowNavbar(true);
  }, [setShowNavbar]);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      if (user) {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");
        navigate("/");
      } else setErrorMessage("Invalid email or password!");
    },
  });

  return (
    <div id="login">
      <div className="form-container">
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={formik.handleSubmit}>
          <input type="email" {...formik.getFieldProps("email")} />
          <input type="password" {...formik.getFieldProps("password")} />
          <button type="submit" className="btn">
            Login
          </button>
        </form>
        <div className="link">
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
