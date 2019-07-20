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
import { TodoProps } from '../types';

export default function Todo(todo: TodoProps) {
  const { title, completed } = todo;
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
        <IconButton edge="end" aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
