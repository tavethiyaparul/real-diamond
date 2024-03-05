import image1 from "../images/8989.jpg"
import image2 from "../images/898989.jpg"
import image3 from "../images/71.png"
import v1 from "../images/video/v1.mp4"
import v2 from "../images/video/v5.mp4"
import v3 from "../images/video/v6.mp4"
import s1 from "../images/s111.png"
import s2 from "../images/s11.png"
import process from "../images/process1.webp"
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

function CarouselList() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    }

    const all = [

        { title: "Pear Shape", imageSrc: "https://www.diyamimpex.com/public/Assets/Admin/img/dshape/Diyam_Pear_Shape_Diamond.jpg" },
        { title: "Emerald Shape", imageSrc: "https://www.diyamimpex.com/public/Assets/Admin/img/dshape/Diyam_Emerald_Shape_Diamond.jpg" },
        { title: "Heart Shape", imageSrc: "https://www.diyamimpex.com/public/Assets/Admin/img/dshape/Diyam_Heart_Shape_Diamond.jpg" },
        { title: "Round Shape", imageSrc: "https://www.diyamimpex.com/public/Assets/Admin/img/dshape/Diyam_Round_Shape_Diamond.jpg" },
        { title: "Marquies Shape", imageSrc: "https://www.diyamimpex.com/public/Assets/Admin/img/dshape/Diyam_Marquies_Shape_Diamond.jpg" },

    ]
    return (
        <>
            <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
                {/* <ol className="carousel-indicators">
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
                </ol> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid banner-image" src={image3} alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left align-self-center">
                                        <h1 className="h1">
                                            <b>Polish Diamond</b>
                                        </h1>
                                        {/* <h3 className="h2">Tiny and Perfect eCommerce Template</h3> */}
                                        <p>
                                            Polish refers to the degree of smoothness of each facet of a diamond as measured by a gemologist. When a diamond is cut and polished, microscopic surface defects may be created by the polishing wheel as it drags tiny dislodged crystals across the diamond's surface. Depending on the severity, these defects may disrupt light patterns as the light rays enter and exit the diamond.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid banner-image" src={image2} alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h1 className="h1"><b>Rough Diamond</b></h1>
                                        {/* <h3 className="h2">Aliquip ex ea commodo consequat</h3> */}
                                        <p>
                                            Rough Diamonds refer to diamonds which are still in their natural state after being removed from the belly of the earth. This is the stage before they are actually cut or polished in order to create the marvelous diamonds found in all of our unique jewelry.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid " src={image3} alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h1 className="h1"><b>Grading Diamond</b></h1>
                                        {/* <h3 className="h2">Ullamco laboris nisi ut </h3> */}
                                        <p>Diamond cut is the single most important of the 4Cs when it comes to the physical beauty of a diamond. Why? Because a diamond's cut determines how much it sparkles. The number of facets, the angle of the facets, and the symmetry and alignment of the shape will affect how the diamond returns light.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
                    <i className="fas fa-chevron-left"></i>
                </a>
                <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
                    <i className="fas fa-chevron-right"></i>
                </a>
            </div>



            <section >
                <div class="container">
                    <div class="row text-center py-3">
                        <div class="col-lg-6 m-auto">
                            <h1 class="h1">Diamond Process </h1>
                            <p>Our diamond process model consists of the following steps:</p>
                        </div>
                    </div>
                    <div class="row">

                        <div className="container">
                            <img className="p-4" src={process} />
                        </div>

                    </div>
                </div>
            </section>

            {/* <div className="container">
                <h1 className="text-center vision-title my-4 p-3">Video Gallery</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <div className="col">
                        <div className="card">
                            <video className="video-thumbnail " controls style={{ height: "400px" }}>
                                <source src={v1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <video className="video-thumbnail" controls style={{ height: "400px" }}>
                                <source src={v2} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <video className="video-thumbnail" controls style={{ height: "400px" }}>
                                <source src={v3} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <section style={{ backgroundColor: "#dee2e6" }}>
                <div class="container">
                    <div class="row text-center py-3">
                        <div class="col-lg-6 m-auto">
                            <h1 class="h1">Diamond Process</h1>
                            <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-4 mb-4">
                            <div class="card h-100">
                                <video className="video-thumbnail " controls hide-control="true"  style={{ height: "400px" }}>
                                    <source src={v1} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                              
                                <div class="card-body">
                                   
                                    <a href="shop-single.html" class="h2 text-decoration-none text-dark">
                                        Gym Weight
                                    </a>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.</p>
                                    <p class="text-muted">Reviews (24)</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 mb-4">
                            <div class="card h-100">
                                <video className="video-thumbnail " controls hide-control="true"  style={{ height: "400px" }}>
                                    <source src={v2} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div class="card-body">
                                   
                                    <a href="shop-single.html" class="h2 text-decoration-none text-dark">
                                        Cloud Nike Shoes
                                    </a>
                                    <p class="card-text">Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.</p>
                                    <p class="text-muted">Reviews (48)</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 mb-4">
                            <div class="card h-100">
                              
                                <video className="video-thumbnail " controls style={{ height: "400px" }}>
                                    <source src={v3} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div class="card-body">
                                   
                                    <a href="shop-single.html" class="h2 text-decoration-none text-dark">
                                        Summer Addides Shoes
                                    </a>
                                    <p class="card-text">Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.</p>
                                    <p class="text-muted">Reviews (74)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section class="vision-section text-center">
                <div className="container">
                    <h2 className="vision-title">Our Vision</h2>
                    <p className="vision-statement">At Diamonds Direct, our vision is to provide discerning customers with an unparalleled experience in purchasing the finest quality diamonds.</p>
                    <p className="vision-statement">We strive to uphold the highest standards of integrity, transparency, and craftsmanship, ensuring that every diamond we sell is ethically sourced and meticulously inspected for quality.</p>
                    <p className="vision-statement">Our commitment to excellence extends beyond the sale, as we aim to build lasting relationships with our customers based on trust, reliability, and exceptional service.</p>
                </div>
            </section>

            {/* <section class="testimonial-section text-center">
                <div class="container">
                    <h2 className="vision-title">Testimonials </h2>
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6">
                            <div class="testimonial-card">
                                <img src="https://via.placeholder.com/100" alt="Avatar" class="testimonial-avatar" />
                                <p class="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consequat tortor."</p>
                                <p class="testimonial-name">John Doe</p>
                                <p class="testimonial-role">CEO, Company Name</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="testimonial-card">
                                <img src="https://via.placeholder.com/100" alt="Avatar" class="testimonial-avatar" />
                                <p class="testimonial-text">"Sed tincidunt velit eu lorem vestibulum, nec faucibus mi imperdiet. Proin non felis sed nunc cursus ultricies."</p>
                                <p class="testimonial-name">Jane Smith</p>
                                <p class="testimonial-role">Designer</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="testimonial-card">
                                <img src="https://via.placeholder.com/100" alt="Avatar" class="testimonial-avatar" />
                                <p class="testimonial-text">"Vivamus eu arcu id ipsum pharetra vehicula. Nulla lacinia auctor tortor ut consequat."</p>
                                <p class="testimonial-name">Mike Johnson</p>
                                <p class="testimonial-role">Marketing Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <div class="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div class="video-container">
                            <video controls autoPlay muted hide-control="true">
                                <source src={v2} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="content-container">
                        <h2 className="pb-5">Grading</h2>
                            <p>Few things in nature are absolutely perfect. This is as true of diamonds as anything else. Diamonds have internal features, called inclusions, and surface irregularities, called blemishes. Together, they’re called clarity characteristics. Clarity is the relative absence of inclusions and blemishes.</p>
                            <p>Among other things, blemishes include scratches and nicks on a diamond’s surface. Inclusions are generally on the inside, and some might break the surface of the stone. Sometimes, tiny diamond or other mineral crystals are trapped inside a diamond when it forms. Depending on where they’re located, they might remain after the stone has been cut and polished, and they can affect a diamond’s appearance.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div class="content-container">
                            <h2 className="pb-5">Clarity</h2>
                            <p>Few things in nature are absolutely perfect. This is as true of diamonds as anything else. Diamonds have internal features, called inclusions, and surface irregularities, called blemishes. Together, they’re called clarity characteristics. Clarity is the relative absence of inclusions and blemishes.</p>
                            <p>Among other things, blemishes include scratches and nicks on a diamond’s surface. Inclusions are generally on the inside, and some might break the surface of the stone. Sometimes, tiny diamond or other mineral crystals are trapped inside a diamond when it forms. Depending on where they’re located, they might remain after the stone has been cut and polished, and they can affect a diamond’s appearance.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="video-container">
                            <video controls autoPlay muted hide-control="true">
                                <source src={v3} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            <section className="product-banner-statistics">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <Carousel
                                additionalTransfrom={0}
                                arrows
                                autoPlaySpeed={3000}
                                centerMode={false}
                                className=""
                                containerClass=""
                                dotListClass=""
                                draggable
                                focusOnSelect={false}
                                infinite
                                itemClass=""
                                keyBoardControl
                                minimumTouchDrag={80}
                                partialVisible={false}
                                pauseOnHover
                                renderArrowsWhenDisabled={false}
                                renderButtonGroupOutside={false}
                                renderDotsOutside={false}
                                responsive={{
                                    desktop: {
                                        breakpoint: {
                                            max: 3000,
                                            min: 1024,
                                        },
                                        items: 5,
                                        partialVisibilityGutter: 40,
                                    },
                                    mobile: {
                                        breakpoint: {
                                            max: 464,
                                            min: 0,
                                        },
                                        items: 1,
                                        partialVisibilityGutter: 30,
                                    },
                                    tablet: {
                                        breakpoint: {
                                            max: 1024,
                                            min: 464,
                                        },
                                        items: 2,
                                        partialVisibilityGutter: 30,
                                    },
                                }}
                                rewind={false}
                                rewindWithAnimation={false}
                                rtl={false}
                                shouldResetAutoplay
                                showDots={false}
                                sliderClass=""
                                slidesToSlide={1}
                                swipeable
                            >
                                {all.map((e, index) => (
                                    <div key={index} className="banner-slide-item gap-10">
                                        <figure className="banner-statistics gap-2">
                                            <img className="img-fluid" src={e.imageSrc} alt={e.altText} />
                                        </figure>
                                        <h5 className="banner-text3">{e.title}</h5>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CarouselList
