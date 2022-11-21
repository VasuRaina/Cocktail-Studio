import * as React from 'react';
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
  const [drinks, setDrink] = useState([
    {
      name: '', 
      imageUrl: '', 
      glassware: '', 
      ingredients: [], 
      instructions: '', 
      category: ''
    }
  ])
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
            image="http://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg" // Change to database photo location
            alt="Cocktail Photo"
          />
          <CardContent>
          <Typography id="drinkName" gutterBottom variant="h6" component="div">
          110 in the shade
          </Typography>
          </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
              <FavoriteIcon />
              </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
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
            Category : Beer
          </Typography>
          <Typography h4 class="recipeElement"> 
            Glass Type : Beer Glass
          </Typography>
          <Typography h4 class="recipeElement">
            Ingredients Used : 
            <p>Lager | 16oz</p>
            <p>Tequila | 1.5oz</p>
          </Typography>
          <Typography h4 class="recipeElement">
            How to Make : Drop shooter in glass. Fill with beer
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Container>
  );
}