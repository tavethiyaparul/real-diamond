import React from "react"
import logo from "../images/logo-white.svg"
const Footer = () => {
    return (
        <>
            <footer className="bg-dark" id="tempaltemo_footer">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-md-4 pt-5 ">
                        <img className="w-50 h-30" src={logo}></img>
                            {/* <h2 className="h2 border-bottom pb-3 border-light logo">Dharmi Impex</h2> */}
                            <ul className="list-unstyled text-light footer-link-list">
                                <li>
                                    <i className="fas fa-map-marker-alt fa-fw"></i>
                                    21, Sonal Park Society, Pani Gam, Katargam, Surat
                                </li>
                                <li>
                                    <i className="fa fa-phone fa-fw"></i>
                                    <a className="text-decoration-none" href="tel:010-020-0340">
                                    +91 99782 27111
                                    </a>
                                </li>
                                <li>
                                    <i className="fa fa-envelope fa-fw"></i>
                                    <a className="text-decoration-none" href="mailto:info@company.com">
                                    jigneshtagadiya@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-light border-bottom pb-3 border-light">Useful Links</h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li>
                                    <a className="text-decoration-none" href="/">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a className="text-decoration-none" href="/about">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a className="text-decoration-none" href="/diamond">
                                        Diamond
                                    </a>
                                </li>
                                <li>
                                    <a className="text-decoration-none" href="/contact">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-light border-bottom pb-3 border-light">Follow Us</h2>
                            <ul className="list-inline text-left footer-icons">
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank" href="https://www.facebook.com/people/Dharmi-Impex/100075794744698">
                                        <i className="fab fa-facebook-f fa-lg fa-fw"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/jigneshkumar_tagadiya/">
                                        <i className="fab fa-instagram fa-lg fa-fw"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-100 bg-black py-0">
                    <div class="container">
                        <div class="row pt-2">
                            <div class="col-12">
                                <p class="text-left text-light text-center">
                                    Copyright &copy; 2024 Dharmi Impex Limited
                                    {/* | Designed by <a rel="sponsored" href="https://templatemo.com" target="_blank">TemplateMo</a> */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer
