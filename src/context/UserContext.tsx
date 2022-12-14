import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { iUserContext, iUserContextProps, iUserResponse, iUser, iLogin, iRegister } from "./types";



export const UserContext = createContext({} as iUserContext)


export const UserProvider = ({ children }: iUserContextProps) => {

    const [ user, setUser ] = useState<iUser | null>(null) 
    const navigate = useNavigate()

    async function login(dataItem: iLogin) {
        try{
           const { data } = await api.post<iUserResponse>("/login ",dataItem)
           setUser(data.user)
           localStorage.setItem("@TOKEN",JSON.stringify(data.accessToken))
           navigate("/homepage")
        }catch(err){
          console.log(err)
        }
    }

    async function register (dataItem: iRegister) {
        try{
            const { data } = await api.post<iUserResponse>("/users",dataItem)
            setUser(null)
            navigate("/")
        }catch(err){
           console.log(err)
        }
        
    }
    return (
        <UserContext.Provider value={{ login,register }}>
            { children }
        </UserContext.Provider>
    )
}