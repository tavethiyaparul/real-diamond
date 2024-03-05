import React from "react"
import image1 from "../images/about.png"

const About = () => {
    return (
        <>
            <section className="bg-light py-5">
                <div className="container">
                    <div className="row align-items-center py-5">
                        <div className="col-md-8 text-black ">
                            <h1 className="h1">About Us</h1>
                            <p>Welcome to Dharmiimpex.com, your premier destination for high-quality diamonds. We are passionate about providing exquisite diamonds that exceed your expectations.</p>
      <p>At DiamondSelling.com, we understand the importance of selecting the perfect diamond for your special occasion, whether it's an engagement, anniversary, or celebration of love. Our team of experts is dedicated to helping you find the ideal diamond that captures your unique style and sentiment.</p>
      <p>With our commitment to quality, craftsmanship, and customer satisfaction, we strive to make your diamond purchasing experience seamless and memorable. Browse our collection of stunning diamonds and discover the perfect symbol of your enduring love and commitment.</p>
                        </div>
                        <div className="col-md-4">
                            <img className="banner-image" src={image1} alt="About Hero" />
                        </div>
                    </div>
                </div>
            </section>
            

            {/* <section className="container py-5">
                <div className="row text-center pt-5 pb-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Our Services</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center">
                                <i className="fa fa-truck fa-lg"></i>
                            </div>
                            <h2 className="h5 mt-4 text-center">Delivery Services</h2>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center">
                                <i className="fas fa-exchange-alt"></i>
                            </div>
                            <h2 className="h5 mt-4 text-center">Shipping & Return</h2>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center">
                                <i className="fa fa-percent"></i>
                            </div>
                            <h2 className="h5 mt-4 text-center">Promotion</h2>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center">
                                <i className="fa fa-user"></i>
                            </div>
                            <h2 className="h5 mt-4 text-center">24 Hours Service</h2>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <div className="pt-30">
                <div className="container pt-5">
                    <div className="row">
                        <div className="offset-xl-1 col-lg-8">
                            <div className="about-details-cap mb-50">
                                <h4>Our Mission</h4>
                                <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</p>
                                <p> Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
                            </div>
                            <div className="about-details-cap mb-50">
                                <h4>Our Vision</h4>
                                <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</p>
                                <p> Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default About
