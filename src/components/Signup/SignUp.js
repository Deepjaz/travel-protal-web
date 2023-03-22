import React from 'react'
import { Link } from 'react-router-dom';
import InputFeild from '../../common/InputFeild/InputFeild'
import SignUpHook from './SignUpHook/SignUpHook';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
const SignUp = () => {
    const { HandleSubmit  , handleChange , formValue , signUpError} =  SignUpHook();

    console.log('signUpErrorsignUpError' ,signUpError)
    return (
        <>
            <>
            <ToastContainer/>
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
                                                <form className="needs-validation" onSubmit={HandleSubmit}>
                                                    
                                                    <div className="form-floating mb-3"> 
                                                        <InputFeild
                                                            Placeholder={'Email Address'}
                                                            OnChange= {handleChange}
                                                            ClassName={'form-control'}
                                                            Name ={'email'}
                                                            Value = {formValue.email}
                                                            Type={"email"}
                                                            Label= {'Email Address'}
                                                            Id="floatingInput2"
                                                            Error ={signUpError.email}
                                                        />
                                                    </div>
                                                    
                                                    <div className="form-floating mb-3">
                                                        <InputFeild
                                                            Placeholder={'Password'}
                                                            OnChange= {handleChange}
                                                            ClassName={'form-control'}
                                                            Value = {formValue.password}
                                                            Name ={'password'}
                                                            Type={"Password"}
                                                            Label= {'Password'}
                                                            Id="floatingPassword"
                                                            Error ={''}
                                                        />
                                                    </div>

                                                    <div className="form-floating mb-3">
                                                        <InputFeild
                                                            Placeholder={'First Name'}
                                                            OnChange= {handleChange}
                                                            ClassName={'form-control'}
                                                            Name ={'firstName'}
                                                            Type={"text"}
                                                            Label= {'First Name'}
                                                            Id="floatingPassword"
                                                            Error ={''}
                                                            Value = {formValue.firstName}
                                                        />
                                                    </div>


                                                    <div className="form-floating mb-3">
                                                        <InputFeild
                                                            Placeholder={'Last Name'}
                                                            OnChange= {handleChange}
                                                            ClassName={'form-control'}
                                                            Name ={'lastName'}
                                                            Type={"text"}
                                                            Label= {'Last Name'}
                                                            Id="floatingPassword"
                                                            Error ={''}
                                                            Value = {formValue.lastName}
                                                        />
                                                    </div>
                                                    
                                                    <div className="mb-3 form-check">
                                                        
                                                        <InputFeild
                                                            ClassName={'form-check-input'}
                                                            Type={"checkbox"}
                                                            Id="exampleCheck2"
                                                            Error ={''}
                                                            Checked = {true}
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
                                                            className="btn btn-effect btn-book px-5 min-h58 btn-primary"
                                                            onclick="window.location.href='#';"
                                                        >
                                                            Register
                                                        </button>
                                                        <span className="font-medium">
                                                            <span className="mx-3">Already a member?</span>
                                                            <Link to="/sign-in" className="">
                                                                Login
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

        </>
    )
}

export default SignUp