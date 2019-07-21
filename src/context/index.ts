import React from 'react';
import { TodoProps } from '../types';

type Action = {
  type: string;
  payload: any;
};

type State = {
  todos: TodoProps[];
};

const initialState: State = {
  todos: []
};

/// _____ GLOBAL CONTEXT FOR REDUCER ____________________
export const GlobalContext = React.createContext<State | any>(initialState);

/// __________________ GLOBAL REDUCER ____________________
export function globalReducer(state: State, action: Action): State {
  const { type, payload } = action;
  const { todos } = state;

  switch (type) {
    case 'SET_TODOS':
      return {
        ...state,
        todos: payload
      };
    case 'DELETE_TODOS':
      return {
        ...state,
        todos: [...todos].filter(todo => todo.id !== payload)
      };
    default:
      return state;
  }
}
