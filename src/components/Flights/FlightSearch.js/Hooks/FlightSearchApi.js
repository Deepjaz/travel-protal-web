import {React,useState} from 'react'
import axios from "axios";
const FlightSearchApi = () => {
    const [postApi, setPost] = useState();

    var defineData = new Date();

    // console.log('defineDatadefineDatadefineData' , defineData.)
    const dataData = defineData.getDate();
    const monthData =  defineData.getMonth();
    const YearData =  defineData.getFullYear();

    var newData = `${YearData} ${monthData} ${dataData}`
   
    console.log('dataDatadataData' , YearData)
    let departureDate = '2023-03-17'
    let returnDate = '2023-03-18'
    let adults = '5' 
    let max = '9'
    let code = 'DEL'
    let orgin = "MUB"

    const handleClick = () =>{
      console.log("yes clicked")
        axios.get(`http://18.215.160.28/api/flight-booking?departureDate=${departureDate}&returnDate=${returnDate}&adults=${adults}&max=${max}&destinationLocationCode=${code}&originLocationCode=${orgin}`).then((response) => {
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
