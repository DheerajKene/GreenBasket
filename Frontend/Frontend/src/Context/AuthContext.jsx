import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const {AuthDetails, setAuthDetails} = useState({
        isAuthenticated:false,
        Mobile:null,
        token:null
    });

    const login = ({Mobile, Token})=>{
        setAuthDetails({
            isAuthenticated:true,
            Mobile,
            Token
        });

    const logout = ()=>{
        setAuthDetails({
            isAuthenticated:false,
            Mobile:null,
            Token:null
        })
    }    

    }

    
    return <AuthContext.Provider value={{login, logout, AuthDetails}}>{children}</AuthContext.Provider>
}