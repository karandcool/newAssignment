import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import { useNavigate } from "react-router-dom";

const Home = () => {
const navigate = useNavigate();

  const [formData, setFormData] = useState({
     "firstName": "",
   "lastName" : "",
   "email": "",
   "state" : "",
   "city": "",
   "country" : "",
   "gender":"",
   "dob": "",
   "age" : "",
  })
  const [cityData, setCityData] = useState();
  const [stateData, setStateData] = useState();
  const [countryData, setCountryData] = useState();
  const [value, setValue] = useState()
  useEffect(() => {
    getCountryData()
    // getFullData()
  }, [])
  const getCountryData = async () => {
      
        const response = await fetch('http://localhost:5000/api/country');
        if (response) {
          const jsonData = await response.json();
          setCountryData(jsonData);

          console.log(jsonData)
          // console.log(tableBottleData)
          console.log(response)
        } else {
          console.log("Error")
        }
      
  }

  const getAge = (event) => {
    // setFormData( {...formData, "dob": event.target.value})
    const birthDate = new Date(event.target.value); 
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);
    const finalAge = Math.abs(age.getUTCFullYear() - 1970);
    setFormData( {...formData,
      "dob": event.target.value,
      "age": finalAge})
  }

  const SubmitForm = async () => {
     console.log(formData)
    const response = await fetch('http://localhost:5000/api/form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          
          if (response) {
            const jsonData = await response.json();
          console.log(jsonData)
          localStorage.setItem("data", JSON.stringify(jsonData))
            setFormData({
              "firstName": "",
            "lastName" : "",
            "email": "",
            "state" : "",
            "city": "",
            "country" : "",
            "gender":"",
            "dob": "",
            "age" : "",
           })
           navigate("/form")
          } else {
            alert("All Fields are mandatory")
          };
  }
  
  const getStates= (event) => {
    
    const country =countryData.find(obj => {
      return obj.countryName === event;
    });
    setFormData( {...formData, 
      "city": "",
      "state": "",
      "country": country?.countryName
    })
    
    getAllStates(country?._id)
  }

  const getCities= (event) => {
    
    const state =stateData.find(obj => {
      return obj.stateName === event;
    });
    setFormData( {...formData, 
      "city": "",
      "state": state?.stateName})
    
    getAllCities(state?._id)
  }

  const getAllStates = async (id) => {
    
    const response = await fetch('http://localhost:5000/api/state', {
      method: 'GET',
      headers: {
        country: id,
        Accept: 'application/json',
      },
    });
    const jsonData = await response.json();
    setStateData(jsonData)
    // setFormData( {...formData, "state": ""})
  }

  const getAllCities = async (id) => {
    
    const response = await fetch('http://localhost:5000/api/city', {
      method: 'GET',
      headers: {
        state: id,
        Accept: 'application/json',
      },
    });
    const jsonData = await response.json();
    setCityData(jsonData)
    // setFormData( {...formData, "state": ""})
  }
  return (
    <div>
      <h2>Form</h2>
      <div style={{'display': 'flex','flex-flow': 'wrap'}}>
          <input type='text' className="input-field" placeholder='First Name' value={formData.firstName} onChange={(event) => setFormData( {...formData, "firstName": event.target.value})}></input>
          <input type='text' className="input-field" placeholder='Last Name' value={formData.lastName} onChange={(event) => setFormData({...formData, "lastName":  event.target.value})}></input>
          <input type='email' className="input-field" placeholder='Email' value={formData.email} onChange={(event) => setFormData( {...formData, "email": event.target.value})}></input>
          <select placeholder='Country' value={formData.country} onChange={(event) => {
            getStates(event.target.value)
            }}
            >
          <option disabled={true} value="">
          --Choose Your Country--
        </option>
        { countryData?.map((data, index) => {
          return <option  index={index} value={data?.countryName}>{data?.countryName}</option>
        })}

</select>
<select disabled={formData?.country == ""} placeholder='State' value={formData.state} onChange={(event) => {
            getCities(event.target.value)
            }}>
          <option disabled={true} value="">
          --Choose Your State--
        </option>
        { stateData?.map((data, index) => {
          return <option index={index} value={data?.stateName}>{data?.stateName}</option>
        })}

</select>
<select disabled={formData?.state == ""} placeholder='City' value={formData.city} onChange={(event) => setFormData( {...formData, "city": event.target.value})}>
          <option disabled={true} value="">
          --Choose Your City--
        </option>
        { cityData?.map((data, index) => {
          return <option index={index} value={data?.cityName}>{data?.cityName}</option>
        })}

</select>
<div>
  <label>Gender</label>
        <input value={formData.gender} onChange={(event) =>setFormData( {...formData, "gender": event.target.value})} type="radio" value="Male" name="gender" /> Male
        <input value={formData.gender} onChange={(event) =>setFormData( {...formData, "gender": event.target.value})} type="radio" value="Female" name="gender" /> Female
        <input value={formData.gender} onChange={(event) =>setFormData( {...formData, "gender": event.target.value})} type="radio" value="Other" name="gender" /> Other
      </div>
  <input type='date' className="input-field" placeholder='D.O.B' value={formData.dob} onChange={(event) => getAge(event)}></input>
          <input type='text' disabled='true' className="input-field" placeholder='Age' value={formData.age} onChange={(event) => setFormData( {...formData, "age": event.target.value})}></input>

          
          
          <button className="submit-button" onClick={SubmitForm} >Submit</button>
          </div>
    </div>
  );
};

export default Home;
