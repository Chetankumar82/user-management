# 🚀 Reqres User Management App  
**Created by Chetan Kumar**

## 📌 Overview
This is a **React-based user management application** that integrates with the [Reqres API](https://reqres.in/) to handle user authentication, listing, editing, and deletion. It uses token-based login and demonstrates client-side routing, protected routes, and form handling. A **search feature** is implemented to filter users by their names or email, and **React Toastify** is used for notifications on login, success, and error messages.

---

## 🔥 Features

- ✅ **User Login** (with token authentication)
- 📄 **Paginated User Listing**
- ✏️ **Edit User Details**
- ❌ **Delete Users**
- 🔍 **Search Users** (filter by name or email)
- 🔒 **Protected Routes** (users cannot access internal pages without logging in)
- 📱 **Responsive Design** (mobile-friendly UI)
- 🔔 **React Toastify** (for notifications like success, error, and information alerts)

---

## 🛠️ Tech Stack

- ⚛️ **React.js** – Frontend framework
- 🌐 **Axios** – For API calls
- 🔁 **React Router DOM** – For navigation and routing
- 🎨 **Tailwind CSS / Custom CSS** – For styling
- 🔔 **React-Toastify** – For toast notifications
- 🔍 **Search Feature** – To filter users by name or email

---

## 📥 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/reqres-user-management.git
cd reqres-user-management
```

### 2️⃣ Install Dependencies
Make sure you have Node.js and npm installed.

```bash
npm install
```

This will install all required packages including:

```bash
npm install axios react-router-dom react-toastify
```

### 3️⃣ Start the Development Server
```bash
npm start
```

The app will run at: [http://localhost:3000](http://localhost:3000)

---

## 🔐 Authentication Details

Use the following test credentials to log in (as provided by Reqres):

- **Email:** `eve.holt@reqres.in`  
- **Password:** `cityslicka`

> Note: No password validation is done client-side. The Reqres API returns a token for this static login.

---

## 🌍 Live Demo 

[https://reqres-usermanagement.vercel.app/login]

---

## 📡 API Endpoints Used

| Feature         | Method | Endpoint                                  |
|-----------------|--------|-------------------------------------------|
| Login           | POST   | `https://reqres.in/api/login`             |
| Get Users       | GET    | `https://reqres.in/api/users?page=1`      |
| Update User     | PUT    | `https://reqres.in/api/users/{id}`        |
| Delete User     | DELETE | `https://reqres.in/api/users/{id}`        |

---

## 💡 Notes & Assumptions

- Token is stored in `localStorage` for authentication persistence.
- Logout functionality clears the stored token.
- The app includes a **search feature** to filter users by their name or email.
- Since Reqres is a mock API:
  - No real data is saved or updated.
  - Changes are simulated on the client-side for demo purposes.
- The app uses **React Toastify** for showing notifications such as success messages when actions like login, edit, or delete are successful.

---



### Search Feature in Action
The **Search** feature allows users to filter the list of users by their **name** or **email**. As you type in the search bar, the list dynamically updates, showing only the users that match the search query. The search bar is easily accessible at the top of the user list section.

### Notifications with React Toastify
Toast notifications are used in the following scenarios:
- **Login**: Shows a success message when login is successful.
- **Edit User**: Displays a success message when a user is updated.
- **Delete User**: Shows a confirmation message when a user is deleted.

To configure and use **React Toastify** in the project, the following steps were implemented:
1. **Global Toast Container**: Added to the `App.js` for global accessibility.
2. **Toast Notifications**: Triggered on login, edit, and delete actions to provide feedback.



