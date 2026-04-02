# REST Post Management App

A RESTful web application to create, read, update, and delete posts using Express and server-side rendering with EJS.

---

## 🚀 Features

* Create new posts
* View all posts
* Edit existing posts
* Delete posts
* Clean UI for managing content

---

## 🛠 Tech Stack

* **Backend:** Node.js, Express.js
* **Templating:** EJS
* **Middleware:** Method-Override
* **Styling:** CSS

---

## 📦 Installation

```bash
git clone https://github.com/your-username/rest-post-app.git
cd rest-post-app
npm install
```

---

## ▶️ Run Locally

```bash
npm start
```

Open in browser:

```
http://localhost:3000/posts
```

---

## 📌 REST API Routes

| Method | Route           | Description           |
| ------ | --------------- | --------------------- |
| GET    | /posts          | Get all posts         |
| GET    | /posts/new      | Form to create a post |
| POST   | /posts          | Create a new post     |
| GET    | /posts/:id/edit | Form to edit post     |
| PATCH  | /posts/:id      | Update a post         |
| DELETE | /posts/:id      | Delete a post         |

---

## ⚙️ Project Structure

```
project-root/
│
├── views/          # EJS templates
├── public/         # CSS files
├── routes/         # Route handlers (if separated)
├── app.js          # Main server file
└── package.json
```

---

## 📖 What I Learned

* RESTful API design principles
* CRUD operations using Express
* Handling form data and routing
* Method override for PATCH and DELETE
* Building server-rendered UI with EJS

---

## 🔗 Future Improvements

* Add database (MongoDB)
* Authentication (login/signup)
* Flash messages (success/error)
* Deployment (Render / Vercel)

---

## 👨‍💻 Author

Aditya
