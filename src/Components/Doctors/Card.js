import "./Card.css";
import React, { useState } from "react";
import BookAppointment from "./BookAppointment";
// import { toast } from "react-hot-toast";

const DoctorCard = ({ ele , doctor}) => {
  const [modalOpen, setModalOpen] = useState(false);
  // const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleModal = () => {
    // if (token === "") {
    //   return toast.error("You must log in first");
    // }
    console.log(doctor);
    setModalOpen(true);
  };

  return (
    <div className={`card`}>
      <div className={`card-img flex-center`}>
        <img
          src={
            doctor?.userId?.pic ||
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
          }
          alt="profile"
        />
      </div>
      <h3 className="card-name">
         {doctor?.name}
      </h3>
      <p className="specialization">
        <strong>Specialization: </strong>
        {doctor?.specialization}
      </p>
      <p className="experience">
        <strong>Experience: </strong>
        {doctor?.experience}yrs
      </p>
      <p className="fees">
        <strong>Fees per consultation: </strong>INR {doctor?.fees}
      </p>
      {/* <p className="phone">
        <strong>Phone: </strong>
        {doctor?.userId?.mobile}
      </p> */}
      <button
        className="btn appointment-btn"
        onClick={handleModal}
      >
        Book Appointment
      </button>
      {modalOpen && (
        <BookAppointment
          setModalOpen={setModalOpen}
          ele={ele}
          doctor= {doctor}
          
        />
      )}
    </div>
  );
};

export default DoctorCard;