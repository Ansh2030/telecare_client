import{BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Components/LandingPage/Home';
// import { useAuth } from './Context/authContext';
import Doctor from './Components/Doctors/DoctorPage'
import Login from './Components/Login/Login';
import DoctorApply from './Components/DoctorApply/DoctorApply';
import PatientDetails from './Components/PatientDetails/patient';
import Appointment from './Components/Appointment/Appointment';


function App() {
  // const {user} = useAuth();
  return (
   <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/doctorapply" element={<DoctorApply />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/patientdetails" element={<PatientDetails/>}/>
        <Route path="/appointments" element={<Appointment/>}/>

        
         
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
