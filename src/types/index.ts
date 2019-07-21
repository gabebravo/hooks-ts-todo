export type TodoProps = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type Action = {
  type: string;
  payload: any;
};

export type State = {
  todos: TodoProps[];
};
