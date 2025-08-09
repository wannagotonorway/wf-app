import TodoItem from "./TodoItem";

interface Todo {
  _id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return <div className="empty-state">Нет задач. Добавьте первую!</div>;
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TodoList;
