import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Container, Typography, AppBar, Toolbar, Drawer, List, ListItem, ListItemText, ListItemIcon, Icon} from '@material-ui/core';
import Plan from './components/Plan';
import Forecast from './components/Forecast';
import Recipe from './components/Recipe';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundImage: 'linear-gradient(90deg, rgba(62,151,233,.2) 50%, transparent 50%), linear-gradient(rgba(62,151,233,.2) 50%, transparent 50%)',
    backgroundSize: '25px 25px',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingLeft: drawerWidth,
  },
}));

const drawerWidth = 240;

const menu = [
  {id: 'plan', text: '今日の製パン計画', icon: 'event'},
  {id: 'forecast', text: '今日の来客予想', icon: 'timeline'},
  {id: 'recipe', text: 'パンのレシピ', icon: 'bakery_dining'},
];

const App = () => {
  const classes = useStyles();
  const [selectedMenu, setSelectedMenu] = useState('plan');
  return (
    <Container maxWidth="md">
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            ぴゅあのベーカリー
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {menu.map((item) => (
              <ListItem button key={item.id} onClick={() => setSelectedMenu(item.id)}>
                <ListItemIcon><Icon>{item.icon}</Icon></ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {selectedMenu === 'plan' && <Plan />}
        {selectedMenu === 'forecast' && <Forecast />}
        {selectedMenu === 'recipe' && <Recipe />}
      </main>
    </Container>
  );
};

export default App;
