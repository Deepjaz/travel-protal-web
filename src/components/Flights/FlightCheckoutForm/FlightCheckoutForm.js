import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const flightCheckout = {
    "data": {
      "type": "flight-order",
      "flightOffers": [
        "{{flightOfferPrice_data}}"
      ],
      "travelers": [
        {
          "id": "string",
          "dateOfBirth": "1992-06-23",
          "gender": "MALE",
          "name": {
            "firstName": "string",
            "lastName": "string",
            "middleName": "string",
            "secondLastName": "string"
          },
          "documents": [
            {
              "number": "QFU514563221J",
              "issuanceDate": "2018-05-22",
              "expiryDate": "2023-05-22",
              "issuanceCountry": "string",
              "issuanceLocation": "string",
              "nationality": "string",
              "birthPlace": "string",
              "documentType": "VISA",
              "validityCountry": "string",
              "birthCountry": "string",
              "holder": true
            }
          ],
          "emergencyContact": {
            "addresseeName": "string",
            "countryCode": "US",
            "number": "+1-7878787878",
            "text": "Write Additional Information Here"
          },
          "loyaltyProgram": [
            {
              "programOwner": "AF",
              "id": "12357466574"
            }
          ],
          "discountEligibility": [
            {
              "subtype": "SPANISH_RESIDENT",
              "cityName": "Madrid",
              "travelerType": "SPANISH_CITIZEN",
              "cardNumber": "12568215Z",
              "certificateNumber": "12568215Z"
            }
          ]
        }
      ],
      "remarks": {
        "discountEligibility": [
          {
            "subType": "GENERAL_MISCELLANEOUS",
            "category": "Z",
            "text": "PASSENGER NEED ASSISTANCE",
            "travelerIds": [
              "string"
            ],
            "flightOfferIds": [
              "string"
            ]
          }
        ],
        "airline": [
          {
            "subType": "KEYWORD",
            "keyword": "PARK",
            "airlineCode": "AF",
            "text": "CAR PARK",
            "travelerIds": [
              "string"
            ],
            "flightOfferIds": [
              "string"
            ]
          }
        ]
      },
      "ticketingAgreement": {
        "option": "DELAY_TO_QUEUE",
        "delay": "string"
      },
      "contact": [
        {
          "addresseeName": {
            "firstName": "string",
            "lastName": "string",
            "middleName": "string",
            "secondLastName": "string"
          },
          "address": {
            "lines": [
              "string"
            ],
            "postalCode": "74130",
            "countryCode": "string",
            "cityName": "Dublin",
            "stateName": "string",
            "postalBox": "BP 220"
          },
          "language": "string",
          "purpose": "STANDARD",
          "phones": [
            {
              "deviceType": "MOBILE",
              "countryCallingCode": "\"1\" for US & \"371\" for Latvia",
              "number": "string"
            }
          ],
          "companyName": "Master Infotech",
          "emailAddress": "support@mail.com"
        }
      ]
    }
  }
const FlightCheckoutForm = () => {
    const [formData , setFormData] = useState(flightCheckout)
    const location = useLocation()

    console.log('locationlocationlocationlocationlocation' , location)

  return (
    <>
        <div className='flightCheckoutPage'>
            <div className='flightCheckoutPage-inner'>
                <form>
                    <div className='frominner'>
                        <label></label>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default FlightCheckoutForm