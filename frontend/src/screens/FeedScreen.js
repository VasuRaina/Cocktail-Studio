import {Box} from '@mui/material';
import React from 'react';
import PostCard from '../components/PostCard';

const Feed = () => {
  return (
    <div className='Screen'>
    <Box bgcolor='' flex={4} p={2} >
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
    </Box>
    </div>
  )
}

export default Feed