import React,{useState} from "react";
import './NavbarStyles.css'
import {FaBars,FaTimes} from 'react-icons/fa'
import { SiDatabricks } from 'react-icons/si'

const Navbar = () => {
    const[nav,setNav]= useState(false)
    const handleNav = ()=>setNav(!nav);
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <SiDatabricks className="icon" />
                    <h1>Secured</h1>
                </div>
                <ul className={nav==true?'nav-menu active':'nav-menu'}>
                    <li>Home</li>
                    <li>Recovery</li>
                    <li>Cloud</li>
                    <li>Contact</li>
                    <button>Sign in</button>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav?(<FaBars className="icon"/>):(<FaTimes className="icon"/>)}
                    

                </div>
            </div>
        </div>
    )
}
export default Navbar