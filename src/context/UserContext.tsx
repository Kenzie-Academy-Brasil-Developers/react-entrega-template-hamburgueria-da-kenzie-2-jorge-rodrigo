import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { notifyError } from "../services/toastfy";
import { iUserContext, iUserContextProps, iUserResponse, iUser, iLogin, iRegister } from "./types";


export const UserContext = createContext({} as iUserContext) 


export const UserProvider = ({ children }: iUserContextProps) => {
 
    const [ user, setUser ] = useState<iUser | null>(null) 
    const [ loading, setLoading ] = useState(false)
    const navigate = useNavigate()
 
    
    async function login(dataItem: iLogin) {
        setLoading(true)
        try{     
           const { data } = await api.post<iUserResponse>("/login",dataItem)
           setUser(data.user)
           localStorage.setItem("@TOKEN",JSON.stringify(data.accessToken))
           navigate("/homepage")
        }catch(err : any){
           notifyError(err.response.data)
           setLoading(false)
        }
    }

    const exit = () => {
        localStorage.clear()
        setLoading(false)
    }
    async function register (dataItem: iRegister) {
        setLoading(true)
        try{
            const { data } = await api.post<iUserResponse>("/users",dataItem)
            setUser(null)
            navigate("/")
        }catch(err : any){
           notifyError(err.response.data)
           setLoading(false)
        }finally{
            setLoading(false)
        }
        
    }
    return (
        <UserContext.Provider value={{ login,register,user,loading,exit}}>
            { children }
        </UserContext.Provider>
    )
}