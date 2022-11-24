
import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import { Favorite, FavoriteBorder, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import Collapse from '@mui/material/Collapse';

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



 const PostCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
  setExpanded(!expanded);
};
  return (
    <div>
        <Card sx={{ margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            2
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVert import imiiscka cimpppi
        //   </IconButton>
        // }
        title="Wild Cat"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image=""
        alt="Paella dish"
      />
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red'}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ArrowDropDownIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
           
          <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography> 
           
          </CardContent>
              </Collapse>
       

    </Card>
    </div>
  )
}
export default PostCard;