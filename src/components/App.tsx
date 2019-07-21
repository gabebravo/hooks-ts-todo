import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { GlobalContext } from '../context';
import { TodoProps } from '../types';
import Todos from './Todos';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const App: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const globalReducer = React.useContext(GlobalContext);
  const { dispatch } = globalReducer;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then((json: TodoProps[]) => {
        dispatch({ type: 'SET_TODOS', payload: json });
      });
  }, []);

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              Hooks TypeScript Todos
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <Todos />
      </div>
    </>
  );
};

export default App;
