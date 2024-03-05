import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Form, Button, Container, Card } from "react-bootstrap"
import { makeApiCall } from "../common/MakeApicall"
import allCountry from "../common/country.json"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { Formik } from "formik"
import * as Yup from "yup"
import { errorContainer, formAttr } from "../common/commonfunc"
import Select, { components, OptionProps } from "react-select"

const SignUp = () => {
    const navigate = useNavigate()
    const [contryCode, setCountryCode] = useState()

    const submitFormData = async (formData) => {

        let CountryName = allCountry?.filter((e) => {
            return e.dial_code == contryCode
        })
      
        formData.country = CountryName[0]?.name
        formData.countryCode = contryCode
       
        await makeApiCall("post", "/user/register", formData, "raw")
            .then((res) => {
                toast.success("Form submitted successfully")
                navigate("/")
            })
            .catch((error) => {
                console.log("error", error)
            })
    }

    let allCountryArrange = allCountry?.map((e) => {
        return {
            value: e.dial_code,
            label: e.dial_code,
        }
    })

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100 p-2">
            <Card style={{ width: "30rem" }} className=" shadow-lg bg-body rounded gap-2">
                <Card.Body>
                    <h2 className="text-center mt-4">Sign Up</h2>

                    <Formik
                        enableReinitialize
                        initialValues={{
                            phoneNo: "",
                            firstName: "",
                            lastName: "",
                            email: "",
                            password: "",
                            // countryCode: "",
                            country: "",
                        }}
                        validationSchema={Yup.object({
                            phoneNo: Yup.number().required("Phone No is required"),
                            firstName: Yup.string().required("First Name is required"),
                            lastName: Yup.string().required("Last Name required"),
                            email: Yup.string().email("Invalid email address").required("Email is required"),
                            password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
                            // countryCode: Yup.string().required("Country Code is required"),
                            // country: Yup.string().required("Country is required"),
                        })}
                        onSubmit={(formData, { resetForm }) => {
                            submitFormData(formData, resetForm)
                        }}
                    >
                        {(runform) => (
                            <Form className="p-3 " onSubmit={runform.handleSubmit}>
                                {/* First Name input */}
                                <Form.Group controlId="formBasicFirstName" className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your first name" name="firstName" {...formAttr(runform, "firstName")} autoComplete="firstname" />
                                    {errorContainer(runform, "firstName")}
                                </Form.Group>

                                {/* Last Name input */}
                                <Form.Group controlId="formBasicLastName" className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your last name" name="lastName" {...formAttr(runform, "lastName")} autoComplete="lastname" />
                                    {errorContainer(runform, "lastName")}
                                </Form.Group>

                                {/* Email input */}
                                <Form.Group controlId="formBasicEmail" className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" {...formAttr(runform, "email")} autoComplete="email" />
                                    {errorContainer(runform, "email")}
                                </Form.Group>

                                {/* Phone input */}
                                <Form.Label>Phone No</Form.Label>
                                <Form.Group controlId="formBasicPhone" className="mb-3 d-flex align-items-center">

                                    <Select
                                        defaultValue={[]}
                                        options={allCountryArrange}
                                        onChange={(selectedOption) => {
                                            setCountryCode(selectedOption.value)
                                        }}
                                        style={{ marginRight: '10px' }}
                                    />
                                    <div className="mx-5">
                                        <Form.Control type="tel" placeholder="Enter phone" name="phoneNo" {...formAttr(runform, "phoneNo")} />
                                      
                                    </div>
                                    
                                </Form.Group>
                                {errorContainer(runform, "phoneNo")}
                                {/* Password input */}
                                <Form.Group controlId="formBasicPassword" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" {...formAttr(runform, "password")} autoComplete="current-password" />
                                    {errorContainer(runform, "password")}
                                </Form.Group>

                                {/* Terms and Conditions checkbox */}
                                {/* <Form.Group controlId="formBasicCheckbox" className="mb-3">
                                    <Form.Check type="checkbox" label="I agree to the terms and conditions" name="terms" />
                                </Form.Group> */}

                                {/* Submit button */}
                                <Button type="submit" variant="primary" className="mt-3">
                                    Sign Up
                                </Button>

                                {/* Already have an account link */}
                                <div className="text-center mt-3">
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

export default SignUp
