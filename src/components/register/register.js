import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

function Register({ setShowNavbar, setIsAuthenticated }) {
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setShowNavbar(false);
    return () => setShowNavbar(true);
  }, [setShowNavbar]);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const userExists = users.find((user) => user.email === values.email);

      if (userExists) {
        setSuccessMessage("User already registered!");
      } else {
        users.push({ email: values.email, password: values.password });
        localStorage.setItem("users", JSON.stringify(users));
        setSuccessMessage("Registration Successful!");

        setIsAuthenticated(true); // Mark user as authenticated
        localStorage.setItem("isAuthenticated", "true");
        setTimeout(() => navigate("/"), 1500);
      }
    },
  });

  return (
    <div id="register">
      <div className="form-container">
        <h2>Register</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={formik.handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            {...formik.getFieldProps("email")}
            className={
              formik.touched.email && formik.errors.email ? "input-error" : ""
            }
          />
          {formik.touched.email && formik.errors.email && (
            <p className="error">{formik.errors.email}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            {...formik.getFieldProps("password")}
            className={
              formik.touched.password && formik.errors.password
                ? "input-error"
                : ""
            }
          />
          {formik.touched.password && formik.errors.password && (
            <p className="error">{formik.errors.password}</p>
          )}

          <input
            type="password"
            placeholder="Confirm Password"
            {...formik.getFieldProps("confirmPassword")}
            className={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? "input-error"
                : ""
            }
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="error">{formik.errors.confirmPassword}</p>
          )}

          <button type="submit" className="btn">
            Register
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
