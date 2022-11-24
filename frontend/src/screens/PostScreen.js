import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const theme = createTheme();

function PostScreen() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);
    
  // line 91 <LockOutlinedIcon />
    return (
      <div className='Screen'>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: 'none', height:90 }}
        onChange={e => setSelectedImage(e.target.files[0])}
      />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom :'70px',
              height: 'auto',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
  
            </Avatar>
            <Typography component="h1" variant="h5">
              Post | Cocktail Studio
            </Typography>
            <Box component="form" marginBottom={5} marginTop={5}>
              <TextField
                margin="40px"
               
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                autoComplete="description"
                autoFocus
             
              />   
           </Box> 
           <label htmlFor="select-image">
        <Button variant="contained" color="primary" component="span">
          Upload Image
        </Button>
      </label>
      {imageUrl && selectedImage && (
        <Box mt={2} textAlign="center">
          <div>Image Preview:</div>
          <img src={imageUrl} alt={selectedImage.name} height="200px" />
        
              
          </Box>
      )}
       </Box>   
      </Container>
      </ThemeProvider>
      </div>
    );
  }
  
  
 export default PostScreen;