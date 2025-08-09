import { useState } from "react";

interface TodoFormProps {
  onAdd: (text: string) => void;
}

function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Добавить новую задачу..." className="todo-input" />
      <button type="submit" className="todo-button">
        Добавить
      </button>
    </form>
  );
}

export default TodoForm;
