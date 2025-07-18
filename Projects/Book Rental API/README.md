# 📚 Book Rental API

A backend system for a small library to manage books, users, and rental operations using Node.js, Express, and PostgreSQL.

---

## 🎯 Features

- 📘 **Books**
  - Add, view, update, and delete books
  - Track availability automatically

- 👤 **Users**
  - Register/login
  - Role-Based Access Control (admin/user)

- 🔄 **Rentals**
  - Rent a book
  - Return a book

- ⏰ **Overdue Check**
  - Mark overdue books via `/maintenance/check-overdue`

---

## 🛠 Tech Stack

- Node.js + Express
- PostgreSQL
- JWT for authentication
- Bcrypt for password hashing
- Dotenv for configuration

---

## 📦 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/Jozef2756x/book-rental-api.git
   cd book-rental-api
