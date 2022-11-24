// import React from 'react'


// const HomeScreen = () => {
//   return (
//     <h1>HomeScreen</h1>
//   )
// }

// export default HomeScreen;

import React from 'react'
import DrinkCard from '../components/DrinkCard';
import { Grid, Paper } from '@mui/material';

import { Box } from '@mui/material';

function HomeScreen() {
    return (
        <div className ='Screen'>
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
        <Paper>

        <DrinkCard />
        </Paper>
        </Grid>
        
      </Grid>
    </Box>
   
        </div>
    );
}

export default HomeScreen;

