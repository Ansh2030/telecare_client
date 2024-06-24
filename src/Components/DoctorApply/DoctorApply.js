import React from 'react';
import "./doctorApply.css";
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';
function DoctorApply() {
  return (
    <>
    <Navbar/>
    <div className='accounts-page'>
      <div className='h2'>
        <h2>Doctor Registraion</h2>
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
            <div className='head-data'><h3>Specialization</h3></div>
            <div className='data'><p></p></div>
          </div>
          <div>
            <div className='head-data'><h3>Years Of Experience</h3></div>
            <div className='data'><p></p></div>
          </div>
          <div>
            <div className='head-data'><h3>Fees</h3></div>
            <div className='data'><p></p></div>
          </div>
        </div>
      </div>
      <div className='button-container'>
        <button>Apply</button>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default DoctorApply;
