// App.js
import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import Header from "./component/Header"
import Footer from "./component/Footer"
import Home from "./pages/Home"
import "@fortawesome/fontawesome-free/css/all.css"
import Login from "./component/Login"
import SingUp from "./component/SingUp"
import Error from "./component/Error"
import "./App.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Search from "./component/Search"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import DiamondDetails from "./pages/DiamondDetails"
import whatsup from "../src/images/ic_whatsapp.svg"

// # https://favicon.io/favicon-converter/
function App() {
    console.log("home -----")

    console.log("sdcvbnm")
    return (
        <>
            <ToastContainer autoClose={1000} position="top-center" />
            <Router>
                <AppContent />
            </Router>
        </>
    )
}

function AppContent() {
    const location = useLocation()
    const [displayHeader, setDisplayHeader] = useState(true)

    useEffect(() => {
        // Set displayHeader based on the current path
        setDisplayHeader(!["/login"].includes(location.pathname))
    }, [location])

    return (
        <div>
            {displayHeader && <Header />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SingUp />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/diamond" element={<Search />} />
                <Route path="/diamond/:id" element={<DiamondDetails />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
            <div className="fixed-float">
                <a target="_blank" href="https://wa.me/919978227111">
                    <img className="fab-btn" style={{ width: "75px" }} src={whatsup} />
                </a>
            </div>
        </div>
    )
}
// const App = () => {
//     const [displayHeader, setDisplayHeader] = useState(true)
//     const location = useLocation()
//     useEffect(() => {
//         console.log("current path", location)
//         // Set displayHeader based on the current path
//         setDisplayHeader(!["/login"].includes(location.pathname))
//     }, [location])

//     return (
//         <>
//             <ToastContainer autoClose={1000} position="top-center" />
//             <Router>
//                 <div>
//                     {displayHeader && <Header />}
//                     <Routes>
//                         <Route path="/" element={<Home />} />
//                         <Route path="/login" element={<Login />} />
//                         <Route path="/signup" element={<SingUp />} />
//                         <Route path="/about" element={<About />} />
//                         <Route path="/contact" element={<Contact />} />
//                         <Route path="/diamond" element={<Search />} />
//                         <Route path="/diamond/:id" element={<DiamondDetails />} />
//                         <Route path="*" element={<Error />} />
//                     </Routes>
//                     <Footer />
//                 </div>
//             </Router>
//             {/* <Router>
//                 <div>

//                     <Header />
//                     <Routes>
//                         <Route path="/" element={<Home />} />
//                         <Route path="/login" element={<Login />} />
//                         <Route path="/signup" element={<SingUp />} />
//                         <Route path="/about" element={<About />} />
//                         <Route path="/contact" element={<Contact />} />
//                         <Route path="/diamond" element={<Search />} />
//                         <Route path="/diamond/:id" element={<DiamondDetails />} />
//                         <Route path="*" element={<Error />} />
//                     </Routes>
//                     <Footer />
//                 </div>
//             </Router> */}
//         </>
//     )
// }

export default App
