import React, { useEffect, useState } from "react";
import axios from 'axios';



const Demo = () => {

    const [filterData, setFilterData] = useState();
  
    const [clinicHandle, setClinicHandle] = useState([]);

    useEffect(() => {
        //filterList();
    }, [])

    const ClinicHandleChange = (event) =>{
        console.log("event.target" , event.target)
        setClinicHandle(event.target.value)
        console.log("this is hitt")
    }

    // filter Data
        const  filterList = async() => {
            try {
                const url = 'http://74.208.25.43:4011/ N  245TYHG543/v1/provider/filter_list'
                const token = JSON.parse(localStorage.getItem('user') || '')
                const headers = {
                    'Content-Type' : 'application/json',
                    'authorization': `Bearer ${token.token}`
                }
                const response = await axios.post(url  , {headers});
                console.log('Data Fields', response);
                setFilterData(response.data.data.data);
            } catch(err){
                console.log('Error Data Fields', err);
            }
        }

  return (
    <div className="flex-div">
      
                  <div className="content mt-5">
              <form className="row g-3">
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12 ">
                
                </div>
                </form>
                </div>
      <div>
        qweqwe
        <select name="" id="">
          car
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
      </div>
      <div>
        qwe
        <select name="" id="">
          car
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
      </div>
    </div>
  );
};

export default Demo;