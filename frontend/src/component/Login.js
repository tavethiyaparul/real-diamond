import React, { useEffect, useState } from "react"
import { Form, Button, Container, Card } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import { makeApiCall } from "../common/MakeApicall"
import { toast } from "react-toastify"
import axios from "axios"

import { Formik } from "formik"
import * as Yup from "yup"
import { errorContainer, formAttr } from "../common/commonfunc"
import logo from "../images/logo-1.svg"
const Login = () => {
    const navigate = useNavigate()

    // https://www.diyamimpex.com/  https://www.argodiam.com/

    const submitFormData = async (data) => {
        const bodyData = {
            fieldsName: { email: data.email },
            password: data.password,
        }
        await makeApiCall("post", "/user/login", bodyData, "raw")
            .then((res) => {
                navigate("/")
            })
            .catch((error) => {
                console.log("error", error)
                if (error.response.data.status == 0) {
                    toast.error(`${error.response.data.message}`)
                }
            })
    }

    return (
        <>
            <Container className="d-flex justify-content-center align-items-center vh-100 p-2 ">
                <Card style={{ width: "30rem" }} className="shadow-lg bg-body rounded">
                    <Card.Body>
                    <div className="text-center mb-4">
                            <img src={logo} alt="logo"  className="w-50"></img>
                        </div>

                        <h2 className="text-center mb-4">Sign In</h2>
                        <Formik
                            enableReinitialize
                            initialValues={{
                                email: "",
                                password: "",
                            }}
                            validationSchema={Yup.object({
                                email: Yup.string().email("Invalid email address").required("Email is required"),
                                password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
                            })}
                            onSubmit={(formData, { resetForm }) => {
                                submitFormData(formData, resetForm)
                            }}
                        >
                            {(runform) => (
                                <Form onSubmit={runform.handleSubmit} className="p-3">
                                    {/* Email input */}
                                    <Form.Group controlId="formBasicEmail" className="mb-3" >
                                        <Form.Label>Email </Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Enter email" {...formAttr(runform, "email")}  />
                                        {errorContainer(runform, "email")}
                                    </Form.Group>
                                    {/* Password input */}
                                    <Form.Group controlId="formBasicPassword" className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password" placeholder="Password" {...formAttr(runform, "password")}  />
                                        {errorContainer(runform, "password")}
                                    </Form.Group>
                                    {/* Remember me checkbox */}
                                    {/* <Form.Group controlId="formBasicCheckbox" className="mb-3">
                                    <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group> */}
                                    {/* Submit button */}

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="mt-3"
                                        // block
                                        // onClick={() => {
                                        //     if (!email && !password) {
                                        //         toast.error("plz Enter password and email or phone No")
                                        //     } else {
                                        //         login()
                                        //     }
                                        // }}
                                    >
                                        Sign In
                                    </Button>
                                    {/* Forgot password link */}
                                    {/* <div className="text-center mt-3">
                                <a href="#!">Forgot password?</a>
                            </div> */}
                                    {/* Register link */}
                                    <div className="text-center mt-3">
                                        <p>
                                            Don't have an account?
                                            <a href="/signup">Register</a>
                                        </p>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </Card.Body>
                </Card>
            </Container>

            {/* <div class="main-wrapper lightgrey-wrapper">
                <section class="start-pad start-pad-login">
                    <div class="start-content">
                        <form class="form login-form" data-hs-cf-bound="true">
                            <h1>Welcome back to Nivoda</h1>
                            <div class="start-buttons-block" className="flex-column">
                                <p class="text-danger" className="d-none">
                                    Something went wrong, sorry!
                                </p>
                                <div class="sc-fgrSAo bAjnAZ custom_input_wrapper  ">
                                    <label class="custom_input_wrapper--label" className="font-inter antialiased fw-600 fs-6 lh-1" style={{ color: "rgb(12, 12, 11)" }}>
                                        Your email address
                                    </label>
                                    <div class="custom_input_wrapper--input  ">
                                        <input type="email" placeholder="Your email address" data-automation-id="login-email" value="" />
                                    </div>
                                </div>
                                <div class="sc-fgrSAo bAjnAZ custom_input_wrapper  password_top_margin">
                                    <label class="custom_input_wrapper--label" className="font-inter antialiased fw-600 fs-6 lh-1" style={{ color: "rgb(12, 12, 11)" }}>
                                        Your password
                                    </label>
                                    <div class="custom_input_wrapper--input  ">
                                        <input type="password" placeholder="Your password" data-automation-id="login-password" name="password" value="" />
                                        <span class="cursor-pointer d-flex">
                                            <svg width="20" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#BDBDBD" class="sc-EHOje ihAgJH">
                                                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#A09B99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z" stroke="#A09B99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div class="login_forgot_pass_section">
                                    <a data-automation-id="login-forgot-password" class="forgot_password_link" href="/forgot-password" className="ml-auto">
                                        Forgot password?
                                    </a>
                                </div>
                                <div class="login-footer text-center login-input">
                                    <button data-automation-id="login-submit" type="submit" class="login-form-button" aria-label="login-button">
                                        Log in
                                    </button>
                                </div>
                            </div>
                        </form>
                        <span class="login_footer">
                            New to World class diamond?{" "}
                            <a href="/register" className="font-inter antialiased fw-600 fs-6 lh-1 text-decoration-underline">
                                Sign up for free
                            </a>
                        </span>
                    </div>
                </section>
            </div> */}
        </>
    )
}

export default Login


// import React, { useState } from "react"
// import "bootstrap/dist/css/bootstrap.min.css"
// import { Form, Button, Container, Card } from "react-bootstrap"
// import { makeApiCall } from "../common/MakeApicall"
// import allCountry from "../common/country.json"
// import { toast } from "react-toastify"
// import { useNavigate } from "react-router-dom"
// import { Formik } from "formik"
// import * as Yup from "yup"
// import { errorContainer, formAttr } from "../common/commonfunc"
// import Select, { components, OptionProps } from "react-select"

// const SignUp = () => {
//     const navigate = useNavigate()
//     const [contryCode,setCountryCode]=useState()

//     const submitFormData = async (data) => {
//         console.log("==================")
//         data.countryCode=contryCode
//         console.log("----",data)
//         await makeApiCall("post", "/user/register", data, "raw")
//             .then((res) => {
//                 toast.success("Form submitted successfully")
//                 navigate("/")
//             })
//             .catch((error) => {
//                 console.log("error", error)
//             })
//     }

//     let allCountryArrange = allCountry?.map((e) => {
//         return {
//           value: e.dial_code,
//           label: e.dial_code,
//         }
//       })

    // return (
    //     <Container className="d-flex justify-content-center align-items-center border rounded vh-100 p-2">
    //         <Card style={{ width: "30rem" }} className=" shadow-lg bg-body rounded gap-2">
    //             <Card.Body>
    //                 <h2 className="text-center mb-4">Register</h2>

    //                 <Formik
    //                     enableReinitialize
    //                     initialValues={{
    //                         phoneNo: "",
    //                         firstName: "",
    //                         lastName: "",
    //                         email: "",
    //                         password: "",
                            // countryCode: "",
                        //     country: "",
                        // }}
                        // validationSchema={Yup.object({
                        //     phoneNo: Yup.number().required("Phone No is required"),
                        //     firstName: Yup.string().required("First Name is required"),
                        //     lastName: Yup.string().required("Last Name required"),
                        //     email: Yup.string().required("Email is required"),
                        //     password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
                            // countryCode: Yup.string().required("Country Code is required"),
                    //         country: Yup.string().required("Country is required"),
                    //     })}
                    //     onSubmit={(formData, { resetForm }) => {
                    //         submitFormData(formData, resetForm)
                    //     }}
                    // >
                        {/* {(runform) => (
                            <Form  onSubmit={runform.handleSubmit}>
                                {/* First Name input */}
                                // <Form.Group controlId="formBasicFirstName" className="mb-3">
                                //     <Form.Label>First Name</Form.Label>
                                //     <Form.Control type="text" placeholder="Enter your first name" name="firstName" {...formAttr(runform, "firstName")} />
                                //     {errorContainer(runform, "firstName")}
                                // </Form.Group> 

                                {/* Last Name input */}
                                {/* <Form.Group controlId="formBasicLastName" className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your last name" name="lastName" {...formAttr(runform, "lastName")} />
                                    {errorContainer(runform, "lastName")}
                                </Form.Group> */}

                                {/* Email input */}
                                {/* <Form.Group controlId="formBasicEmail" className="mb-3"> 
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" {...formAttr(runform, "email")} />
                                    {errorContainer(runform, "email")}
                                </Form.Group> */}

                                {/* Phone input */}

                                {/* <Form.Group controlId="formBasicPhone" className="mb-3">
                                    <Form.Label>Phone No</Form.Label>
                                        <Select
                                    defaultValue={[]}
                                    options={allCountryArrange}
                                    width={200}
                                    onChange={(selectedOption) => {
                                        setCountryCode(selectedOption.value)
                                    }}
                                /> */}
                                
                        
                                    {/* <div className="d-flex gap-2">
                                        <Form.Control as="select" className="mr-2 w-25" name="countryCode" {...formAttr(runform, "countryCode")}>
                                            {allCountry.map((country, index) => (
                                                <option key={index} value={country.dial_code}>
                                                   {country.dial_code} 
                                                </option>
                                            ))}
                                        </Form.Control>
                                        {/* {errorContainer(runform, "countryCode")} */}
                                        {/* <Form.Control type="tel" placeholder="Enter phone" name="phoneNo" {...formAttr(runform, "phoneNo")} /> */}
                                    {/* </div> */} 
                                    {/* {errorContainer(runform, "phoneNo")} */}
                                // </Form.Group>

                                {/* Password input */}
                                {/* <Form.Group controlId="formBasicPassword" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" {...formAttr(runform, "password")} />
                                    {errorContainer(runform, "password")}
                                </Form.Group> */}

                                {/* Terms and Conditions checkbox */}
                                {/* <Form.Group controlId="formBasicCheckbox" className="mb-3">
                                    <Form.Check type="checkbox" label="I agree to the terms and conditions" name="terms" />
                                </Form.Group> */}

                                {/* Submit button */}
                                {/* <Button  type="submit" variant="primary" className="mt-3">
                                    Register
                                </Button> */}

                                {/* Already have an account link */}
                                {/* <div className="text-center mt-3">
                                    <p>
                                        Already have an account? <a href="/login">Login</a>
                                    </p>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default SignUp */}
