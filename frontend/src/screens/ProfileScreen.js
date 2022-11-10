// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import { Grid, Typography } from '@mui/material';
// import { Paper } from '@mui/material';


// export default function ProfileScreen() {
//   return (
//    <div className='Screen' >
//     <div >
//       <
//       <Avatar  alt="" src="" sx={{
//         height :120, 
//         width:120, 
//         marginLeft: 20,
//         marginRight: 'auto',
//       }}
      
//       />
//       Grid item>
//         <Paper>
//       <Typography >Username</Typography>
//       <Typography >Email</Typography>
//       </Paper>
      
//       </Grid>
// </div>
//       </div>
//   );
// }

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import { Typography } from '@mui/material';
import DrinkCard from '../components/DrinkCard';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ProfileScreen() {
  return (
    <div className='Screen'>
     <Box sx={{ flexGrow: 1 , marginTop: 10}}>
     <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item> <Avatar  alt="" src="" sx={{
              height :120, 
              width:120, 
              marginLeft: 20,
              marginRight: 'auto',
            }}
            />
            </Item>
            </Grid>
            <Grid item xs={4}>
              <Item sx={{alignItems: 'left'}}>
                <Typography>Username</Typography>
                <Typography>About</Typography> 

              </Item>
              
              </Grid>
              
        </Grid>
        <Grid item xs={4} ><Typography className='' >Recent Post</Typography></Grid> 
   </Box> 


    <Box sx={{ flexGrow: 1 , margiinTop:5, marginLeft:10, marginRight:10}}>
      <Grid container spacing={2}  sx={{}}>
        <Grid item xs={4}>
          <Item><DrinkCard/></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><DrinkCard/></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><DrinkCard/></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><DrinkCard/></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><DrinkCard/></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><DrinkCard/></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><DrinkCard/></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><DrinkCard/></Item>
          </Grid>
      </Grid>
    </Box>
    </div>
  );
}