import { Route, Routes } from "react-router-dom"
import ProtectedRoutes from "../../components/ProtectedRoutes"
import HomePage from "../home"
import LoginPage from "../login"
import RegisterPage from "../register"



const RoutesMain = () => {


    return (
        <Routes>
           <Route path="/" element={<LoginPage />}/>
           <Route path="/register" element={ <RegisterPage />}/>
           <Route element={<ProtectedRoutes />}>
               <Route path="/homepage" element={ <HomePage />} />
           </Route> 
        </Routes>
    )
}


export default RoutesMain