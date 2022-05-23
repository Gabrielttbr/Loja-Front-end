import React from 'react';
import { 
  BrowserRouter ,
  Route,
  Routes
 } from 'react-router-dom';

 import Login from './pages/login/Login';
 import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
   return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element= { <Login/> }/>
        </Routes>
      </BrowserRouter>
   );
}