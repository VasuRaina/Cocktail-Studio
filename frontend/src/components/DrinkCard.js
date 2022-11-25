import * as React from 'react';
// import { getCocktail } from '../../../backend/controllers/cocktailController';
import axios from 'axios'
import { useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/system';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DrinkCard() {
  const [drink, setDrink] = useState(
    {
      name: '', 
      imageUrl: 'http://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg', 
      glassware: '', 
      ingredients: [], 
      instructions: '', 
      category: ''
    }
  )
/*
  function getCurrentDrink() {
    while(x < length(dbDrinkList)) {
      setDrink({
        name: dbDrinkList.name,
        imageUrl: dbDrinkList.imageUrl,
        glassware: dbDrinkList.glassware, 
        ingredients: dbDrinkList, 
        instructions: '', 
        category: ''
      })
    }
  }
  */

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return(
      <Container maxWidth="sm">
        <Card id="drinkCard" sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="300"
            image={drink.imageUrl}
            alt="Cocktail Photo"
          />
          <CardContent>
          <Typography id="drinkName" gutterBottom variant="h6" component="div">
          {drink.name}
          </Typography>
          </CardContent>
            <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent id="recipeSection">
          <Typography h3 class="recipeElement">
            Category : {drink.category}
          </Typography>
          <Typography h4 class="recipeElement"> 
            Glass Type : {drink.glassware}
          </Typography>
          <Typography h4 class="recipeElement">
            Ingredients Used : 
            <ul>
              <p>Lager | 16oz</p>
              <p>Tequila | 1.5oz</p>
            </ul>
          </Typography>
          <Typography h4 class="recipeElement">
            Instructions : {drink.instructions}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Container>
  );
}
