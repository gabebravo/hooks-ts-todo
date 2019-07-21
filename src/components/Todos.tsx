import React from 'react';
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

const Todos: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const globalReducer = React.useContext(GlobalContext);
  const {
    state: { todos }
  } = globalReducer;

  console.log('todos', todos);

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
};

export default Todos;
