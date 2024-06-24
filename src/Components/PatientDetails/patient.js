import React from 'react';
import "./patient.css";
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

function patient() {
  return (
    <>
    <Navbar/>
    <div className='accounts-page'>
      <div className='h2'>
        <h2>Patient Details</h2>
      </div>
      <div className='form-container'>
        <div className='form-data'>
          <div>
            <div className='head-data'><h3>Full Name</h3></div>
            <div className='data'><p></p></div>
          </div>
          <div>
            <div className='head-data'><h3>Age</h3></div>
            <div className='data'><p></p></div>
          </div>
          <div>
            <div className='head-data'><h3>Gender</h3></div>
            <div className='data'><p></p></div>
          </div>
          <div>
            <div className='head-data'><h3>Email ID</h3></div>
            <div className='data'><p></p></div>
          </div>
        </div>
        <div className='form-data'>
          <div>
            <div className='head-data'><h3>Address</h3></div>
            <div className='data'><p></p></div>
          </div>
          <div>
            <div className='head-data'><h3>Phone Number</h3></div>
            <div className='data'><p></p></div>
          </div>
          <div>
            <div className='head-data'><h3>Previous Prescription(if any)</h3></div>
            <div className='data'><p><input type='file'/></p></div>
          </div>
        </div>
      </div>
      <div className='button-container'>
        <button>Submit</button>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default patient
