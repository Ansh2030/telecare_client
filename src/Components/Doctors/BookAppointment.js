import React, { useState } from "react";
import "./bookappointment.css";
import axios from "axios";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";

const BookAppointment = ({ setModalOpen, doctor }) => {
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
    try {
      await toast.promise(
        axios.post(
          "/appointment/bookappointment",
          {
            doctorId: doctor?.userId?._id,
            date: formDetails.date,
            time: formDetails.time,
            doctorname: `${doctor?.userId?.firstname} ${doctor?.userId?.lastname}`,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          success: "Appointment booked successfully",
          error: "Unable to book appointment",
          loading: "Booking appointment...",
        }
      );
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
              Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
