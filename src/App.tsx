import React from 'react';
import { UserProvider } from './context/UserContext';
import RoutesMain from './pages/routes';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
     <UserProvider>
       <RoutesMain />
       <ToastContainer />
     </UserProvider>
  );
}

export default App;
