type TodoItemProps = {
  item: ObjectType;
  deleteTodos(id: number): void;
};

type ObjectType = {
  text: string;
  key: number;
};

type AddTodoProps = {
  todos: ObjectType[];
  setTodos(todos: any): void;
};
