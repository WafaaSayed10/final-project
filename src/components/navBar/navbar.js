import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { BiSearch } from "react-icons/bi";
import { IoBagOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changemode } from "../../store/slices/modeSlice";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function NavScrollExample() {
  //function changemode(){document.body.classList.toggle("dark-themes")}
  const mode = useSelector((state) => state.Theme.mode);
  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  const dispatch = useDispatch();
  const change = () => {
    dispatch(changemode());
  };
  const favorites = useSelector((state)=>state.Favorite.favorites)
  const cart = useSelector((state)=>state.cart.items)
  
  const [display, setDisplay] = useState('closeSearch');
  
  function openSearchDiv(){
    setDisplay("openSearch")
  }
  function closeSearch(){
    setDisplay("closeSearch")
  }

  const [searchValue, setSearchValue] = useState('');
  function value(e){
    setSearchValue(e.target.value)
  }
  
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <NavLink to="/" className="brand">
          Elegant
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 d-flex align-items-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/shop">
              Shop
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
            <NavLink className="nav-link favorite " to="/favorite">
              {favorites.length > 0 ? <FaHeart /> : <FaRegHeart />}
            </NavLink>
            <NavLink className="nav-link cart fs-4" to="/cart">
              {cart.length > 0 ? (
                <span className="notification text-light rounded-circle fw-light d-flex justify-content-center align-items-center">
                  {cart.length}
                </span>
              ) : (
                <></>
              )}

              <IoBagOutline />
            </NavLink>
            <BiSearch className="nav-link search" onClick={openSearchDiv} />
            {mode === "light-theme" ? (
              <FontAwesomeIcon
                className="moon ms-xl-5 ms-lg-5"
                id="change"
                onClick={change}
                icon={faMoon}
              />
            ) : (
              <FontAwesomeIcon
                className="sun ms-xl-5 ms-lg-5"
                onClick={change}
                icon={faSun}
              />
            )}
            <NavLink className="nav-link ps-5" to="/login">
              Logout
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="searchDiv" id={display}>
        <IoMdClose className="closeIcon" onClick={closeSearch}/>
        <div className="searchInp">
          <input type="text" placeholder="Search..." value={searchValue} onChange={(e)=>value(e)}/>
          <BiSearch className="searchIcon " />
        </div>
      </div>
    </Navbar>
  );
}

export default NavScrollExample;
