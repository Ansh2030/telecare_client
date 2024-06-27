import React, { useState } from 'react';
import axios from 'axios';
import './doctorApply.css';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

function DoctorApply() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    specialization: '',
    years: '',
    fees: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/storeDoctor/store', formData);
      console.log('Doctor registration successful:', response.data);
    } catch (error) {
      console.error('Error registering doctor:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className='accounts-page'>
        <div className='h2'>
          <h2>Doctor Registration</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='form-container'>
            <div className='form-data'>
              <div>
                <div className='head-data'><h3>Full Name</h3></div>
                <div className='data'>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div className='head-data'><h3>Age</h3></div>
                <div className='data'>
                  <input
                    type='number'
                    name='age'
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div className='head-data'><h3>Gender</h3></div>
                <div className='data'>
                  <input
                    type='text'
                    name='gender'
                    value={formData.gender}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div className='head-data'><h3>Email ID</h3></div>
                <div className='data'>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className='form-data'>
              <div>
                <div className='head-data'><h3>Specialization</h3></div>
                <div className='data'>
                  <input
                    type='text'
                    name='specialization'
                    value={formData.specialization}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div className='head-data'><h3>Years Of years</h3></div>
                <div className='data'>
                  <input
                    type='number'
                    name='years'
                    value={formData.years}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div className='head-data'><h3>Fees</h3></div>
                <div className='data'>
                  <input
                    type='number'
                    name='fees'
                    value={formData.fees}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='button-container'>
            <button type='submit'>Apply</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default DoctorApply;