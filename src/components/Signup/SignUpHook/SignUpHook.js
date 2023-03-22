import axios from 'axios'
import React, { useState } from 'react'
import { baseUrl } from '../../../env/env'
import { toast } from 'react-toastify'


const formobject = {
    "email": "",
    "password": "",
    "firstName": "",
    "lastName": ""
}

const SignUpHook = () => {
const [formValue ,setFormValue] = useState(formobject);
// const [signUpError , setSignUpError] = useState(Errormsg)
console.log('formValueformValue' , formValue)
const [emailError , SetEmailError] = useState('')
const [passwordError  , setPasswordError] = useState('');
const [nameError , setNameError] = useState('')


// form handleChange
const handleChange = (event) => {
    const {name , value} = event.target;
    setFormValue({...formValue , [name] : value})
}









// registerFrom Submit
const HandleSubmit = async (event)=> {
    event.preventDefault();
    SetEmailError('')
    setPasswordError('')
    setNameError('')
    try{
      const apiUrl = `${baseUrl}/api/auth/register`
      const apires = await axios.post(apiUrl , formValue  )
      console.log('apires' , apires)
      
      if(apires.status === 201){
        toast.success('SignUp  SuccessFully');
          localStorage.setItem('id' , JSON.stringify(apires.data))

      }
    }catch(err){
      const errors = {};
          console.log(err.response.data.message)
        if(!formobject.email.trim()){
          SetEmailError('Please enter a valid email')
        }
        if(!formobject.password.trim() < 5){
          setPasswordError("please enter the password Greater the 5 & Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters")
        }
        
        if(!formobject.firstName.trim()){
          setNameError('firstName must be longer than or equal to 1 characters')
        }
        
    }  
  } 
  return ({
    formValue,
    HandleSubmit,
    handleChange,
    emailError,
    passwordError,
    nameError
  })
}

export default SignUpHook