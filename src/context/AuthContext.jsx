import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () =>{
    const context = useContext(AuthContext);

    if(!context){
         throw new Error("El useAuth deb eser utilizado dentro del proveedor")
    }

    return context;
}

export const AuthProvider = ({children}) =>{
    const[user,setUser] = useState(null)
    const[loading,setLoading] = useState(true)

     useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(firebaseUser)=>{
            setUser(firebaseUser)
            setLoading(false);
        },[])

        return unsubscribe;
    },[])

    const login = (email,password) =>{
        
         return signInWithEmailAndPassword(auth,email,password);
       
    }

    const logout = async() => {
        return signOut(auth);
    }

    return(
        <AuthContext.Provider value={{user,loading,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}