# 🚀 ChatManager API - Chat Management System (Express + MongoDB)

## 📌 Overview

This project is a backend-driven **Chat Management System** built using **Node.js, Express.js, and MongoDB (Mongoose)**. It demonstrates the implementation of **RESTful APIs** to perform full CRUD (Create, Read, Update, Delete) operations on chat data.

The application simulates a real-world messaging backend where users can create conversations, view chats, edit messages, and delete them.

---

## 🎯 Features

* 📝 Create a new chat
* 📖 Read/view all chats
* ✏️ Update existing chats
* ❌ Delete chats
* 🔗 RESTful API architecture
* 💾 MongoDB database integration using Mongoose
* ⚡ Clean and modular Express routing

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **ODM:** Mongoose
* **API Style:** REST

---

## 📂 Project Structure

```
.
├── models/
│   └── chat.js
├── public/
│   └── style.css
├── views/
│   ├── delete.ejs
│   ├── edit.ejs
│   ├── index.ejs
│   └── new.ejs
├── index.js
├── init.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Manav-Mulchandani/ChatManager-API.git
cd ChatManager-API
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

### 4. Start the server

```bash
npm start
```

Server will run on:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### 🔹 Create Chat

```
POST /chats
```

Creates a new chat entry.

### 🔹 Get All Chats

```
GET /chats
```

Fetches all chat records.

### 🔹 Update Chat

```
PATCH /chats/:id
```

Updates a specific chat by ID.

### 🔹 Delete Chat

```
DELETE /chats/:id
```

Deletes a specific chat by ID.

---

## 📊 Sample Data Model

```js
{
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        maxLength:500
    },
    created_at:{
        type:Date,
        required:true
    }
}
```

---

## 🧪 Testing

You can test all endpoints using:

* Postman
* Thunder Client (VS Code Extension)
* Hoppscotch

---

## 📈 Learning Outcomes

* Understanding of RESTful API design
* Hands-on experience with MongoDB and Mongoose
* Backend architecture using Express.js
* CRUD operations in real-world applications

---

## 🚀 Future Improvements

* Add authentication (JWT)
* Real-time chat using WebSockets (Socket.io)
* Frontend integration (React)
* Pagination and filtering
* User-based chat ownership

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📜 License

This project is open-source and available under the MIT License.

---
