import React, { createContext, useState, ReactNode } from "react";

// Definindo o tipo de uma tarefa
interface Todo {
  id: number;
  name: string;
  email: string;
  done: boolean;
  notes: string;
}

// Definindo o tipo do contexto
interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
  updateTodo: (todo: Todo) => void;
}

// Criando o contexto com valor padrão
const TodoContext = createContext<TodoContextType | undefined>(undefined);

interface TodoProviderProps {
  children: ReactNode;
}

// Implementando o provedor do contexto
export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (todo: Todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
