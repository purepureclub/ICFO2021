import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(2),
  },
}));

const data = [
  {
    name: '7時',
    people: 23,
  },
  {
    name: '8時',
    people: 16,
  },
  {
    name: '9時',
    people: 10,
  },
  {
    name: '10時',
    people: 8,
  },
  {
    name: '11時',
    people: 18,
  },
  {
    name: '12時',
    people: 40,
  },
  {
    name: '13時',
    people: 34,
  },
  {
    name: '14時',
    people: 15,
  },
  {
    name: '15時',
    people: 7,
  },
  {
    name: '16時',
    people: 5,
  },
  {
    name: '17時',
    people: 18,
  },
  {
    name: '18時',
    people: 24,
  },
  {
    name: '19時',
    people: 30,
  },
];

const Forecast = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.title}>
        <Typography variant="h4" gutterBottom>今日の来客予想</Typography>
      </div>
      <BarChart
        width={600}
        height={360}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis unit="人" />
        <Tooltip />
        <Bar dataKey="people" fill="#90caf9" />
      </BarChart>
    </>
  );
};

export default Forecast;
