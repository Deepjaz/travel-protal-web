import axios from 'axios';
import React, { useState } from 'react'
import  { baseUrl } from "../../../env/env.js"


const SignForm = {
    "email" : '',
    "password" : ''
}
const SignInform = () => {
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
        console.log(signInResponse)

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