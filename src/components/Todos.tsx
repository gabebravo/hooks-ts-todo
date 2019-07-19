import React from 'react';
import { useFetch } from '../hooks/index';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Todos() {
  const todos = useFetch('https://jsonplaceholder.typicode.com/todos', []);
  const createRandomKey = (index: number): string =>
    String(Math.floor(Math.random() * 10000 + 1) + index);

  return (
    <div>
      {todos &&
        todos.map((todo: Todo, index: number) => (
          <div key={createRandomKey(index) + String(index)}>
            <p>Todo: {todo.title}</p>
            <p>Completed: {String(todo.completed)}</p>
            <hr />
          </div>
        ))}
    </div>
  );
}
