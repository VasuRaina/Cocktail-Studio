import React from 'react'
import DrinkCardList from '../components/DrinkCardList';
import { useState } from 'react';
import { Box, Typography, Autocomplete, TextField } from '@mui/material';
import { ingredientsList } from '../mockData';

export default function SearchScreen() {

    const [ingredient1, setIngredient1] = useState('');
    const [ingredient2, setIngredient2] = useState('');
    const [ingredient3, setIngredient3] = useState('');
    const [ingredient4, setIngredient4] = useState('');

    return (
        <div>
          
            <Box
      display='flex'
      justifyContent='center'
      bgcolor='#edeef1'
      minHeight='100vh'
    >
      <Box
        display='flex'
        flexDirection='column'
        width={1200}
        padding={3}
        bgcolor='white'
      >
        <Box>
          <Typography variant='h4'>Cocktail App</Typography>
        </Box>
        {/* ---->  Box containing dropdowns  <--------- */}
        <Box marginTop={5} display='flex'>
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
          <Box width='25%' marginRight={2}>
            <Autocomplete
              fullWidth
              options={ingredientsList}
              size='small'
              renderInput={(params) => (
                <TextField {...params} label='Choose Ingredient' />
              )}
              onChange={(_event, newValue) => {
                setIngredient4(newValue.label);
              }}
            />
          </Box>
        </Box>
        {/* ---->  Display Selected Ingredients <------ */}
        <Box marginTop={5}>
          {ingredient1 && <Typography>{ingredient1}</Typography>}
          {ingredient2 && <Typography>{ingredient2}</Typography>}
          {ingredient3 && <Typography>{ingredient3}</Typography>}
          {ingredient4 && <Typography>{ingredient4}</Typography>}
        </Box>
      </Box>
    </Box>
            <DrinkCardList/>
        </div>
    );
}