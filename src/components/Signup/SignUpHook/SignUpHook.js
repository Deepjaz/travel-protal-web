import axios from 'axios'
import React, { useState } from 'react'
import { baseUrl } from '../../../env/env'

const formobject = {
    "email": "",
    "password": "",
    "firstName": "",
    "lastName": ""
}

const SignUpHook = () => {
const [formValue ,setFormValue] = useState(formobject)

console.log('formValueformValue' , formValue)

const handleChange = (event) => {
    const {name , value} = event.target;
    setFormValue({...formValue , [name] : value})
}


const HandleSubmit = async (event)=> {
    event.preventDefault();
    try{
      const apiUrl = `${baseUrl}register`
      const apires = await axios.post(apiUrl , formValue  )
      console.log('apiresapires ' , apires) 
    }catch(err){
      console.log(err.response.data.message)
    }
}
  return ({
    formValue,
    HandleSubmit,
    handleChange
  })
}

export default SignUpHook