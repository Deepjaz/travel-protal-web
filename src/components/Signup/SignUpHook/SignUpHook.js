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
const Errormsg = {
  "email": "",
  "password": "",
  "firstName": "",
  "lastName": ""
}

const SignUpHook = () => {
const [formValue ,setFormValue] = useState(formobject);
const [signUpError , setSignUpError] = useState(Errormsg)
console.log('formValueformValue' , formValue)

const handleChange = (event) => {
    const {name , value} = event.target;
    setFormValue({...formValue , [name] : value})
}


const HandleSubmit = async (event)=> {
    event.preventDefault();
    try{
      const apiUrl = `${baseUrl}/api/auth/register`
      const apires = await axios.post(apiUrl , formValue  )
      console.log('apires' , apires)
      
      if(apires.status === 201){
        toast.success('SignUp  SuccessFully');
          localStorage.setItem('id' , JSON.stringify(apires.data))

      }
    }catch(err){
      const error = signUpError
      console.log(err.response.data.message)
      if(!formobject.email.trim() ){
        error.email = err.response.data.message[0]
      }
    }
}
  return ({
    formValue,
    HandleSubmit,
    handleChange,
    signUpError
  })
}

export default SignUpHook