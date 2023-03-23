import React from 'react'

const FlightCount = () => {

    const CallBackFunctionF=(count,counting,counting2)=>{
        const numberOfAdults = count;
const numberOfChildren = counting;
const numberOfInfants = counting2;

const travelers = {};

if (numberOfAdults > 0) {
  travelers['ADULT'] = {
    travelerType: 'ADULT',
    fareOptions: ['STANDARD']
  };
  for (let i = 1; i <= numberOfAdults; i++) {
    travelers['ADULT'][`adult-${i}`] = {
      id: `adult-${i}`,
      count: 1
    };
  }
}

if (numberOfChildren > 0) {
  travelers['CHILD'] = {
    travelerType: 'CHILD',
    fareOptions: ['STANDARD']
  };
  for (let i = 1; i <= numberOfChildren; i++) {
    travelers['CHILD'][`child-${i}`] = {
      id: `child-${i}`,
      count: 1
    };
  }
}

if (numberOfInfants > 0) {
  travelers['INFANT'] = {
    travelerType: 'INFANT',
    fareOptions: ['STANDARD']
  };
  for (let i = 1; i <= numberOfInfants; i++) {
    travelers['INFANT'][`infant-${i}`] = {
      id: `infant-${i}`,
      count: 1
    };
  }
}

console.log(travelers);

    }

  return {
    CallBackFunctionF
  }
}

export default FlightCount
