
// import React from 'react';
// import { Typography, AppBar, Toolbar, Tab, Tabs, ListItem, List } from '@mui/material';
// import LocalBarTwoToneIcon from '@mui/icons-material/LocalBarTwoTone';
// // import { BrowserRouter as Route, Routes, Router } from 'react-router-dom';

// // import HomeIcon from '@mui/icons-material/Home';
// //import './index.css';

// import { BrowserRouter as  Link } from 'react-router-dom';
 


// function header () {

//   const routes = ["/HomeScreen", "/PostScreen", "/SearchScreen", "/LoginScreen"]
// return (
//   <>


// <AppBar position='static'>

//       <Toolbar className='Pname' >
//         <List><ListItem>
//       <Typography classname ='CockStudio' >The CocktailStudio </Typography>
//      < LocalBarTwoToneIcon/>
//      </ListItem>
//      </List>
//      <Tabs className='Tab'>
     
//         <Tab label ="Home" value = {routes[0]} componentts = {Link} to = {routes[0]}
//         />
       
//         <Tab label ="Post" value = {routes[1]} componentts = {Link} to = {routes[1]} />
//         <Tab label ="Search" value = {routes[2]} componentts = {Link} to = {routes[2]}/> 
//         <Tab label ="SignIn/SignUp" value = {routes[3]} componentts = {Link} to = {routes[3]}/> 
//     </Tabs>
//       </Toolbar>
      
// </AppBar>



//  </>
    
// );

// }
// export default header;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
//import LocalBarTwoToneIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import LocalBarTwoToneIcon from '@mui/icons-material/LocalBarTwoTone';

const pages = [ 'Post','Search', 'LogIn', 'Profile'];
const settings = ['Profile', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{textDecoration: "none",backgroundColor: "#e20b0b"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalBarTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            The Cocktail Studio
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                  <Link style={{textDecoration: "none",color:"white"}} to ={`/${page}`}>
                  {page}        
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LocalBarTwoToneIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link style={{textDecoration: "none",color:"white"}} to ={`/${page}`}>{page}</Link>
                
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                  <Link style={{textDecoration: "none",color:"white"}} to ={`/${setting}`}>{setting}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
