import React from 'react'
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import { Typography, AppBar, Toolbar, ListItem, List } from '@mui/material';
import LocalBarTwoToneIcon from '@mui/icons-material/LocalBarTwoTone';
import HomeIcon from '@mui/icons-material/Home';

export default function Header() {
      let activeClassName = "nav-active";
      return (
            <BrowserRouter>
                  <AppBar position="static">
                  <Toolbar className='Pname' >
                  <Typography classname ='CockStudio' ><ListItem>The CocktailStudio</ListItem> </Typography>
                  <LocalBarTwoToneIcon/>
                  <nav>
                        <List className='NavListItem'>
                              <HomeIcon/>
                              <NavLink to="" className={({ isActive }) => isActive ? activeClassName : undefined}>Home</NavLink>
                              <NavLink to="search" className={({ isActive }) => isActive ? activeClassName : undefined}>Search</NavLink>
                              <NavLink to="signin" className={({ isActive }) => isActive ? activeClassName : undefined}>Sign In</NavLink>
                              <NavLink to="signup" className={({ isActive }) => isActive ? activeClassName : undefined}>Sign Up</NavLink>
                        </List>
                  </nav>
                  </Toolbar>
                  </AppBar>
                  <Routes>
                        <Route path="/signup" element={<SignupScreen />} />
                        <Route path="/signin" element={<SigninScreen />} />
                        <Route path="/search" element={<SearchScreen />} />
                        <Route path="/" element={<HomeScreen />} />
                  </Routes>
            </BrowserRouter>            
      );
}