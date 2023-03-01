import React from 'react';
import { BrowserRouter ,Router,Routes, Route,} from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/Signup/SignUp';
import Hotels from './components/Hotels.js/Hotels';


function App() {
  return (
    <>
     <Routes> 
      

     
                 <Route  path='/' element={< Home />}></Route>
                 <Route  path='/sign-in' element={<SignIn/>}></Route>
                 <Route  path='/sign-up' element={<SignUp/>}></Route>
                 <Route  path='/hotels' element={<Hotels/>}></Route>
           
         
      
      </Routes>
  
    
     
        
        
     


    </>
  );
}

export default App;
