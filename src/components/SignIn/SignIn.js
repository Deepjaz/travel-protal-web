import React from 'react'
import InputFeild from '../../common/InputFeild/InputFeild'
import SignInform from './Hooks/SignInform'
import {Link} from 'react-router-dom'

const SignIn = () => {
     const {handleChange , signForm , handleSubmit , emailError , passError} =SignInform();

     console.log('emailErroremailErroremailError' , emailError) 
    return (
        <>
                <div className="pagewrap modify-search">
                    <div className="content-section">
                        <div className="review-flight py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-md-6 offset-md-3">
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
                                                <form className="needs-validation" onSubmit={e => handleSubmit(e)}>
                                                    <div className="mb-3">
                                                        <InputFeild 
                                                            Requrried={true}
                                                            Error={emailError}
                                                            Label={'Email Address'}
                                                            Name={'email'} 
                                                            Type={'text'}
                                                            OnChange = {handleChange}
                                                            Value = {signForm.email}
                                                            PlaceHolder = {"Enter Your Email"}
                                                            ClassName={'form-control min-h58'}
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                         <InputFeild 
                                                            Requrried={true}
                                                            Type={'password'}
                                                            Error={passError}
                                                            Label={'Password'}
                                                            Name={'password'} 
                                                            OnChange = {handleChange}
                                                            Value = {signForm.password}
                                                            PlaceHolder = {"Enter Your Password"}
                                                            ClassName="form-control min-h58"
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
                                                            <Link to="/sign-up" className="">
                                                                Create New Account
                                                            </Link>
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
                
            </>

       
    )
}

export default SignIn