# Todo App

Простое Todo-приложение на React + Node.js + MongoDB с Docker и CI/CD.

## 🚀 Возможности

- ✅ Добавление задач
- ✅ Отметка выполненных задач
- ✅ Удаление задач
- ✅ Красивый современный UI
- ✅ MongoDB для хранения данных
- ✅ Docker контейнеризация
- ✅ GitHub Actions для CI/CD

## 🛠 Технологии

- **Frontend**: React 19 + TypeScript + Vite
- **Backend**: Node.js + Express + Mongoose
- **База данных**: MongoDB
- **Контейнеризация**: Docker + Docker Compose
- **CI/CD**: GitHub Actions

## 📋 Требования

- Node.js 18+
- Docker и Docker Compose
- MongoDB (локально или в Docker)

## 🚀 Локальный запуск

### 1. Клонирование и установка зависимостей

```bash
git clone <your-repo-url>
cd wf-app
npm install
```

### 2. Настройка переменных окружения

Создайте файл `.env` в корне проекта:

```env
MONGODB_URI=mongodb://localhost:27017/todo-app
PORT=5000
```

### 3. Запуск MongoDB

```bash
# Через Docker
docker run -d -p 27017:27017 --name mongodb mongo:6

# Или установите MongoDB локально
```

### 4. Запуск backend

```bash
npm run server:dev
```

Backend будет доступен на `http://localhost:5000`

### 5. Запуск frontend

```bash
npm run dev
```

Frontend будет доступен на `http://localhost:3000`

## 🐳 Запуск через Docker

### Разработка

```bash
docker-compose up -d
```

Сервисы будут доступны:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`
- MongoDB: `localhost:27017`

### Продакшен

```bash
docker-compose -f docker-compose.prod.yml up -d
```

## 🔧 Скрипты

- `npm run dev` - запуск frontend в режиме разработки
- `npm run build` - сборка frontend
- `npm run server` - запуск backend
- `npm run server:dev` - запуск backend с nodemon
- `npm run lint` - проверка кода

## 🚀 Деплой на VPS

### 1. Настройка GitHub Secrets

Добавьте в настройки репозитория:

- `DOCKER_USERNAME` - ваш Docker Hub username
- `DOCKER_PASSWORD` - ваш Docker Hub password/token
- `VPS_HOST` - IP адрес вашего VPS
- `VPS_USERNAME` - username для SSH
- `VPS_SSH_KEY` - приватный SSH ключ

### 2. Настройка VPS

```bash
# Установка Docker и Docker Compose
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Создание директории для приложения
sudo mkdir -p /opt/todo-app
sudo chown $USER:$USER /opt/todo-app

# Копирование docker-compose.prod.yml
# Настройка переменных окружения
```

### 3. Автоматический деплой

При пуше в `main` ветку:

1. Запускается CI (тесты, линтинг, сборка)
2. Собираются Docker образы
3. Образы пушатся в Docker Hub
4. Автоматически деплоится на VPS

## 📁 Структура проекта

```
wf-app/
├── src/                    # React компоненты
│   ├── components/        # UI компоненты
│   ├── App.tsx           # Главный компонент
│   └── main.tsx          # Точка входа
├── server/                # Backend код
│   └── index.js          # Express сервер
├── .github/workflows/     # GitHub Actions
├── Dockerfile*            # Docker конфигурация
├── docker-compose*.yml    # Docker Compose
└── README.md              # Документация
```

## 🔒 Безопасность

- CORS настроен для разработки
- Валидация входных данных
- Обработка ошибок
- Переменные окружения для конфиденциальных данных

## 📝 API Endpoints

- `GET /api/todos` - получить все задачи
- `POST /api/todos` - создать новую задачу
- `PUT /api/todos/:id` - обновить задачу
- `DELETE /api/todos/:id` - удалить задачу

## 🤝 Вклад в проект

1. Fork репозитория
2. Создайте feature ветку
3. Внесите изменения
4. Создайте Pull Request

## 📄 Лицензия

MIT License
