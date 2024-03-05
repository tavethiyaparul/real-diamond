import React from "react"
import { useNavigate } from "react-router-dom"

const Error = () => {
    const navigate = useNavigate()
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>Error</h1>
                <button style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                    Back To Home
                </button>
            </div>
        </>
    )
}

export default Error

{
    /* <footer class="footer-widget-area">
<div class="footer-top section-padding" style={{ borderTop: "2px solid #385264" }}>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-6">
                <div class="widget-item">
                    <div class="widget-title">
                        <div class="widget-logo">
                            <a href="https://www.diyamimpex.com">
                                <img src="https://www.diyamimpex.com/public/Assets/flogo.png" alt="Diyam Impex Logo" style={{ height: "101px" }} />
                            </a>
                        </div>
                    </div>
                    <div class="widget-body">
                        <p>We have gone from strength to strength over the years, having expanded from our core business of Lab Grown Diamond manufacturing to Exports.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="widget-item">
                    <h6 class="widget-title">Contact Us</h6>
                    <div class="widget-body">
                        <address class="contact-block">
                            <ul>
                                <li>
                                    <i class="fa fa-home"></i>309, 3rd Floor Royal Arcade, Nr. Jeevan-Dhara Hotel, Varachha Road, Surat-395006, Gujarat, India
                                </li>
                                <li>
                                    <i class="fa fa-envelope-o"></i>
                                    <a href="mailto:diyamimpex@gmail.com">diyamimpex@gmail.com</a>
                                </li>
                                <li>
                                    <i class="fa fa-phone"></i> <a href="tel:+91 98251 07116">+91 98251 07116</a>
                                </li>
                            </ul>
                        </address>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="widget-item">
                    <h6 class="widget-title">Usefull Links</h6>
                    <div class="widget-body">
                        <ul class="info-list">
                            <li>
                                <a href="https://www.diyamimpex.com">Home</a>
                            </li>
                            <li></li>
                            <li>
                                <a href="https://www.diyamimpex.com/lab-grown-diamond">Lab Grown Diamond</a>
                            </li>
                            <li></li>
                            <li>
                                <a href="https://www.diyamimpex.com/aboutus">About us</a>
                            </li>
                            <li></li>
                            <li>
                                <a href="https://www.diyamimpex.com/contactus">Contact us</a>
                            </li>
                            <li></li>
                            <li>
                                <a href="https://www.diyamimpex.com/enquiry">Enquiry Now</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="widget-item">
                    <h6 class="widget-title">Follow Us</h6>
                    <div class="widget-body social-link">
                        <a href="https://www.facebook.com/diyamimpexLGD/" target="_blank">
                            <i class="fa fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/diyamimpex" target="_blank">
                            <i class="fa fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/diyamimpex/" target="_blank">
                            <i class="fa fa-linkedin"></i>
                        </a>
                        <a href="https://twitter.com/DiyamImpex" target="_blank">
                            <i class="fa fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="footer-bottom" style={{ background: "#385264", color: "white" }}>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="copyright-text text-center">
                    <p>
                        © 2021 <a href="https://www.diyamimpex.com">Diyam Impex</a>. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div> */
}

{
    /* <a class="e_img" href="https://www.diyamimpex.com/enquiry">
    <i class="fa fa-envelope my-float"></i>
</a>

<a class="whats-app" href="https://api.whatsapp.com/send?phone=+91 98251 07116&amp;text=Hello Diyam Impex, I'm interested to buying a Diamond.&amp;source=&amp;data=&amp;app_absent=" target="_blank">
    <i class="fa fa-whatsapp" style={{ fontSize: "37px", marginTop: "13px" }}></i>
</a>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: "621px" }}>
        <div class="modal-content">
            <div class="modal-header" style={{ padding: "12px 10px", display: "block", textAlign: "center" }}>
                <div class=" text-center">
                    <a href="https://www.diyamimpex.com">
                        <img style={{ height: "71px" }} src="https://www.diyamimpex.com/public/Assets/image/logo.png" alt="Diyam Impex" />
                    </a>
                </div>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <h6>Welcome Sir,</h6>
                <br />
                <p> We are a professional manufacturer of 'CVD &amp; HPHT LAB GROWN DIAMOND'. Available in All sizes. </p>
                <p>
                    <span style={{ fontWeight: "600" }}>Color : &nbsp;&nbsp;</span> D-F / G-H / I-J / K-L / M-N
                </p>
                <p>
                    <span style={{ fontWeight: "600" }}>Quality : </span> VVS / VS / SI
                </p>
                <p>Hope that our company's diamonds will help to grow your business. We will provide reasonable prices diamonds to customers.</p>
                <p>If you are looking for CVD &amp; HPHT Lab Grown Diamonds then contact to our company.</p>
                <p>Thank You.</p>
                <div>
                    <h5 style={{ textAlign: "center", paddingBottom: "5px" }}>----- Enquiry Now -----</h5>
                </div>
                <div style="text-align: center;">
                    <span style="margin-right: 5px;">
                        <a href="https://www.diyamimpex.com/enquiry">
                            <i class="fa fa-envelope w_img" style={{ backgroundColor: "#DD5145", fontSize: "26px", paddingTop: "12px" }}></i>
                        </a>
                    </span>
                    <span>
                        <a href="https://api.whatsapp.com/send?phone=+91 98251 07116&amp;text=Hello Diyam Impex, I'm interested to buying a Diamond.&amp;source=&amp;data=&amp;app_absent=" target="_blank">
                            <i class="fa fa-whatsapp w_img" style={{ paddingTop: "9px", marginTop: "0px", paddingLeft: "2px", position: "relative", top: "4px" }}></i>
                        </a>
                    </span>
                </div>
            </div>
            <div class="modal-footer" style={{ padding: "7px" }}>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" style={{ padding: "7px", background: "#6666", color: "white" }}>
                    Close
                </button>
            </div>
        </div>
    </div>
</div> */
}
{
    /* </footer> */
}
