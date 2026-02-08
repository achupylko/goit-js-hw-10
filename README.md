# GoIT Homework — JavaScript Module 10

## 📘 Опис проєкту

Цей репозиторій містить домашні завдання з **модуля 10 JavaScript** курсу
**Fullstack Web Developer** від **GoIT**.

Модуль присвячений роботі з **асинхронним кодом**, **таймерами** та **Promise**,
що є фундаментальними концепціями сучасної JavaScript-розробки.

---

## 🎯 Результати навчання (Module 10)

Після опрацювання матеріалів модуля ти:

- Розумієш різницю між **синхронним** та **асинхронним** кодом.
- Вмієш відкладати виконання функцій за допомогою:
  - `setTimeout()`
  - `setInterval()`
- Розумієш, що таке **Promise** та як вони працюють.
- Використовуєш основні методи класу `Promise`:
  - `then()`
  - `catch()`
  - `finally()`
  - `Promise.all()`
  - `Promise.race()`

---

## 🧩 Структура проєкту

```
goit-js-hw-10/
│
├── .github/
├── assets/
├── src/
│   ├── css/
│   ├── img/
│   ├── js/
│   │   ├── 1-timer.js
│   │   └── 2-snackbar.js
│   │
│   ├── 1-timer.html
│   ├── 2-snackbar.html
│   └── index.html
│
├── .editorconfig
├── .gitignore
├── .prettierrc.json
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 📂 Домашні завдання

### ✅ Завдання 1 — Timer

**Мета:** навчитися працювати з таймерами та асинхронним виконанням коду.

**Ключові навички:**

- Використання `setTimeout` / `setInterval`
- Контроль часу виконання
- Робота з датами
- Маніпуляція DOM

---

### ✅ Завдання 2 — Snackbar

**Мета:** закріпити роботу з **Promise** та обробкою результатів асинхронних
операцій.

**Ключові навички:**

- Створення Promise
- Обробка успішного виконання (`resolve`)
- Обробка помилок (`reject`)
- Ланцюжки `.then().catch().finally()`

---

## 🧠 Використані технології

- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **Promises**
- **Async patterns**
- **Node.js**
- **NPM**
- **Vite**
- **Git / GitHub**
- **Prettier**

---

## 🚀 Як запустити проєкт

### 1️⃣ Перевір Node.js

```bash
node -v
npm -v
```

### 2️⃣ Встанови залежності

```bash
npm install
```

### 3️⃣ Запусти dev-сервер

```bash
npm run dev
```

### 4️⃣ Відкрий у браузері

Зазвичай Vite запускає проєкт за адресою:

http://localhost:5173

---

## 💡 Best Practices

✅ Завжди обробляй помилки Promise через `.catch()`  
✅ Уникай callback hell — використовуй Promise або `async/await`  
✅ Очищай інтервали через `clearInterval()`  
✅ Контролюй життєвий цикл таймерів

---

## 👨‍💻 Автор

**Артем Чупилко**  
Студент курсу **Fullstack Web Developer** від https://goit.global/ua/
