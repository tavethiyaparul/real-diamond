import React from "react"
import g1 from "../images/gallery/1.jpeg"
import g2 from "../images/gallery/2.jpeg"
import g3 from "../images/gallery/3.jpeg"
import g4 from "../images/gallery/4.jpeg"
import g5 from "../images/gallery/5.jpeg"
import g6 from "../images/gallery/6.jpeg"
import g7 from "../images/gallery/7.jpeg"
import g8 from "../images/gallery/8.jpeg"

const all = [
    { alt: "Hong Kong Fairs", imageSrc: g1 },
    { alt: "Hong Kong Fairs", imageSrc: g2 },
    { alt: "Hong Kong Fairs", imageSrc: g7 },
    { alt: "Hong Kong Fairs", imageSrc: g3 },
    { alt: "Hong Kong Fairs", imageSrc: g5 },
    { alt: "Hong Kong Fairs", imageSrc: g6 },
    { alt: "Hong Kong Fairs", imageSrc: g4 },
    { alt: "Hong Kong Fairs", imageSrc: g8 },
]

const Gallery = () => {
    return (
        <>
            <div className="container">
                <h1 className="fw-light text-center text-lg-start mt-4 mb-0">Our Gallery</h1>

                <hr className="mt-2 mb-5" />

                <div className="row text-center text-lg-start">
                    {all.map((e) => (
                        <>
                            <div className="col-lg-3 col-md-4 col-12 p-4">
                                {/* <a href="#" className="d-block mb-4 h-100"> */}
                                <img className="img-fluid img-thumbnail" style={{ height: "350px", width: "350px", objectFit: "cover" }} src={e.imageSrc} alt={e.alt} />
                                {/* </a> */}
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Gallery
