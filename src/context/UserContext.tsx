import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iUserForm } from "../pages/login";
import { api } from "../services/api";
import { iUserContext, iUserContextProps, iUserResponse, iUser, iLogin } from "./types";



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

    return (
        <UserContext.Provider value={{ login }}>
            { children }
        </UserContext.Provider>
    )
}