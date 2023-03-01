import React from 'react'

const SignIn = () => {
    return (
        <>
            <>
                {/* Required meta tags */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="author" content="ThemesLay" />
                {/* Favicon icon */}
                {/* <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon.png"> */}
                {/* Bootstrap CSS */}
                <link href="assets/css/main.css" rel="stylesheet" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
                    rel="stylesheet"
                />
                {/*title tag for page */}
                <title> Login </title>
                <div className="pagewrap modify-search">
                    {/* body section */}
                    <div className="content-section">
                        {/* flight result page - oneway start */}
                        <div className="review-flight py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-md-6 offset-md-3">
                                        {/* travel insurance section */}
                                        <div className="theme-box-shadow theme-border-radius theme-bg-white p-3">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="flex-shrink-0">
                                                    <div className="theme-bg-primary log_ ">
                                                        <i className="bi bi-unlock lh-1 fs-4" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <span className="fs-4 fw-bold">Sign in</span>
                                                    <p className="font-medium mb-0 theme-text-accent-one">
                                                        Sign in and Get lots of Cashback Rewards and Discount
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <form className="needs-validation" noValidate="">
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="exampleInputEmail1"
                                                            className="form-label"
                                                        >
                                                            Email Address
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control min-h58"
                                                            id="exampleInputEmail1"
                                                            placeholder="Enter Your Email"
                                                            required=""
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="exampleInputPassword1"
                                                            className="form-label"
                                                        >
                                                            Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            className="form-control min-h58"
                                                            id="exampleInputPassword1"
                                                            placeholder="Enter Your Password"
                                                            required=""
                                                        />
                                                    </div>
                                                    <div className="mb-3 form-check">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id="exampleCheck1"
                                                        />
                                                        <label
                                                            className="form-check-label font-small"
                                                            htmlFor="exampleCheck1"
                                                        >
                                                            Remember Me
                                                        </label>
                                                    </div>
                                                    <div className="mb-3">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-effect btn-book px-5 min-h58"
                                                            onclick="window.location.href='index.html';"
                                                        >
                                                            Login
                                                        </button>
                                                        <span className="font-medium">
                                                            <span className="mx-3 text-uppercase">or</span>
                                                            <a href="signup.html" className="">
                                                                Create New Account
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

export default SignIn