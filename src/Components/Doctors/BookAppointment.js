import React, { useState } from "react";
import "./bookappointment.css";
import axios from "axios";
// import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import { useAuth } from '../../Context/authContext';
import { handlepay } from "../Appointment/Payments";


const BookAppointment = ({ setModalOpen, doctor }) => {
  const {user} = useAuth();

  const [formDetails, setFormDetails] = useState({
    date: "",
    time: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const bookAppointment = async (e) => {
    e.preventDefault();
    // console.log("this is doctor",doctor);
    // console.log("this is user", user)
    try {

//go for payment 
const num = prompt("Enter the phone number");
const data = handlepay(doctor.fees,doctor.patname, doctor.patemail,num);
if(data){
   await axios.post('https://telecare-server.onrender.com/api/appointments/bookAppointment',{
    docname: doctor.name,  
  docemail:doctor.email,
   patname: user.displayName,
   patemail: user.email,
   date:formDetails.date,
   time:formDetails.time,
   link:""
  });

  alert("Your appointment is booked successfully");
} 

// console.log("this is hbhbhcbdhcb",response);





      // );
      setModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="modal flex-center">
      <div className="modal__content">
        <h2 className="page-heading">Book Appointment</h2>
        <IoMdClose
          onClick={() => {
            setModalOpen(false);
          }}
          className="close-btn"
        />
        <div className="register-container flex-center book">
          <form className="register-form">
            <input
              type="date"
              name="date"
              className="form-input"
              value={formDetails.date}
              onChange={inputChange}
            />
            <input
              type="time"
              name="time"
              className="form-input"
              value={formDetails.time}
              onChange={inputChange}
            />
            <button
              type="submit"
              className="btn form-btn"
              onClick={bookAppointment}
            >
             Pay & Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
