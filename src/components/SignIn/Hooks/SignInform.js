import axios from 'axios';
import React, { useState } from 'react'
import  { baseUrl } from "../../../env/env.js"
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignForm = {
    "email" : '',
    "password" : ''
}
const SignInform = () => {
  const navigate = useNavigate();
    const [signForm , setSignform]= useState(SignForm);
    const [emailError , setEmailError] = useState('')
    const [passError , setPassError] = useState('')

// handleChange
    const handleChange = (event) => {
        const {name , value} = event.target
        setSignform({...signForm , [name] : value})
    }
// handleSubmit
    const handleSubmit = async (e) => {
      setEmailError('')
      setPassError('')
      e.preventDefault();
      try {

        if(!signForm.email){
          setEmailError('Please enter Your Email Address')
        }
        if(!signForm.password){
          setPassError('Please enter Your Password')
        }
        let url= `${baseUrl}/api/auth/login`
          const signInResponse = await axios.post(url , signForm)
          console.log('signInResponsesignInResponsesignInResponse ' ,signInResponse.data.accessToken)
          localStorage.setItem('login-token', signInResponse.data.accessToken)
          if(signInResponse.status == 201){
            toast.success('Login SuccessFully')
              setTimeout(() => {
                if(localStorage.getItem('login-token')){
                  navigate('/')
                }  
          }, 1000); 
          }
      }catch(err){
        console.log('this is the erros' , err)
        
      }

    }


  return ({
    handleChange,
    handleSubmit,
    signForm,
    emailError,
    passError
  })
}

export default SignInform