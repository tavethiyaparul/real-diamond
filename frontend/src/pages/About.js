import React from "react"
import image1 from "../images/about.jpeg"

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
        </>
    )
}

export default About
