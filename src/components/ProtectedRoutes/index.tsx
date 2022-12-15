import { useContext } from "react"
import {  Navigate, Outlet } from "react-router-dom"
import { CartProvider } from "../../context/CartContext"
import { UserContext } from "../../context/UserContext"




const ProtectedRoutes = () => {
  const { user } = useContext(UserContext)
   
    if(!user){
      localStorage.clear()
    }

    return (
        <>
         {user ? <CartProvider> <Outlet /> </CartProvider> : <Navigate to="/"/>}
        </>
    )
}


export default ProtectedRoutes