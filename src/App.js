import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavScrollExample from "./components/navBar/navbar";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import Cart from "./components/cart/cart";
import Favorite from "./components/favorite/favorite";
import Shop from "./components/shop/shop";
import About from "./components/about/about";
import ProductDetails from "./components/productDetails/productDetails";
import NotFound from "./components/notFound/notFound";
import Register from "./components/register/register";
import Login from "./components/login/login";
import { useState, useEffect } from "react";
import { AuthProvider } from "./authContext/authContext";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  // Check authentication status
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(userLoggedIn);
  }, []);

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          {/* Conditionally render Navbar */}
          {showNavbar && <NavScrollExample />}

          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              path="/favorite"
              element={
                <ProtectedRoute>
                  <Favorite />
                </ProtectedRoute>
              }
            />
            <Route
              path="/shop"
              element={
                <ProtectedRoute>
                  <Shop />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="/productDetails/:id"
              element={
                <ProtectedRoute>
                  <ProductDetails />
                </ProtectedRoute>
              }
            />

            {/* Routes without Navbar */}
            <Route
              path="/register"
              element={
                <Register
                  setShowNavbar={setShowNavbar}
                  setIsAuthenticated={setIsAuthenticated}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  setShowNavbar={setShowNavbar}
                  setIsAuthenticated={setIsAuthenticated}
                />
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Footer visible only when Navbar is shown */}
          {showNavbar && <Footer />}
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
