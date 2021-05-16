import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import RecipeCard from './RecipeCard';

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(2),
  },
  cardArea: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    padding: theme.spacing(0, 2, 0, 2),
  },
}));

const data = [
  {id: 'sandwich', title: 'サンドイッチ', description: 'おしゃれな具だくさんサンドイッチ。ぴゅあのベーカリーのイチ押しメニュー！', image: 'sandwich.jpg'},
  {id: 'croissant', title: 'クロワッサン', description: '北海道直送のバターをふんだんに使用したサクサクのクロワッサン。', image: 'croissant.jpg'},
];

const Recipe = () => {
  const classes = useStyles();
  const viewRecipe = () => alert('レシピはヒミツだよ！ by ぴゅあ');
  return (
    <>
      <div className={classes.title}>
        <Typography variant="h4" gutterBottom>パンのレシピ</Typography>
      </div>
      <div className={classes.cardArea}>
        {data.map((item) => (
          <div key={item.id} className={classes.card}>
            <RecipeCard
              title={item.title}
              description={item.description}
              image={item.image}
              viewRecipe={viewRecipe}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Recipe;
