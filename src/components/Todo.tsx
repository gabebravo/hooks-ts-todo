import React from 'react';
import {
  IconButton,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction
} from '@material-ui/core';
import NotesIcon from '@material-ui/icons/Notes';
import DeleteIcon from '@material-ui/icons/Delete';
import { GlobalContext } from '../context';
import { TodoProps } from '../types';

export default function Todo(todo: TodoProps) {
  const { id, title, completed } = todo;
  const globalReducer = React.useContext(GlobalContext);
  const { dispatch } = globalReducer;

  const deleteTodo = (id: number): void => {
    dispatch({ type: 'DELETE_TODOS', payload: id });
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <NotesIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title ? String(title) : null}
        secondary={`Completed: ${String(completed)}`}
      />
      <ListItemSecondaryAction>
        <IconButton
          onClick={() => deleteTodo(id)}
          edge="end"
          aria-label="Delete"
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
