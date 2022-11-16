/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
 import Collapse from '@mui/material/Collapse';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Checkbox } from '@mui/material';

//import data from '../mockData';
import data from '../mockData';



const ExpandMore = styled((props) => {
            const { expand, ...other } = props;
  return <IconButton {...other} />;
          })(({ theme, expand }) => ({
          transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
          const [expanded, setExpanded] = React.useState(false);

            const handleExpandClick = () => {
            setExpanded(!expanded);
  };

    return(
  

<>
{ data.cardData.map((item, index) => {
                return (
            <Card id="drinkCard" sx={{width: 300}}>
              <CardMedia
                  component="img"
                  height="140"
                  image={item.img}// Change to database photo location
                  alt="Cocktail Photo"
              />
              <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                      {item.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      Cocktail Description
                  </Typography>
              </CardContent>
              <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                  <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red'}}/>} />
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
          <CardContent>
           
            {item.description}
           
          </CardContent>
              </Collapse>
          </Card>
   
              
                
              
              
       )})}</>

          

    
     

);


}