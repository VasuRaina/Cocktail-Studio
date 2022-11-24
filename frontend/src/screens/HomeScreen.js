// import React from 'react'


// const HomeScreen = () => {
//   return (
//     <h1>HomeScreen</h1>
//   )
// }

// export default HomeScreen;


import React from 'react'
import DrinkCard from '../components/DrinkCard';
import { ImageList, ImageListItem } from '@mui/material';

function HomeScreen() {
    return (
       
            <ImageList  variant="masonry" cols={4} gap={8} rowHeight={3}>
         <ImageListItem>
        <DrinkCard />
        </ImageListItem>
       
   </ImageList>
      
    );
}

export default HomeScreen;

