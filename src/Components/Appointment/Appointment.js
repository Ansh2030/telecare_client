import React, { useEffect, useState } from "react";
import Empty from "../Doctors/Empty";
import Footer from "../LandingPage/Footer";
import Navbar from "../LandingPage/Navbar";
import Loading from "../Doctors/Loading";
import "./Appointment.css";
import { useAuth } from "../../Context/authContext";
import { createRoom } from "../../api";
// import DailyIframe from '@daily-co/daily-js';


import axios from "axios";

const Appointments = () => {
  const { user, logedin } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  //  const [roomUrl, setRoomUrl] = useState(""); // State to store room URL
// const [transcripts, setTranscripts] = useState([]);
// const callEl = useRef(null);
// const [callFrame, setCallFrame] = useState(null);

  // Dummy userId for testing
  // const userId = "doc1";

  const fetchAppoint = async () => {
    const d = await axios.post(
      "https://telecare-server.onrender.com/api/appoint/getappointment",
      {
        user: user.email,
      }
    );
    console.log(d);
    setAppointments(d.data);
  };
// eslint-disable-next-line
  useEffect(() => {
    console.log(logedin);
    setLoading(true);
    fetchAppoint();

    setLoading(false);
    // eslint-disable-next-line
  },[] );

  const complete = async (ele) => {
    try {
      const roomData = await createRoom();
      console.log(roomData.url); // Log room data to check the response

    
      // setRoomUrl(roomData.url); // Set the room URL

      // sending the update appointment api

        await axios.post("https://telecare-server.onrender.com/api/appoint/update",{
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




    // Set up the Daily.co call frame for transcription
    // useEffect(() => {
    //   if (roomUrl) {
    //     const frame = DailyIframe.createFrame(callEl.current, {
    //       iframeStyle: { width: '100%', height: '100%' }
    //     });
  
    //     frame.join({ url: roomUrl });
  
        
    //     frame.on('app-message', (message) => {
    //       if (message?.fromId === 'transcription' && message.data?.is_final) {
    //         setTranscripts(prevTranscripts => [
    //           ...prevTranscripts,
    //           `${message.data.user_name}: ${message.data.text}`
    //         ]);
    //       }
    //     });
  
    //     setCallFrame(frame);
  
    //     return () => {
    //       frame.leave();
    //     };
    //   }
    // }, [roomUrl]);
  
    // const startTranscription = () => {
    //   callFrame.startTranscription();
    //   setTranscripts(prevTranscripts => [...prevTranscripts, "Transcription started"]);

    // };
  
    // const stopTranscription = () => {
    //   callFrame.stopTranscription();
    //   setTranscripts(prevTranscripts => [...prevTranscripts, "Transcription stopped"]);
    // };

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
                      {user.email===ele.docemail ? (
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
                            disabled={ele.link === ""}
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


{/* {roomUrl && (
        <div style={{ margin: '20px', padding: '20px', backgroundColor: '#333', borderRadius: '10px' }}>
          <div ref={callEl} style={{ width: '100%', height: '56vw', position: 'relative' }}></div>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <button onClick={startTranscription} style={{ padding: '10px 20px', fontSize: '16px', border: 'none', cursor: 'pointer', margin: '0 10px', borderRadius: '5px', backgroundColor: 'green', color: 'white' }}>
              Start transcription
            </button>
            <button onClick={stopTranscription} style={{ padding: '10px 20px', fontSize: '16px', border: 'none', cursor: 'pointer', margin: '0 10px', borderRadius: '5px', backgroundColor: 'red', color: 'white' }}>
              Stop transcription
            </button>
          </div>
          {transcripts.map((transcript, index) => (
            <p key={index} style={{ margin: '0 0 10px', color: 'white' }}>{transcript}</p>
          ))}
        </div>
      )} */}



      <Footer />
    </>
  );
};

export default Appointments;
