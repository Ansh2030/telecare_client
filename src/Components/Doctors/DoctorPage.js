import React, { useEffect, useState } from "react";
import DoctorCard from "./Card";
import Footer from "../LandingPage/Footer";
import Navbar from "../LandingPage/Navbar";
import "./doctor.css";
import Loading from "./Loading";
import Empty from "./Empty";
import axios from "axios";
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);



  // const dummyDoctors = [
  //   {
  //     _id: "1",
  //     userId: { _id: "user1", firstname: "John", lastname: "Doe" },
  //     name:"Ansh",
  //     email:"nncnjcndcdbcem",
  //     specialization: "Cardiology",
  //     experience: 10,
  //     fees: 500,
  //     isDoctor: true,
  //   },
  //   {
  //     _id: "2",
  //     userId: { _id: "user2", firstname: "Jane", lastname: "Smith" },
  //     specialization: "Neurology",
  //     experience: 8,
  //     fees: 400,
  //     isDoctor: true,
  //   },
  //   {
  //     _id: "3",
  //     userId: { _id: "user3", firstname: "Emily", lastname: "Clark" },
  //     specialization: "Orthopedics",
  //     experience: 12,
  //     fees: 600,
  //     isDoctor: true,
  //   },
  // ];

  // Simulate API call delay
  // setTimeout(() => {
  //   setDoctors(dummyDoctors);
  //   setLoading(false);
  // }, 1000);

  const fetchAllDocs = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://telecare-server.onrender.com/api/getDoctors/doctor');
     
      // const data = await response.json();
      setDoctors(response.data);
      // console.log("bshcbhscbhsbchsbcs",response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error as needed
    } finally {
      setLoading(false);

    //  console.log(doctors);
    }
  };

  useEffect(() => {
    fetchAllDocs();


  }, []);

  return (
    <>
      <Navbar />
      {loading && <Loading />}
      {!loading && (
        <section className="container doctors">
          <h2 className="page-heading">Our Doctors</h2>
          {doctors.length > 0 ? (
            <div className="doctors-card-container">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor._id} doctor={doctor} />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </section>
      )}
      <Footer />
    </>
  );
};

export default Doctors;



//  Dummy data for testing
   