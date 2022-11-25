import React from 'react'
import DrinkCardList from '../components/DrinkCardList';
import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Autocomplete, TextField } from '@mui/material';
import { ingredientsList, cocktailNames, glassware } from '../mockData';
// import { getCocktail } from '../backend/controllers/cocktailController';
import axios from 'axios';

const getData = async () => {
	const response = await axios.get(
		`https://famous-quotes4.p.rapidapi.com/random`
	);
};

export default function SearchScreen() {

  // axios get from 'http://localhost:4000/cocktails'
  // const [searchParams, setSearchParams] = useState({name: '', glassware: '', ingreident1: '', ingredient2: '', ingreident3: ''});
  const [searchName, setName] = useState('');
  const [searchGlassware, setGlassware] = useState('');
  const [searchIngredient1, setIngredient1] = useState('');
  const [searchIngredient2, setIngredient2] = useState('');
  const [searchIngredient3, setIngredient3] = useState('');

  // const [id, setId] = useState(1)
  // const [idFromButtonClick, setIdFromButtonClick] = useState(1)
  const [post, setPost] = useState([])

//   useEffect(() => {
//     axios({data: {
//         name : 'ABC'
//       }})
//       console.log("Data is uploaded to req")
//     // .get(`https://jsonplaceholder.typicode.com/posts`)
//     .post(`http://localhost:4000/cocktails/name`) 
//     .then(res => {
//         console.log(res)
//         // setPosts(res.data)
//         setPost(res.data)
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }, [])
const inputRef = useRef(searchName)
const [repo, setRepo] = useState();
  const getRepo = () => {
    // searchName = inputRef.current()
    const userData = {
      name: searchName
    };

         console.log("Data is uploaded to req")
         console.log(userData)
      axios.post('http://localhost:4000/cocktails/name', userData)
      .then(res => {
            console.log("Hi")
            console.log(res.data)
            // setPosts(res.data)
            setRepo(res.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    };
useEffect(()=> getRepo(), [])

  return (
    <div>
      <h2>Search Screen</h2>
        <Box
          display='flex'
          justifyContent='center'
          bgcolor='#edeef1'
          minHeight='100vh'
        >
        <Box
          display='flex'
          flexDirection='column'
          width='100%'
          padding={1}
          bgcolor='white'
        >
        {/* ---->  Box containing dropdowns  <--------- */}
        <Box marginTop={3} display='flex' marginRight={20} marginLeft={30}>
          <Box width='80%'>
            <Autocomplete
              fullWidth
              options={cocktailNames}
              size='small'
              renderInput={(params) => (
                <TextField {...params} label='Choose Name' />
              )}
              onChange={(_event, newValue) => {
                setName(newValue.label);
              }}
            />
          </Box>
        </Box>

        <Box marginTop={2} display='flex' marginRight={20} marginLeft={30}>
          <Box width='80%'>
            <Autocomplete
              fullWidth
              options={glassware}
              size='small'
              renderInput={(params) => (
                <TextField {...params} label='Choose Glassware' />
              )}
              onChange={(_event, newValue) => {
                setGlassware(newValue.label);
              }}
            />
          </Box>
        </Box>

        <Box marginTop={2} display='flex' marginRight={20} marginLeft={30}>
          <Box width='25%' marginRight={2}>
            <Autocomplete
              fullWidth
              options={ingredientsList}
              size='small'
              renderInput={(params) => (
                <TextField {...params} label='Choose Ingredient' />
              )}
              onChange={(_event, newValue) => {
                setIngredient1(newValue.label);
              }}
            />
          </Box>
          <Box width='25%' marginRight={2}>
            <Autocomplete
              fullWidth
              options={ingredientsList}
              size='small'
              renderInput={(params) => (
                <TextField {...params} label='Choose Ingredient' />
              )}
              onChange={(_event, newValue) => {
                setIngredient2(newValue.label);
              }}
            />
          </Box>
          <Box width='25%' marginRight={2}>
            <Autocomplete
              fullWidth
              options={ingredientsList}
              size='small'
              renderInput={(params) => (
                <TextField {...params} label='Choose Ingredient' />
              )}
              onChange={(_event, newValue) => {
                setIngredient3(newValue.label);
              }}
            />
          </Box>
        </Box>

        {/* ---->  Display Selected Ingredients <------ */}
        <Box marginTop={3}>
          {/* Should display result JSON  */}
          {repo && <Typography>{repo}</Typography>}
          {searchName && <Typography>{searchName}</Typography>}
          {searchGlassware && <Typography>{searchGlassware}</Typography>}
          {searchIngredient1 && <Typography>{searchIngredient1}</Typography>}
          {searchIngredient2 && <Typography>{searchIngredient2}</Typography>}
          {searchIngredient3 && <Typography>{searchIngredient3}</Typography>}
        </Box>


        </Box>
        </Box>



        

    </div>
  );
}