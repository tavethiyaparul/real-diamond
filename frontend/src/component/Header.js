import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../index.css"
import { makeApiCall } from "../common/MakeApicall"
import logo from "../images/logo-new.svg"

const Header = () => {
    const navigate = useNavigate()

    const logout = async () => {
        await makeApiCall("get", "/user/logout", "", "raw")
            .then((res) => {
                navigate("/")
            })
            .catch((error) => {
                console.log("error", error)
            })
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block " id="templatemo_nav_top">
                <div className="container text-light">
                    <div className="w-100 d-flex justify-content-between">
                        <div>
                            <i className="fa fa-envelope mx-2"></i>
                            <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:jigneshtagadiya@gmail.com">
                             jigneshtagadiya@gmail.com
                            </a>
                            <i className="fa fa-phone mx-2"></i>
                            <a className="navbar-sm-brand text-light text-decoration-none" href="tel:+91 9782 27111">
                                +91 99782 27111
                            </a>
                        </div>
                        <div>
                            <a className="text-light" href="https://www.facebook.com/people/Dharmi-Impex/100075794744698/" target="_blank" rel="sponsored">
                                <i className="fab fa-facebook-f fa-sm fa-fw me-2"></i>
                            </a>
                            <a className="text-light" href="https://www.instagram.com/jigneshkumar_tagadiya/" target="_blank">
                                <i className="fab fa-instagram fa-sm fa-fw me-2"></i>
                            </a>
                           
                        </div>
                    </div>
                </div>
            </nav>

            <nav className="navbar navbar-expand-lg navbar-light shadow sticky-top">
                <div className="container d-flex justify-content-between align-items-center">
                    {/* <a className="navbar-brand logo h2 align-self-center" href="index.html">
                        Dharmiimpex
                    </a> */}
                    <img className="w-45 h-20" src={logo}></img>

                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/diamond">
                                        Diamond
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar align-self-center d-flex">
                            {/* <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..."></input>
                                    <div className="input-group-text">
                                        <i className="fa fa-fw fa-search"></i>
                                    </div>
                                </div>
                            </div> */}
                            {/* <a className="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                                <i className="fa fa-fw fa-search text-dark mr-2"></i>
                            </a>
                            <a className="nav-icon position-relative text-decoration-none" href="#">
                                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                            </a> */}
                            {/* <a className="nav-icon position-relative text-decoration-none" href="/login">
                                <i className="fa fa-fw fa-user text-dark mr-3" data-bs-toggle="popover" title="User Information" data-bs-content="This is where you can display user information"></i> */}
                            {/* <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span> */}
                            {/* </a> */}

                            <i class="fa fa-fw fa-user text-dark" data-bs-toggle="dropdown" aria-expanded="false"></i>
                            <ul class="dropdown-menu p-0 mr-0 ">
                                <li>
                                    <a class="dropdown-item " href="/login">
                                        Sign In
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/signup">
                                        Sign Up
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" onClick={() => logout()}>
                                        Sign Out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
