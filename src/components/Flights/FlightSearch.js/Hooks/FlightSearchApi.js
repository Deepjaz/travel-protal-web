import {useState, useEffect} from 'react'
import axios from "axios";
import { baseUrl } from '../../../../env/env';
const FlightSearchApi = () => {
    
  const [postApi, setPostApi] = useState([]);

    let departureDate = '2023-04-01'
    let returnDate = '2023-04-18'
    let adults = '5' 
    let max = '9'
    let code = 'DEL'
    let orgin = "LON"

    useEffect(() => {

    }, [postApi]);

    const handleClick = () => {
      console.log("yes clicked")
        axios.get(`${baseUrl}/api/flight-booking?originLocationCode=DEL&destinationLocationCode=LON&departureDate=2023-04-10&returnDate=2023-04-11&adults=2&max=5`)
        .then((response) => {
            console.log(response.data,"this is ready")
            setPostApi(response.data)
        })
    }

  return ({     
        postApi,
        handleClick
  })
}

export default FlightSearchApi
