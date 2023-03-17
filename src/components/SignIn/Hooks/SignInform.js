import axios from 'axios';
import React, { useState } from 'react'
import  { baseUrl } from "../../../env/env.js"


const SignForm = {
    "email" : '',
    "password" : ''
}
const SignInform = () => {
    const [signForm , setSignform]= useState(SignForm);
// handleChange
    const handleChange = (event) => {
        const {name , value} = event.target
        setSignform({...signForm , [name] : value})
    }
// handleSubmit
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let url= `${baseUrl}/api/auth/login`
        const signInResponse = await axios.post(url , signForm )
        console.log(signInResponse)

      }catch(err){
        console.log(err)
      }

    }

  return ({
    handleChange,
    handleSubmit,
    signForm
  })
}

export default SignInform