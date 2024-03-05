import React, { useState } from "react"
import { toast } from "react-toastify"
import { makeApiCall } from "../common/MakeApicall"
import { ErrorMessage, Field, Formik } from "formik"
import * as Yup from "yup"
import { Form, Button, Card } from "react-bootstrap"
import bg1 from "../images/d7.jpg"
import logo from "../images/logo-new.svg"

const Contact = () => {
    // const [input, setInput] = useState({
    //     name: "",
    //     message: "",
    //     email: "",
    // })

    // const inputEvent = (event) => {
    //     const { name, value } = event.target
    //     setInput({
    //         ...input,
    //         [name]: value,
    //     })
    // }

    const submitFormData = async (data) => {
        await makeApiCall("post", "/diamond/contact", data, "raw")
            .then((res) => {
                toast.success("Form submitted successfully")
            })
            .catch((error) => {
                console.log("error", error)
                toast.success("Invalid value")
            })
    }

    // const addContact = async () => {
    //     console.log("----", input)
    //     await makeApiCall("post", "/diamond/contact", input, "raw")
    //         .then((res) => {
    //             toast.success("Form submitted successfully")
    //         })
    //         .catch((error) => {
    //             console.log("error", error)
    //             toast.success("Invalid value")
    //         })
    // }
    return (
        <>
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center ">
                    <h1 className="h1">Contact Us</h1>
                    {/* <p>Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.</p> */}
                </div>
                {/* </div> */}

                <div className="container pt-2">
                    {/* <div className="row">
                        <div className="col-md-4 mx-auto text-center mb-4">
                            <img src={bg1} alt="Contact Us" className="img-fluid" />
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <Card style={{ width: "30rem" }} className="bg-body rounded gap-2">
                                <Card.Body>
                                    <h2 className="text-center mb-4">Send us a message</h2>
                                    <Formik
                                        initialValues={{
                                            name: "",
                                            message: "",
                                            email: "",
                                        }}
                                        validationSchema={Yup.object({
                                            name: Yup.string().required("Name is required"),
                                            message: Yup.string().required("Message is required"),
                                            email: Yup.string().email("Invalid email address").required("Email is required"),
                                        })}
                                        onSubmit={(formData, { resetForm }) => {
                                            submitFormData(formData, resetForm)
                                        }}
                                    >
                                        {(formik) => (
                                            <Form onSubmit={formik.handleSubmit}>
                                                <Form.Group controlId="formBasicName">
                                                    <Form.Label>Name</Form.Label>
                                                    <Field type="text" name="name" className={`form-control ${formik.touched.name && formik.errors.name ? "is-invalid" : ""}`} />
                                                    <ErrorMessage name="name" component="div" className="invalid-feedback" />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicMessage">
                                                    <Form.Label>Message</Form.Label>
                                                    <Field as="textarea" name="message" className={`form-control ${formik.touched.message && formik.errors.message ? "is-invalid" : ""}`} />
                                                    <ErrorMessage name="message" component="div" className="invalid-feedback" />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Field type="email" name="email" className={`form-control ${formik.touched.email && formik.errors.email ? "is-invalid" : ""}`} />
                                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                                </Form.Group>
                                                <Button variant="primary" type="submit" className="mt-3">
                                                    Let’s Talk
                                                </Button>
                                            </Form>
                                        )}
                                    </Formik>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <div className="text-dark text-center">
                            <img className="w-50 h-50 mb-4" src={logo}></img>
                                {/* <h2 className="h2  pb-3 mb-4">Dharmi Impex</h2> */}
                                <ul className="list-unstyled footer-link-list">
                                <li>
                                    <i className="fas fa-map-marker-alt fa-fw p-2"></i>
                                    21, Sonal Park Society, Pani Gam, Katargam, Surat
                                </li>
            
                                    <li>
                                        <i className="fa fa-phone fa-fw p-2"></i>{" "}
                                        <a className="text-decoration-none" href="tel:919978227111">
                                        +91 99782 27111
                                        </a>
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope fa-fw p-2"></i>{" "}
                                        <a className="text-decoration-none" href="mailto:jigneshtagadiya@gmail.com">
                                        jigneshtagadiya@gmail.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="container">
                <div className="row ">
                    <form className="col-md-9 m-auto" >
                    <div className="row">
                        <div className="form-group col-md-6 mb-3">
                            <label>Name</label>
                            <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Name" onChange={inputEvent} />
                        </div>
                        <div className="form-group col-md-6 mb-3">
                            <label>Email</label>
                            <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email" onChange={inputEvent} />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>Message</label>
                        <textarea className="form-control mt-1" id="message" name="message" placeholder="Message" rows="8" onChange={inputEvent}></textarea>
                    </div>
                    <div className="row">
                        <div className="col text-end mt-2">
                            <button className="btn btn-success btn-lg px-3" onClick={() => addContact()}>
                                Let’s Talk
                            </button>
                        </div>
                    </div>
                    </form>
                </div>
            </div> */}

            {/* <div className="container pt-2">
                <div className="row">
                    <div className="col-md-8">
                       
                        <Card style={{ width: "30rem" }} className="bg-body rounded gap-2">
                            <Card.Body>
                                <h2 className="text-center mb-4">Contact</h2>

                                <Formik
                                    enableReinitialize
                                    initialValues={{
                                        name: "",
                                        message: "",
                                        email: "",
                                    }}
                                    validationSchema={Yup.object({
                                        // phoneNo: Yup.number().required("Phone No is required"),
                                        name: Yup.string().required("Name is required"),
                                        message: Yup.string().required("Message Name required"),
                                        email: Yup.string().email("Invalid email address").required("Email is required"),
                                    })}
                                    onSubmit={(formData, { resetForm }) => {
                                        submitFormData(formData, resetForm)
                                    }}
                                >
                                    {(runform) => (
                                        <Form onSubmit={runform.handleSubmit}>
                                            {/* First Name input */}
            {/* <Form.Group controlId="formBasicFirstName">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter your Name" name="name" {...formAttr(runform, "name")} />
                                                {errorContainer(runform, "name")}
                                            </Form.Group> */}

            {/* Last Name input */}
            {/* <Form.Group controlId="formBasicLastName">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter your Message" name="message" {...formAttr(runform, "message")} />
                                                {errorContainer(runform, "message")}
                                            </Form.Group> */}

            {/* Email input */}
            {/* <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" name="email" {...formAttr(runform, "email")} />
                                                {errorContainer(runform, "email")}
                                            </Form.Group> */}

            {/* Submit button */}
            {/* <Button variant="primary" type="submit" className="mt-3">
                                                Let’s Talk
                                            </Button>
                                        </Form>
                                    )}
                                </Formik>
                            </Card.Body>
                        </Card>
                        
                    </div>
                    <div className="col-md-4">
                        <h2 className="h2 border-bottom pb-3 border-dark logo">Dharmi Impex</h2>
                        <ul className="list-unstyled text-dark footer-link-list">
                            <li>
                                <i className="fas fa-map-marker-alt fa-fw"></i>
                                123 Consectetur at ligula 10660 ssds
                            </li>
                            <li>
                                <i className="fa fa-phone fa-fw"></i>
                                <a className="text-decoration-none" href="tel:010-020-0340">
                                    010-020-0340
                                </a>
                            </li>
                            <li>
                                <i className="fa fa-envelope fa-fw"></i>
                                <a className="text-decoration-none" href="mailto:info@company.com">
                                    info@company.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div> */}
            {/* </div> */}
        </>
    )
}

export default Contact
