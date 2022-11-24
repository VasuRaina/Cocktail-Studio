import React from 'react';
import './App.css';
// import Header from './components/Header';
import Footer from './components/Footer'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
 import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';
import LogInScreen from './screens/LoginScreen';
import SearchScreen from './screens/SearchScreen';
import SignupScreen from './screens/SignUpScreen';
import ProfileScreen from './screens/ProfileScreen';
import FeedScreen from './screens/FeedScreen'
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
  
    
<>
   <BrowserRouter>
   <Header/>
   <Routes>
     <Route path = '/' element={<HomeScreen/>}/>
     <Route path = 'Post' element={<PostScreen/>}/>
     <Route path = 'Search' element={<SearchScreen/>}/>
     <Route path = 'LogIn' element={<LogInScreen/>}/>
     <Route path = 'Profile' element={<ProfileScreen/>}/>
     <Route path = 'Dashboard' element={<HomeScreen/>}/>
     <Route path = 'LogOut' element={<LogInScreen/>}/>
     <Route path = 'Feed' element={<FeedScreen/>}/> 
     <Route path = '/SignUp' element={<SignupScreen/>}/>
   
      
     
   </Routes>
   </BrowserRouter>
   <Footer/>

   </>
    
   
  );
}

export default App;
