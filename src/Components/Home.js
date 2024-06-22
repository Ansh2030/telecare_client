import React from 'react'
// import { useAuth } from '../../Context/authContext';
// import { doSignOut } from '../../Firebase/auths';
import { useAuth } from '../Context/authContext';
import { doSignOut } from '../Firebase/auths';
import { useNavigate } from 'react-router-dom';


function Home() {
  
 
  const {user, logedin} = useAuth();
  const navigate = useNavigate();
  return (
    <div>
    
      {
        logedin?
        <>
        
         <button onClick={()=>{ doSignOut().then(()=>{ navigate('/')})} }>Logout</button>
         <div> {user.email}</div>
        </>:<>
         hii this is home nd u r not logged in 
        </>
      }
   
        
    </div>
  )
}

export default Home
