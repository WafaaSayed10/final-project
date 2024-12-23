import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./login.css";

function Login({ setShowNavbar, setIsAuthenticated }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); // State to toggle between Login and Register form
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

      // If registering a new user
      if (isRegistering) {
        const userExists = users.find((user) => user.email === values.email);
        if (userExists) {
          setErrorMessage("User already registered!");
        } else {
          users.push({ email: values.email, password: values.password });
          localStorage.setItem("users", JSON.stringify(users));
          setErrorMessage("Registration Successful!");
          setIsAuthenticated(true); // Mark user as authenticated
          localStorage.setItem("isAuthenticated", "true");
          setTimeout(() => navigate("/"), 1500); // Redirect after success
        }
      } else {
        // If logging in
        const user = users.find(
          (user) =>
            user.email === values.email && user.password === values.password
        );
        if (user) {
          setIsAuthenticated(true);
          localStorage.setItem("isAuthenticated", "true");
          navigate("/");
        } else {
          setErrorMessage("Invalid email or password!");
        }
      }
    },
  });

  return (
    <div id="login">
      <div className="form-container">
        <h2>{isRegistering ? "Register" : "Login"}</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
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

          {isRegistering && (
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
          )}
          <button type="submit" className="btn">
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>

        <div className="link">
          <p>
            {isRegistering ? (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => setIsRegistering(false)}
                  className="link-text"
                >
                  Login here
                </span>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <Link to={"/register"} className="link-text">
                  Register here
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
