import React, {useEffect, useRef, useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function SearchBar() {

    const inputRef = useRef(null)

    const[loading, setLoading] = useState(true)
    const[error, setError] = useState('')
    const[drink, setDrink] = useState({})

    useEffect(() => {
        // focus input element 
        inputRef.current.focus()
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setDrink(data.get('searchTerm'))
        /*
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
        */
      };

    return (
        <Container component='main'>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                ref={inputRef}
                
                fullWidth
                id="searchTerm"
                label="Search Cocktail Name :"
                name="searchTerm"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Search
              </Button>

            </Box>


            <div>
                <h4>Returned</h4>
                
            </div>
        </Container>
    );
}