import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Icon} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 240,
  },
  media: {
    height: 140,
  },
}));

const RecipeCard = ({title, description, image, viewRecipe}) => {
  const classes = useStyles();
  const [favorite, setFavorite] = useState(false);
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={viewRecipe}>
        <CardMedia
          className={classes.media}
          image={`./images/photo/${image}`}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => setFavorite(!favorite)}>
          <Icon>{favorite ? 'favorite' : 'favorite_border'}</Icon>
        </IconButton>
        <IconButton aria-label="share">
          <Icon>share</Icon>
        </IconButton>
      </CardActions>
    </Card>
  );
};

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  viewRecipe: PropTypes.func.isRequired,
};

export default RecipeCard;
