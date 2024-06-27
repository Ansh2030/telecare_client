import React, { useState } from 'react';
import axios from 'axios';
import "./patient.css";
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

function Patient() {
  
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    address: '',
    phone: '',
    prescription:null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      prescription:file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://telecare-server.onrender.com/api/storepatients/patients', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
       
      
      
      });
      if(response){
        alert("Succesfully added the info")
      }
      // console.log('Success:', response.data);
      // Handle success or redirect to success page
    } catch (error) {
      console.error('Error:', error);
      // Handle error scenario
    }
  };

  return (
    <>
      <Navbar/>
      <div className='accounts-page'>
        <div className='h2'>
          <h2>Patient Details</h2>
        </div>
        <form className='form-container' onSubmit={handleSubmit}>
          <div className='form-data'>
            <div>
              <div className='head-data'><h3>Full Name</h3></div>
              <div className='data'><input type='text' name='name' value={formData.name} onChange={handleInputChange} required /></div>
            </div>
            <div>
              <div className='head-data'><h3>Age</h3></div>
              <div className='data'><input type='number' name='age' value={formData.age} onChange={handleInputChange} required /></div>
            </div>
            <div>
              <div className='head-data'><h3>Gender</h3></div>
              <div className='data'>
              <input
                    type='text'
                    name='gender'
                    value={formData.gender}
                    onChange={handleInputChange}
                  />
               
              </div>
            </div>
            <div>
              <div className='head-data'><h3>Email ID</h3></div>
              <div className='data'><input type='email' name='email' value={formData.email} onChange={handleInputChange} required /></div>
            </div>
          </div>
          <div className='form-data'>
            <div>
              <div className='head-data'><h3>Address</h3></div>
              <div className='data'><input type='text' name='address' value={formData.address} onChange={handleInputChange} required /></div>
            </div>
            <div>
              <div className='head-data'><h3>Phone Number</h3></div>
              <div className='data'><input type='tel' name='phone' value={formData.phone} onChange={handleInputChange} required /></div>
            </div>
            <div>
              <div className='head-data'><h3>Previous Prescription (if any)</h3></div>
              <div className='data'><input type='file' name='prescription' onChange={handleFileChange} /></div>
            </div>
          </div>
          <div className='button-container '>
            <button   type='submit'>Submit</button>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  );
}
export default Patient;
