import React from 'react'

import axios from 'axios'
import { useAuth } from '../../Context/authContext/index.js';
import { useState } from 'react';



function Appointment() {
  const { user, logedin } = useAuth();
  const [formData, setFormData] = useState({
    user: user,
    logedin: logedin,
    
});
// console.log(user);

// console.log(formData);
const handleSubmit=async()=>{
  try {
    const response = await axios.post(
        'http://localhost:8080/api/appoint/getappointment',
        formData
    );
    console.log('Data sent to backend:', response.data);
    // Handle successful response (if needed)
} catch (error) {
    console.error('Error sending data:', error);
    // Handle error (if needed)
}
};



  
  return (
    <>
    <button onClick={handleSubmit}>Appointment</button>

    </>
  )
}

export default Appointment
