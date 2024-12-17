import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { BiSearch } from "react-icons/bi";
import { IoBagOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import {NavLink} from 'react-router-dom'
import {useSelector, useDispatch } from "react-redux";
import {changemode} from '../store/slices/modeSlice'
import { useEffect } from 'react';

function NavScrollExample() {
    //function changemode(){document.body.classList.toggle("dark-themes")}
    const mode= useSelector((state)=>state.Theme.mode)
    console.log(mode);
    useEffect(()=>{
        document.body.className = mode;
    },[mode])
    
    const dispatch=useDispatch()
    const change=()=>{
        dispatch(changemode());
    }
    return (
    <Navbar expand="lg" className="navbar">
        <Container>
            <Navbar.Brand href="#" className='brand'>E-commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto my-2 my-lg-0 d-flex align-items-center" style={{ maxHeight: '100px' }} navbarScroll >
                    <Nav.Link className="nav-link" href="#action1">Home</Nav.Link>
                    <Nav.Link className="nav-link" href="#action2">Shop</Nav.Link>
                    <Nav.Link className="nav-link" href="#action3">Kids</Nav.Link>
                    <Nav.Link className="nav-link" href="#action4">Women</Nav.Link>
                    <Nav.Link className="nav-link" href="#action5">Men</Nav.Link>
                    <Nav.Link className="nav-link" href="#action6">About</Nav.Link>
                    <Nav.Link className="nav-link" href="#action7">Contact</Nav.Link>
                    <NavLink className="nav-link favorite " to="/favorite"><FaRegHeart /></NavLink>
                    <NavLink className="nav-link cart " to="/cart"><IoBagOutline /></NavLink>
                    <BiSearch className='nav-link search '/>
                    { mode === "light-theme" ? 
                    <FontAwesomeIcon className="moon ms-xl-5 ms-lg-5" id="change" onClick={change} icon={faMoon} /> :
                    <FontAwesomeIcon className="sun ms-xl-5 ms-lg-5" onClick={change} icon={faSun} />
                    }
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavScrollExample;