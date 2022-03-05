
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./Navbar.module.css"






export default function Navbar() {


 
    return (
        <nav className={`navbar navbar-expand-lg    ${style.navbar}`}>
            <div className="container-fluid">
                <Link    className={`nav-link ${style.navbar_a}`} to="home"  > Home </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav w-100">
                        <Link className={`nav-link ${style.navbar_a}`} to="donor_registration"  >Donor Registration</Link>
                        <Link className={`nav-link ${style.navbar_a}`} to="send_request"  >Send Request</Link>
                        <Link className={`nav-link ${style.navbar_a}`} to="view_request"  >View Request</Link>
                        <Link className={`nav-link ${style.navbar_a}`} to="camps"  >Camps</Link>
                        <Link className={`nav-link ${style.navbar_a}`} to="login"  >Log In</Link>
                        <Link className={`nav-link ${style.navbar_a}`} to="search"  >Search</Link>
                        <Link className={`nav-link ${style.navbar_a}`} to="contact_us"  >Contact Us</Link>
                        <Link className={`nav-link ${style.navbar_a}`} to="about"  >About</Link>
                    </div>
                </div>
            </div>

        </nav>
    )
}
