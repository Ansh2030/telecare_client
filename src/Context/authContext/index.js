import React from "react";
import { useContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";


const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const[user, setUser] = useState(null);
    const[logedin,setLogedin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, initializeUser);
        return unsub;
    },[]);

    async function initializeUser(users){
        if(users)
        {
            setUser(users);
            setLogedin(true);
        }
        else{
            setUser(null);
            setLogedin(false);

        }
        setLoading(false);
    }



    const value={
        user,
        logedin,
        loading
    }

    return (
        <AuthContext.Provider value = {value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}


