import{BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import { useAuth } from './Context/authContext';

import Login from './Components/Login/Login';


function App() {
  const {user} = useAuth();
  return (
   <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={user?<Home/>:<Login/>}/>
        {/* <Route path="/" element={<Home/>}/> */}
        
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
