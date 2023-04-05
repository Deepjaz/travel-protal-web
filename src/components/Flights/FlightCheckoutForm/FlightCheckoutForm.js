import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import InputFeild from "../../../common/InputFeild/InputFeild";

const flightCheckout = {
  data: {
    type: "flight-order",
    flightOffers: ["{{flightOfferPrice_data}}"],
    travelers: [],
    remarks: {
      discountEligibility: [
        {
          subType: "",
          category: "",
          text: "",
          travelerIds: [""],
          flightOfferIds: [""],
        },
      ],
      airline: [
        {
          subType: "",
          keyword: "",
          airlineCode: "",
          text: "",
          travelerIds: [""],
          flightOfferIds: [""],
        },
      ],
    },
    ticketingAgreement: {
      option: "",
      delay: "string",
    },
    contact: [],
  },
};
const FlightCheckoutForm = () => {
  const { state } = useLocation();
  const [formData, setFormData] = useState(flightCheckout);
  const [feildData, setFeildData] = useState([state]);
  const [formFeilds, setformFeilds] = useState([]);
  const [remarkform, setRemarkForm] = useState([
    {
      discountEligibility: [
        {
          subType: "",
          category: "",
          text: "",
          travelerIds: [""],
          flightOfferIds: [""],
        },
      ],
      airline: [
        {
          subType: "",
          keyword: "",
          airlineCode: "",
          text: "",
          travelerIds: ["string"],
          flightOfferIds: ["string"],
        },
      ],
    },
  ]);
  const [formValue, setFormValue] = useState([
    {
      id: "",
      dateOfBirth: "",
      gender: "",
      name: {
        firstName: "",
        lastName: "",
        middleName: "",
        secondLastName: "",
      },
      documents: [
        {
          number: "",
          issuanceDate: "",
          expiryDate: "",
          issuanceCountry: "",
          issuanceLocation: "",
          nationality: "",
          birthPlace: "",
          documentType: "",
          validityCountry: "",
          birthCountry: "",
          holder: "",
        },
      ],
      emergencyContact: {
        countryCode: "",
      },

      countryCode: "",
      subType: "",
      text: "",
    },
  ]);
  const [contactvalue, setContactValue] = useState([
    {
      addresseeName: {
        firstName: "",
        lastName: "",
        middleName: "",
        secondLastName: "",
      },
      address: {
        lines: [""],
        postalCode: "",
        countryCode: "",
        cityName: "",
        stateName: "",
        postalBox: "",
      },
      language: "string",
      purpose: "STANDARD",
      phones : [
        {
          deviceType: "",
          countryCallingCode: "",
          number: "",
        },
      ],
      companyName: "",
      emailAddress: "",
    },
  ]);

  // useEffect(() => {
  const multipleForm = () => {
    for (let i = 0; i < feildData[0].travlerPricing.length; i++) {
      if (formValue.length == i) {
        setFormValue([
          ...formValue,
          {
            id: "",
            dateOfBirth: "",
            gender: "",
            name: {
              firstName: "",
              lastName: "",
              middleName: "",
              secondLastName: "",
            },
            documents: [
              {
                number: "",
                issuanceDate: "",
                expiryDate: "",
                issuanceCountry: "",
                issuanceLocation: "",
                nationality: "",
                birthPlace: "",
                documentType: "",
                validityCountry: "",
                birthCountry: "",
                holder: "",
              },
            ],
            emergencyContact: {
              countryCode: "",
            },

            countryCode: "",
            subType: "",
            text: "",
          },
        ]);
      }
      if (remarkform.length == i) {
        setRemarkForm([
          ...remarkform,
          {
            discountEligibility: [
              {
                subType: "",
                category: "",
                text: "",
                travelerIds: [""],
                flightOfferIds: [""],
              },
            ],
            airline: [
              {
                subType: "",
                keyword: "",
                airlineCode: "",
                text: "",
                travelerIds: ["string"],
                flightOfferIds: ["string"],
              },
            ],
          },
        ]);
      }
      if (contactvalue.length == i) {
        setContactValue([
          ...contactvalue,
          {
            addresseeName: {
              firstName: "",
              lastName: "",
              middleName: "",
              secondLastName: "",
            },
            address: {
              lines: [""],
              postalCode: "",
              countryCode: "",
              cityName: "",
              stateName: "",
              postalBox: "",
            },
            language: "",
            purpose: "",
            phones: [
              {
                deviceType: "",
                countryCallingCode: "",
                number: "",
              },
            ],
            companyName: "",
            emailAddress: "",
          },
        ]);
      }
    }
  };
  multipleForm();
  // }, [])
  console.log("locationlocationlocationlocationlocation", formValue);
  const handlechange = (e, index) => {
    const { name, value } = e.target;
    setFormValue((prevFormValue) => {
      const newFormValue = [...prevFormValue];
      if (
        name === "firstName" ||
        name === "lastName" ||
        name === "middleName" ||
        name === "secondLastName"
      ) {
        newFormValue[index].name = {
          ...newFormValue[index].name,
          [name]: value,
        };
      }
      if (
        name === "number" ||
        name === "issuanceDate" ||
        name === "expiryDate" ||
        name === "issuanceCountry" ||
        name === "issuanceLocation" ||
        name === "nationality" ||
        name === "birthPlace" ||
        name === "documentType" ||
        name === "validityCountry" ||
        name === "birthCountry" ||
        name === "holder"
      ) {
        newFormValue[index].documents = {
          ...newFormValue[index].documents,
          [name]: value,
        };
      } else if (name === "countryCode") {
        newFormValue[index].emergencyContact = {
          ...newFormValue[index].emergencyContact,
          [name]: value,
        };
      } else {
        newFormValue[index] = { ...newFormValue[index], [name]: value };
      }
      return newFormValue;
    });
  };
  const RemarkFormHandle = (e, index) => {
    const { name, value } = e.target;
    setRemarkForm((prevFromValue) => {
      const newValue = [...prevFromValue];
      if (name == "subType" || name == "text") {
        newValue[index].discountEligibility = {
          ...newValue[index],
          [name]: value,
        };
      }
      newValue[index] = { ...newValue[index], [name]: value };

      return newValue;
    });
  };
  const ContacthandleChange = (e, index) => {
    const { name, value } = e.target;
    setContactValue((prevFromValue) => {
      console.log(
        "prevFromValueprevFromValueprevFromValueprevFromValue",
        prevFromValue
      );
      const newValueData = [...prevFromValue];
      if (
        name == "firstName" ||
        name == "lastName" ||
        name === "middleName" ||
        name === "secondLastName"
      ) {
        newValueData[index].addresseeName = {
          ...newValueData[index],
          [name]: value,
        };
      }
      if (
        name == "lines" ||
        name == "postalCode" ||
        name === "countryCode" ||
        name == "cityName" ||
        name === "stateName" ||
        name == "postalBox"
      ) {
        newValueData[index].address = { ...newValueData[index], [name]: value };
      }
      // newValueData[index] = { ...newValueData[index], [name]: value };

      return newValueData;
    });
  };
  //
  // fromSubmit
  const formSubmit = (e) => {
    e.preventDefault();
    formData.data.travelers.push(formValue);
    formData.data.remarks = remarkform;
    formData.data.contact.push(contactvalue);

    console.log(
      "formDataformDataformDataformDataformDataformDataformDataformDataformDataformData",
      formData
    );
  };

  return (
    <>
      <div className="flightCheckoutPage">
        <div className="flightCheckoutPage-inner">
          <form>
            <div className="form-inner">
          {formValue?.map((val, index) => (
            <>
              <h1>Person {index + 1} form</h1>
                <div className="formfeilds">
                  <InputFeild
                    Label="id"
                    Type="text"
                    Name="id"
                    Value={val.id}
                    OnChange={(e) => handlechange(e, index)}
                  />
                </div>
                <div className="formfeilds">
                  <InputFeild
                    Label="DateOfBirth"
                    Type="date"
                    Name="dateOfBirth"
                    Value={val.dateOfBirth}
                    OnChange={(e) => handlechange(e, index)}
                  />
                </div>
                <div className="formfeilds">
                  <InputFeild
                    Label="firstName"
                    Type="text"
                    Name="firstName"
                    Value={val.name.firstName}
                    OnChange={(e) => handlechange(e, index)}
                  />
                </div>
                <div className="formfeilds">
                  <InputFeild
                    Label="lastName"
                    Type="text"
                    Name="lastName"
                    Value={val.name.lastName}
                    OnChange={(e) => handlechange(e, index)}
                  />
                </div>
                <div className="formfeilds">
                  <InputFeild
                    Label="secondLastName"
                    Type="text"
                    Name="secondLastName"
                    Value={val.name.secondLastName}
                    OnChange={(e) => handlechange(e, index)}
                  />
                </div>

                <div className="formfeilds">
                  <InputFeild
                    Label="gender"
                    Type="text"
                    Value={val.gender}
                    Name="gender"
                    OnChange={(e) => handlechange(e, index)}
                  />
                </div>
                <div className="formfeilds">
                  <InputFeild
                    Label="Passport Number"
                    Type="number"
                    Value={val.documents.number}
                    Name="number"
                    OnChange={(e) => handlechange(e, index)}
                  />
                </div>
                <div className="formfeilds">
                  <InputFeild
                    Label="issuanceDate"
                    Type="date"
                    Value={val.documents.issuanceDate}
                    Name="issuanceDate"
                    OnChange={(e) => handlechange(e, index)}
                  />
                </div>
                <div className="formfeilds">
                  <InputFeild
                    Label="expiryDate"
                    Type="date"
                    Value={val.documents.expiryDate}
                    Name="expiryDate"
                    OnChange={(e) => handlechange(e, index)}
                  />
                </div>
                <div className="formfeilds">
                  <InputFeild
                    Label="issuance Country"
                    Type="text"
                    Value={val.documents.issuanceCountry}
                    Name="issuanceCountry"
                    OnChange={(e) => handlechange(e, index)}
                  />
                </div>

                <div className="formfeilds">
                  <InputFeild
                    Label="issuanceLocation"
                    Type="text"
                    Value={val.documents.issuanceLocation}
                    Name="issuanceLocation"
                    OnChange={(e) => handlechange(e, index)}
                  />
                </div>
                <div className="formfeilds">
                  <InputFeild
                    Label="nationality"
                    Type="text"
                    Value={val.documents.nationality}
                    Name="nationality"
                    OnChange={(e) => handlechange(e, index)}
                  />
                </div>
                <div className="formfeilds">
                  <InputFeild
                    Label="birthPlace"
                    Type="text"
                    Value={val.documents.birthPlace}
                    Name="birthPlace"
                    OnChange={(e) => handlechange(e, index)}
                  />
                </div>
                <div className="formfeilds">
                  <InputFeild
                    Label="country Code"
                    Type="text"
                    Value={val.emergencyContact.countryCode}
                    Name="countryCode"
                    OnChange={(e) => handlechange(e, index)}
                  />
                </div>
                <div className="formfeilds">
                  <InputFeild
                    Label="documentType"
                    Type="text"
                    Value={val.documentType}
                    Name="documentType"
                    OnChange={(e) => handlechange(e, index)}
                  />
                </div>

                <div className="formfeilds">
                  <InputFeild
                    Label="validityCountry"
                    Type="text"
                    Value={val.validityCountry}
                    Name="validityCountry"
                    OnChange={(e) => handlechange(e, index)}
                  />
                </div>
                <div className="formfeilds">
                  <InputFeild
                    Label="birthCountry"
                    Type="text"
                    Value={val.documents.birthCountry}
                    Name="validityCountry"
                    OnChange={(e) => handlechange(e, index)}
                  />
                </div>

                <>
              
                  {remarkform.map((val, index) => (
                    <>
                      <div className="formfeilds">
                        <InputFeild
                          Label="subType"
                          Type="text"
                          Value={val.discountEligibility.subType}
                          Name="subType"
                          OnChange={(e) => RemarkFormHandle(e, index)}
                        />
                      </div>
                      <div className="formfeilds">
                        <InputFeild
                          Label="Text"
                          Type="text"
                          Value={val.discountEligibility.text}
                          Name="text"
                          OnChange={(e) => RemarkFormHandle(e, index)}
                        />
                      </div>
                    </>
                  ))}
                  {contactvalue.map((value, index) => (
                    <>
                      <div className="formfeilds">
                        <InputFeild
                          Label="firstName"
                          Type="text"
                          Value={value.addresseeName.firstName}
                          Name="firstName"
                          OnChange={(e) => ContacthandleChange(e, index)}
                        />
                      </div>

                      <div className="formfeilds">
                        <InputFeild
                          Label="lastName"
                          Type="text"
                          Value={value.addresseeName.lastName}
                          Name="lastName"
                          OnChange={(e) => ContacthandleChange(e, index)}
                        />
                      </div>
                      <div className="formfeilds">
                        <InputFeild
                          Label="middleName"
                          Type="text"
                          Value={value.addresseeName.middleName}
                          Name="middleName"
                          OnChange={(e) => ContacthandleChange(e, index)}
                        />
                      </div>
                      <div className="formfeilds">
                        <InputFeild
                          Label="secondLastName"
                          Type="text"
                          Value={value.addresseeName.secondLastName}
                          Name="secondLastName"
                          OnChange={(e) => ContacthandleChange(e, index)}
                        />
                      </div>
                      <div className="formfeilds">
                        <InputFeild
                          Label="lines"
                          Type="text"
                          Value={value.address.lines}
                          Name="lines"
                          OnChange={(e) => ContacthandleChange(e, index)}
                        />
                      </div>
                      <div className="formfeilds">
                        <InputFeild
                          Label="postalCode"
                          Type="text"
                          Value={value.address.postalCode}
                          Name="postalCode"
                          OnChange={(e) => ContacthandleChange(e, index)}
                        />
                      </div>
                      <div className="formfeilds">
                        <InputFeild
                          Label="countryCode"
                          Type="text"
                          Value={value.address.countryCode}
                          Name="countryCode"
                          OnChange={(e) => ContacthandleChange(e, index)}
                        />
                      </div>
                      <div className="formfeilds">
                        <InputFeild
                          Label="cityName"
                          Type="text"
                          Value={value.address.cityName}
                          Name="cityName"
                          OnChange={(e) => ContacthandleChange(e, index)}
                        />
                      </div>
                      <div className="formfeilds">
                        <InputFeild
                          Label="stateName"
                          Type="text"
                          Value={value.address.stateName}
                          Name="stateName"
                          OnChange={(e) => ContacthandleChange(e, index)}
                        />
                      </div>

                      <div className="formfeilds">
                        <InputFeild
                          Label="postalBox"
                          Type="text"
                          Value={value.address.postalBox}
                          Name="postalBox"
                          OnChange={(e) => ContacthandleChange(e, index)}
                        />
                      </div>
                      <div className="formfeilds">
                        <InputFeild
                          Label="deviceType"
                          Type="text"
                          Value={value.phones.deviceType}
                          Name="deviceType"
                          OnChange={(e) => ContacthandleChange(e, index)}
                        />
                      </div>
                      <div className="formfeilds">
                        <InputFeild
                          Label="countryCallingCode"
                          Type="text"
                          Value={value.phones.countryCallingCode}
                          Name="countryCallingCode"
                          OnChange={(e) => ContacthandleChange(e, index)}
                        />  
                      </div>
                      <div className="formfeilds">
                        <InputFeild
                          Label="number"
                          Type="text"
                          Value={value.phones.number}
                          Name="number"
                          OnChange={(e) => ContacthandleChange(e, index)}
                        />
                      </div>
                      <div className="formfeilds">
                        <InputFeild
                          Label="companyName"
                          Type="text"
                          Value={value.companyName}
                          Name="companyName"
                          OnChange={(e) => ContacthandleChange(e, index)}
                        />
                      </div>
                      <div className="formfeilds">
                        <InputFeild
                          Label="emailAddress"
                          Type="email"
                          Value={value.emailAddress}
                          Name="emailAddress"
                          OnChange={(e) => ContacthandleChange(e, index)}
                        />
                      </div>
                    </>
                  ))}
                </>
              </>
          ))}
          </div>
          </form>
          <button
            className="btn-primary"
            type="submit"
            onClick={(e) => formSubmit(e)}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default FlightCheckoutForm;
