import React, { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
const FormPage = () => {
    // const navigate = useNavigate()
    useEffect(() => {
        if(localStorage.getItem("data")) {
            setFormData(JSON.parse(localStorage.getItem("data")))

        } else{
            // navigate("/")
        }
    },[])
    const [formData, setFormData] = useState()
    return(
        <><div className="App">
        {formData && 
        
        <table>
                <tr>
                    {Object.keys(formData).map((key, index) => (
                        <th key={index}>{key}
                            {/* <td>{key}</td> */}
                            {/* <td>{user[key]}</td> */}
                        </th>
                    ))}
                </tr>
                <tr>
                    {Object.keys(formData).map((key, index) => (
                        <td key={index}>{formData[key]}
                            {/* <td>{key}</td> */}
                            {/* <td>{user[key]}</td> */}
                        </td>
                    ))}
                </tr>

            </table>
        
        
        }




            
            

        </div></>
    )
}

export default FormPage;