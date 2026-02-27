import { nanoid } from "nanoid";

export interface Todo {
  id: string;
  title: string;
  checked: boolean;
}

const g = globalThis as unknown as { todos: Todo[] };

if (!g.todos) {
  g.todos = [{ id: nanoid(), title: "My todo", checked: false }];
}

export const todos: Todo[] = g.todos;
