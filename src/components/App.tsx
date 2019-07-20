import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { GlobalContext, globalReducer } from '../context';
import Todos from './Todos';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

// root state wrapper will provide context for all children to access the global reducer
const StateWrapper: React.FC = ({ children }): JSX.Element => {
  const initialState = React.useContext(GlobalContext); // initialize context
  const [state, dispatch] = React.useReducer(globalReducer, initialState); // use context as the state for the reducer instance

  return (
    // wrapper component
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

const App: React.FC = (): JSX.Element => {
  const classes = useStyles();
  return (
    <StateWrapper>
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
    </StateWrapper>
  );
};

export default App;
