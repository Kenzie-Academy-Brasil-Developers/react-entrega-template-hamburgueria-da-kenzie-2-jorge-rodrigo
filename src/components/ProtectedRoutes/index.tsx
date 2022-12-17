import { useContext } from "react"
import {  Navigate, Outlet } from "react-router-dom"
import { CartProvider } from "../../context/CartContext"
import { UserContext } from "../../context/UserContext"




const ProtectedRoutes = () => {
  const { user,loadingPage } = useContext(UserContext)
 
    if(loadingPage){
      return null
    }

    
    return (
        <>
         {user ? <CartProvider> <Outlet /> </CartProvider> : <Navigate to="/"/>}
        </>
    )
}


export default ProtectedRoutes