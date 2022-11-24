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
import {useState, useEffect} from 'react'
import axios from 'axios';



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
          const [expanded, setExpanded] = useState(false);

            const handleExpandClick = () => {
            setExpanded(!expanded);
  };

const [repo, setRepo] = useState([]);
  const getRepo = () => {
axios.get('http://localhost:4000/cocktails/')
      .then(res => {
            console.log("Hi")
            console.log(res)
            // setPosts(res.data)
            setRepo(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    };
useEffect(()=> getRepo(), [])

    return(
  

<>
{ repo.map((item, index) => (
             <div className='viewCArd' >
               
            <Card key ={index} id="drinkCard" sx={{width: 300, height: 340}}>
              
              <CardMedia
                  component="img"
                  height="140"
                  image={item.pictureUrl}// Change to database photo location
                  alt="Cocktail Photo"
              />
              <CardContent>
                  <Typography gutterBottom variant="h6" component="div" sx={{fontSize:14}}>
                      {item.name}
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
            <Typography key = {index} variant="body2" color="text.secondary">
            {item.description}
        </Typography>  
          </CardContent>
              </Collapse>
          </Card>
          </div>
              
                
              
              
    ))}</>

          

    
     

);


}