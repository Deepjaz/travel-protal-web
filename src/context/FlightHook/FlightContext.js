import React  , {createContext} from 'react'
// import { createContext } from 'vm'

const FlightDataContext = createContext({})


const FlightContext = () => {
  return (
    <FlightDataContext.Provider>
        
    </FlightDataContext.Provider>
  )
}

export default FlightContext