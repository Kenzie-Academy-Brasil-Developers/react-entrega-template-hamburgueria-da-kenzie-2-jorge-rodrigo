import { createContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { notifyError } from "../services/toastfy";
import { iUserContext, iUserContextProps, iUserResponse, iUser, iLogin, iRegister, iUserGet } from "../interfaces/types";


export const UserContext = createContext({} as iUserContext) 


export const UserProvider = ({ children }: iUserContextProps) => {
 
    const [ user, setUser ] = useState<iUser | null>(null) 
    const [ loading, setLoading ] = useState(false)
    const [ loadingPage, setLoadingPage ] = useState(true)
    const navigate = useNavigate()
 

    useEffect(()=> {
        
       async function getUser() {
        const token = JSON.parse(`${localStorage.getItem("@TOKEN")}`)
        const id = JSON.parse(`${localStorage.getItem("@USERID")}`)   
        if(!token || token === ''){
            setLoadingPage(false)
            return
        } 
      
        try{
            console.log(token,id)
            if(token !== ''){
            api.defaults.headers.common.authorization = `Bearer ${token}`
            const { data } = await api.get<iUserGet>(`/users/${id}`)
            const body = { email: data.email, name: data.name, id: data.id}
            setUser(body)
            }
         }catch(err){
            localStorage.clear()
         }finally{
            setLoadingPage(false) 
         }
      
       }
        getUser()
    },[])
    
    async function login(dataItem: iLogin) {
        setLoading(true)
        try{     
           const { data } = await api.post<iUserResponse>("/login",dataItem)
           setUser(data.user)
           localStorage.setItem("@TOKEN",JSON.stringify(data.accessToken || null))
           localStorage.setItem("@USERID",JSON.stringify(data.user.id))
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
        <UserContext.Provider value={{ login,register,user,loading,exit,loadingPage,navigate}}>
            { children }
        </UserContext.Provider>
    )
}