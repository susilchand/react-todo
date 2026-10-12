import { create } from "zustand";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];

  addTodo: (text: string) => void;
  markedTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
 
}

export const useTodoStore = create<TodoState>((set) => ({

  todos: [],

 
  addTodo: (text) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now(),
          text,
          completed: false,
        },
      ],
    })),


  markedTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo,
      ),
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }))

}));