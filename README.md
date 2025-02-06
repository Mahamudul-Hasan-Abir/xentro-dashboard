# XENTRO Dashboard

## Overview

The **XENTRO Dashboard** is a comprehensive web application designed to manage and display information about users and products. It provides a user-friendly interface for administrators to view, search, and manage user and product data. The application is built using modern web technologies, including **React, Redux Toolkit, React Router, and Tailwind CSS**.

---

## Features

### 1. User Management

- View a list of all users with details such as **name, email, and address**.
- Search users by name.
- View detailed information about a specific user, including their **company and contact details**.

### 2. Product Management

- View a list of all products with details such as **name, color, capacity, price, and more**.
- Search products by name.
- Add new products with a form that includes fields for **name, color, capacity, price, and other attributes**.
- View detailed information about a specific product.
- Delete products from the list.

### 3. Authentication

- Simulation Login functionality with a simple form.
- **Success toast notifications** for successful login.

### 4. Error Handling

- Custom error page for invalid routes.
- Error handling for API requests.

### 5. Responsive Design

- Fully **responsive design** that works seamlessly on **desktop and mobile devices**.

### 6. State Management

- Uses **Redux Toolkit** for efficient state management.
- **Local storage integration** to persist product data.

---

## Technologies Used

- **Frontend Framework**: React
- **State Management**: Redux Toolkit
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Toast Notifications**: Sonner
- **API Integration**: RESTful API (JSONPlaceholder and custom API)

---

## Installation

To run the project locally, follow these steps:

### Clone the Repository:

```bash
git clone https://github.com/Mahamudul-Hasan-Abir/xentro-dashboard.git
cd xentro-dashboard
```

### Install Dependencies:

```bash
npm install
```

### Run the Development Server:

```bash
npm run dev
```

### Open the Application:

Visit **[http://localhost:5173](http://localhost:5173)** in your browser to view the application.

---

## Folder Structure

```
xentro-dashboard/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   ├── Layout/             # Layout components
│   ├── Pages/              # Page components
│   ├── router/             # Routing configuration
│   ├── redux/              # Redux store, slices, and API configurations
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── package.json            # Project dependencies
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.ts          # Vite configuration
```

---

## API Integration

The application integrates with the following APIs:

### JSONPlaceholder API:

- **Used for fetching user data.**
- **Endpoint:** `https://jsonplaceholder.typicode.com/users`

### Custom RESTful API:

- **Used for managing product data.**
- **Endpoint:** `https://api.restful-api.dev/objects`

---

## Key Components

### 1. **NavBar**

- Sticky navigation bar with a **logo, user avatar, and login button**.

### 2. **SideBar**

- **Collapsible sidebar** with navigation links for **Dashboard, Users, and Products**.

### 3. **User Management**

- **AllUsers**: Displays a list of users with search functionality.
- **UserDetails**: Shows detailed information about a specific user.

### 4. **Product Management**

- **ProductList**: Displays a list of products with search functionality.
- **CreateProduct**: Form to add new products.
- **ProductDetails**: Shows detailed information about a specific product.

### 5. **ErrorPage**

- Custom error page for invalid routes.

### 6. **Spinner**

- Loading spinner displayed during API requests.

---

## Redux Toolkit

The application uses **Redux Toolkit** for state management. Key slices include:

### **Product Slice:**

- Manages **local product data**.
- Handles **adding and deleting products**.

### **API Slices:**

- **productApi**: Manages **product-related API calls**.
- **usersApi**: Manages **user-related API calls**.

---

## Tailwind CSS

The application is styled using **Tailwind CSS**, a utility-first CSS framework. Custom styles are defined in `index.css`.

---

## Acknowledgements

- **React**: For building the user interface.
- **Redux Toolkit**: For state management.
- **Tailwind CSS**: For styling.
- **Sonner**: For toast notifications.

---

## Contact

For any questions or feedback, please reach out to:

- **Your Name**: your-email@example.com
- **GitHub**: [your-username](https://github.com/your-username)

Thank you for using **XENTRO Dashboard**! 🚀
