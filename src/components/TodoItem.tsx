interface Todo {
  _id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-content">
        <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo._id, todo.completed)} className="todo-checkbox" />
        <span className="todo-text">{todo.text}</span>
        <span className="todo-date">{formatDate(todo.createdAt)}</span>
      </div>
      <button onClick={() => onDelete(todo._id)} className="delete-button" title="Удалить задачу">
        ×
      </button>
    </div>
  );
}

export default TodoItem;
