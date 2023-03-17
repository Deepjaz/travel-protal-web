import {React,useState} from 'react'
import axios from "axios";
const FlightSearchApi = () => {
    const [postApi, setPost] = useState();
    let departureDate = '2023-04-02'
    let returnDate = '2023-04-12'
    let adults = '13' 
    let max = '10'

    const handleClick = () =>{
      console.log("yes clicked")
        axios.get(`http://18.215.160.28/api/flight-booking?departureDate=${departureDate}&returnDate=${returnDate}&adults=${adults}&max=${max}`).then((response) => {
            console.log(response)
            setPost(response)
        }).then((err) => {console.log(err)})
    }
  return (
    {
        handleClick,
        postApi
    }
  )
}

export default FlightSearchApi
