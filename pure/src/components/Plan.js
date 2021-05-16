import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box, Icon} from '@material-ui/core';
import Image from 'material-ui-image';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  weatherImage: {
    width: 150,
    height: 150,
    marginRight: 24,
  },
  temperature: {
    display: 'flex',
    alignItems: 'center',
    color: '#444',
  },
  bread: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  breadImage: {
    width: 80,
    height: 80,
  },
  breadText: {
    color: '#444',
  },
}));

const data = [
  {
    weather: '晴れ',
    maxTemperature: '32',
    minTemperature: '22',
    image: 'tenki_mark01_hare.png',
    bread: [
      {name: '食パン', quantity: 1000, unit: '斤', image: 'plain.png'},
      {name: 'すごい食パン', quantity: 5, unit: '斤', image: 'plain2.png'},
      {name: 'フランスパン', quantity: 100, unit: '本', image: 'france.png'},
      {name: 'あんパン', quantity: 500, unit: '個', image: 'anpan.png'},
      {name: 'クロワッサン', quantity: 500, unit: '個', image: 'croissant.png'},
      {name: 'くるみパン', quantity: 1000, unit: '個', image: 'walnut.png'},
    ],
  },
  {
    weather: '雨',
    maxTemperature: '15',
    minTemperature: '12',
    image: 'tenki_mark02_ame.png',
    bread: [
      {name: '食パン', quantity: 10, unit: '斤', image: 'plain.png'},
      {name: 'あんパン', quantity: 20, unit: '個', image: 'anpan.png'},
      {name: 'すごい食パン', quantity: 1, unit: '斤', image: 'plain2.png'},
    ],
  },
  {
    weather: '豪雨',
    maxTemperature: '16',
    minTemperature: '10',
    image: 'tenki_mark03_gouu.png',
    bread: [
      {name: '食パン', quantity: 10, unit: '斤', image: 'plain.png'},
      {name: 'カップケーキ', quantity: 10, unit: '個', image: 'cupcake.png'},
    ],
  },
  {
    weather: '曇り',
    maxTemperature: '27',
    minTemperature: '25',
    image: 'tenki_mark05_kumori.png',
    bread: [
      {name: '食パン', quantity: 1000, unit: '斤', image: 'plain.png'},
      {name: 'すごい食パン', quantity: 5, unit: '斤', image: 'plain2.png'},
      {name: 'フランスパン', quantity: 100, unit: '本', image: 'france.png'},
      {name: 'あんパン', quantity: 800, unit: '個', image: 'anpan.png'},
      {name: 'クロワッサン', quantity: 800, unit: '個', image: 'croissant.png'},
      {name: 'くるみパン', quantity: 800, unit: '個', image: 'walnut.png'},
    ],
  },
  {
    weather: '曇り雨',
    maxTemperature: '27',
    minTemperature: '22',
    image: 'tenki_mark06_kumoriame.png',
    bread: [
      {name: '食パン', quantity: 200, unit: '斤', image: 'plain.png'},
      {name: 'すごい食パン', quantity: 5, unit: '斤', image: 'plain2.png'},
      {name: 'フランスパン', quantity: 100, unit: '本', image: 'france.png'},
      {name: 'あんパン', quantity: 500, unit: '個', image: 'anpan.png'},
      {name: 'クロワッサン', quantity: 500, unit: '個', image: 'croissant.png'},
      {name: 'くるみパン', quantity: 600, unit: '個', image: 'walnut.png'},
    ],
  },
  {
    weather: '雪',
    maxTemperature: '1',
    minTemperature: '-10',
    image: 'tenki_mark08_yuki.png',
    bread: [
      {name: '食パン', quantity: 10, unit: '斤', image: 'plain.png'},
      {name: 'すごい食パン', quantity: 1, unit: '斤', image: 'plain2.png'},
      {name: 'あんパン', quantity: 30, unit: '個', image: 'anpan.png'},
      {name: 'くるみパン', quantity: 50, unit: '個', image: 'walnut.png'},
    ],
  },
  {
    weather: '台風',
    maxTemperature: '27',
    minTemperature: '22',
    image: 'tenki_mark10_taifuu.png',
    bread: [
      {name: 'すごい食パン', quantity: 100, unit: '斤', image: 'plain2.png'},
    ],
  },
];

const Plan = () => {
  const classes = useStyles();
  const day = Math.floor(Math.random() * data.length);
  return (
    <>
      <div className={classes.header}>
        <div className={classes.weatherImage}>
          <Image src={`./images/weather/${data[day].image}`} disableTransition />
        </div>
        <div>
          <Typography variant="h3">
            {new Date().getMonth() + 1}月{new Date().getDate()}日
          </Typography>
          <Typography>{data[day].weather}</Typography>
          <div className={classes.temperature}>
            <Icon>thermostat</Icon>
            <Typography>最低気温：{data[day].minTemperature}℃ / 最高気温：{data[day].maxTemperature}℃</Typography>
          </div>
        </div>
      </div>
      <Box m={4}>
        <Typography variant="h4" gutterBottom>今日の製パン計画</Typography>
        <Box m={2} />
        {data[day].bread.map((item, index) => (
          <div key={item.name} className={classes.bread} >
            <div className={classes.breadImage}>
              <Image imageStyle={{objectFit: 'contain'}} src={`./images/bread/${item.image}`} disableTransition />
            </div>
            <Typography variant="h5" className={classes.breadText}>{item.name}</Typography>
            <Box m={2} />
            <Typography variant="h5" className={classes.breadText}>{item.quantity.toLocaleString()} {item.unit}</Typography>
          </div>
        ))}
      </Box>
    </>
  );
};

export default Plan;
