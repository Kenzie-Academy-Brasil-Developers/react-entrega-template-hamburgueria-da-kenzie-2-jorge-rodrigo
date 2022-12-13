import React from 'react';
import { UserProvider } from './context/UserContext';
import RoutesMain from './pages/routes';



function App() {
  return (
     <UserProvider>
       <RoutesMain />
     </UserProvider>
  );
}

export default App;
