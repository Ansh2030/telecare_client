import React, { useEffect, useState } from "react";
import DoctorCard from "./Card";
import Footer from "../LandingPage/Footer";
import Navbar from "../LandingPage/Navbar";
import "./doctor.css";
// import fetchData from "../helper/apiCall";
import Loading from "./Empty";
import Empty from "./Empty";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true); // Local loading state

  // const fetchAllDocs = async () => {
  //   setLoading(true); // Set loading state to true
  //   try {
  //     const data = await fetchData("/doctor/getalldoctors");
  //     setDoctors(data);
  //   } catch (error) {
  //     console.error("Error fetching doctors:", error);
  //     // Handle error state if needed
  //   } finally {
  //     setLoading(false); // Set loading state to false regardless of success or failure
  //   }
  // };

  // useEffect(() => {
  //   fetchAllDocs();
  // }, []);

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
