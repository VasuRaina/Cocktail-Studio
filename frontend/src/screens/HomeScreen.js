// import React from 'react'


// const HomeScreen = () => {
//   return (
//     <h1>HomeScreen</h1>
//   )
// }

// export default HomeScreen;

import React from 'react'
import PostCard from '../components/PostCard';
import { Box } from '@mui/material';

function HomeScreen() {
    return (
        <div className ='Screen'>
             <Box bgcolor='' flex={4} p={2} >
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
    </Box>
        </div>
    );
}

export default HomeScreen;

