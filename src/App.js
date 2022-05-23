import React from 'react';
import { 
  BrowserRouter ,
  Route,
  Routes
 } from 'react-router-dom';

 import Login from './pages/login/Login';
 import Home from './pages/home/home';
 import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
   return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element= { <Login/> }/>
            <Route path='/home' element= { <Home/> }/>

        </Routes>
      </BrowserRouter>
   );
}