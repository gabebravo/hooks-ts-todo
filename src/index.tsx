import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';
import { GlobalContext, globalReducer } from './context';
import { State } from './types';

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

// root state wrapper will provide context for all children to access the global reducer
const StateWrapper: React.FC = ({ children }): JSX.Element => {
  const initialState: State = React.useContext(GlobalContext); // initialize context
  const [state, dispatch] = React.useReducer(globalReducer, initialState); // use context as the state for the reducer instance

  return (
    // wrapper component
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StateWrapper>
      <App />
    </StateWrapper>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
