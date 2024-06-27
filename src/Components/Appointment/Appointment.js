import React, { useEffect, useState } from "react";
import Empty from "../Doctors/Empty";
import Footer from "../LandingPage/Footer";
import Navbar from "../LandingPage/Navbar";
import Loading from "../Doctors/Loading";
import "./Appointment.css";
import { useAuth } from "../../Context/authContext";
import { createRoom } from "../../api";

import axios from "axios";

const Appointments = (prop) => {
  const { user, logedin } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [roomUrl, setRoomUrl] = useState(""); // State to store room URL

  // Dummy userId for testing
  const userId = "doc1";

  const fetchAppoint = async () => {
    const d = await axios.post(
      "http://localhost:8080/api/appoint/getappointment",
      {
        user: user.email,
      }
    );
    console.log(d);
    setAppointments(d.data);
  };

  useEffect(() => {
    console.log(logedin);
    setLoading(true);
    fetchAppoint();

    // Dummy data for testing
    // const dummyAppointments = [
    //   {
    //     _id: "1",
    //     doctorId: { _id: "doc1", firstname: "John", lastname: "Doe" },
    //     userId: { _id: "user1", firstname: "Jane", lastname: "Smith" },
    //     date: "2024-07-01",
    //     time: "10:00 AM",
    //     createdAt: "2024-06-25T10:00:00.000Z",
    //     updatedAt: "2024-06-25T10:00:00.000Z",
    //     status: "Pending",
    //   },
    //   {
    //     _id: "2",
    //     doctorId: { _id: "doc2", firstname: "Emily", lastname: "Clark" },
    //     userId: { _id: "user2", firstname: "Michael", lastname: "Brown" },
    //     date: "2024-07-02",
    //     time: "11:00 AM",
    //     createdAt: "2024-06-26T11:00:00.000Z",
    //     updatedAt: "2024-06-26T11:00:00.000Z",
    //     status: "Completed",
    //   },
    // ];
    // setAppointments(dummyAppointments);

    setLoading(false);
  }, []);

  const complete = async (ele) => {
    try {
      const roomData = await createRoom();
      console.log(roomData.url); // Log room data to check the response

      // Update appointment status and set room URL
      // const updatedAppointments = appointments.map((appointment) =>
      //   appointment._id === ele._id
      //     ? { ...appointment, status: "Completed", roomUrl: roomData.url }
      //     : appointment
      // );
      // setAppointments(updatedAppointments);
      setRoomUrl(roomData.url); // Set the room URL

      // sending the update appointment api

        const updated = await axios.post("http://localhost:8080/api/appoint/update",{
          patemail:ele.patemail,
        docemail: ele.docemail,
          link: roomData.url
        })


      // Open the room URL in a new tab
      window.open(roomData.url, "_blank");
    } catch (error) {
      console.error("Failed to create room", error);
    }
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <section className="container notif-section">
          <h2 className="page-heading">Your Appointments</h2>
          {appointments.length > 0 ? (
            <div className="appointments">
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Doctor</th>
                    <th>Patient</th>
                    <th>Appointment Date</th>
                    <th>Appointment Time</th>
                    <th>Booking Date</th>
                    <th>Booking Time</th>
                   
                    <th>Action</th>
                  </tr>
                </thead>

                {/* 
                
                
                */}
                <tbody>
                  {appointments.map((ele, i) => (
                    <tr key={ele._id}>
                      <td>{i+1}</td>
                      <td>{ele.docname}</td>
                      {/* <td>{ele.docemail}</td> */}
                      <td>{ele.patname}</td>
                      {/* <td>{ele.patemail}</td> */}
                      <td>{ele.date}</td>
                      <td>{ele.time}</td>
                     
                      {/* <td>{ele.link}</td> */}
                      <td>{ele.createdAt.split("T")[0]}</td>
                      <td>{ele.updatedAt.split("T")[1].split(".")[0]}</td>
                      {/* <td>{ele.status}</td> */}
                      {user.email==ele.docemail ? (
                        <td>
                          <button
                            className={`btn user-btn accept-btn ${
                              ele.status === "Completed" ? "disable-btn" : ""
                            }`}
                            disabled={ele.status === "Completed"}
                            onClick={() => complete(ele)}
                          >
                            Start Session
                          </button>
                        </td>
                      ) : (
                        <td>
                          <button
                            className={`btn user-btn accept-btn ${
                              ele.status === "Completed" ? "disable-btn" : ""
                            }`}
                            disabled={ele.link == ""}
                            onClick={() => window.open(ele.link, "_blank")}
                          >
                            Join Session
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
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

export default Appointments;
