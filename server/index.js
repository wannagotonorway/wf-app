const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB подключение
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/todo-app")
  .then(() => console.log("MongoDB подключен"))
  .catch((err) => console.error("Ошибка MongoDB:", err));

// Todo модель
const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Todo = mongoose.model("Todo", todoSchema);

// API маршруты
app.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

app.post("/api/todos", async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ message: "Текст обязателен" });
    }

    const todo = new Todo({ text });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

app.put("/api/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { text, completed } = req.body;

    const todo = await Todo.findByIdAndUpdate(id, { text, completed }, { new: true });

    if (!todo) {
      return res.status(404).json({ message: "Todo не найден" });
    }

    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

app.delete("/api/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);

    if (!todo) {
      return res.status(404).json({ message: "Todo не найден" });
    }

    res.json({ message: "Todo удален" });
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
