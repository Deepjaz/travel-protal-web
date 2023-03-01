import React from 'react'

const SignUp = () => {
    return (
        <>
            <>
                {/* Required meta tags */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="author" content="ThemesLay" />
                {/* Favicon icon */}
                {/* Bootstrap CSS */}
                <link href="assets/css/main.css" rel="stylesheet" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
                    rel="stylesheet"
                />
                {/*title tag for page */}
                <title>Sign up </title>
                <div className="pagewrap modify-search">
                    {/* body section */}
                    <div className="content-section">
                        {/* signup page */}
                        <div className="review-flight py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-md-6 offset-md-3">
                                        <div className="theme-box-shadow theme-border-radius theme-bg-white p-3">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="flex-shrink-0">
                                                    <div className="theme-bg-primary log_">
                                                        <i className="bi bi-person-plus lh-1 fs-4" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <span className="fs-4 fw-bold">Create Account</span>
                                                    <p className="font-medium mb-0 theme-text-accent-one">
                                                        For security, please sign in to access your information
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <form className="needs-validation" noValidate="">
                                                    <div className="form-floating mb-3">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="floatingInput"
                                                            placeholder="Your Name"
                                                        />
                                                        <label htmlFor="floatingInput">Your Name</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="floatingInput2"
                                                            placeholder="Email address"
                                                        />
                                                        <label htmlFor="floatingInput2">Email Address</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="floatingInput3"
                                                            placeholder="Number"
                                                        />
                                                        <label htmlFor="floatingInput3">Number</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            id="floatingPassword"
                                                            placeholder="Password"
                                                        />
                                                        <label htmlFor="floatingPassword">Password</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            id="floatingPassword2"
                                                            placeholder="Password"
                                                        />
                                                        <label htmlFor="floatingPassword2">
                                                            Confirm Password
                                                        </label>
                                                    </div>
                                                    <div className="mb-3 form-check">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id="exampleCheck2"
                                                        />
                                                        <label
                                                            className="form-check-label font-small"
                                                            htmlFor="exampleCheck2"
                                                        >
                                                            By clicking on register, I Understand &amp; agree to
                                                            world travel <a href="#">Terms and condition</a>
                                                            and <a href="#">Privacy Policy</a>
                                                        </label>
                                                    </div>
                                                    <div className="mb-3">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-effect btn-book px-5 min-h58"
                                                            onclick="window.location.href='#';"
                                                        >
                                                            Register
                                                        </button>
                                                        <span className="font-medium">
                                                            <span className="mx-3">Already a member?</span>
                                                            <a href="signin.html" className="">
                                                                Login
                                                            </a>
                                                        </span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Option 1: Bootstrap Bundle with Popper */}
                {/*This page JavaScript */}
                {/*Data Calendar js */}
                {/*Traveler counter js */}
                {/* animation aos library */}
            </>

        </>
    )
}

export default SignUp