import {useState, useEffect} from 'react'
import axios from "axios";
const FlightSearchApi = () => {
    
  const [postApi, setPostApi] = useState([]);

    let departureDate = '2023-04-01'
    let returnDate = '2023-04-18'
    let adults = '5' 
    let max = '9'
    let code = 'DEL'
    let orgin = "MUB"

    useEffect(() => {

    }, [postApi]);

    const handleClick = () => {
      console.log("yes clicked")
        axios.get(`http://localhost:3000/api/flight-booking?departureDate=${departureDate}&returnDate=${returnDate}&adults=${adults}&max=${max}&destinationLocationCode=${code}&originLocationCode=${orgin}`)
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
