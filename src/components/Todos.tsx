import React, { useEffect } from 'react';
import { Grid, Typography, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GlobalContext } from '../context';
import { TodoProps } from '../types';
import Todo from './Todo';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 3, 2),
    fontSize: '1.5rem'
  }
}));

export default function Todos() {
  const globalReducer = React.useContext(GlobalContext);
  const { state, dispatch } = globalReducer;
  const { todos } = state;
  const classes = useStyles();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(json => {
        dispatch({ type: 'SET_TODOS', payload: json });
      });
  }, []);

  console.log('state', state);

  return (
    <div className={classes.root}>
      {todos && (
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            List of Todos
          </Typography>
          <div className={classes.demo}>
            <List>
              {todos.map((todo: TodoProps) => (
                <Todo key={todo.id} {...todo} />
              ))}
            </List>
          </div>
        </Grid>
      )}
    </div>
  );
}
