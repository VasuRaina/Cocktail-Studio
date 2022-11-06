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


// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Item from '@mui/material/Grid'

// import DrinkCard from './components/DrinkCard';

//  import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
 
//  import Home from './screens/HomeScreen';
//  import Post from './screens/PostScreen';
//  import Search from './screens/SearchScreen';
 
//  import LogIn from './screens/LoginScreen';


function App() {
  return (
   
//     <Router>
      
//     <Header/>
   
//       <Routes>
//         <Route  path='/HomeScreen' component = {Home}/>
//        <Route path='/PostScreen' component = {Post}/>
//        <Route  path='/SearchScreen' component = {Search}/>
//        <Route  path='/LoginScreen' component = {LogIn}/>
//     </Routes>
//  </Router>
    
 <div className='App'>
   <Header/>
   <Routes>
     <Route path = '/' element={<HomeScreen/>}/>
     <Route path = 'Post' element={<PostScreen/>}/>
     <Route path = 'Search' element={<SearchScreen/>}/>
     <Route path = 'LogIn' element={<LogInScreen/>}/>
     <Route path = '/SignUpScreen' element={<SignupScreen/>}/>
     
     
   </Routes>
   
   <Footer/>
 </div>
  
    
   
  );
}

export default App;
