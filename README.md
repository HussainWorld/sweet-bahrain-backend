# [Sweet Bahrain](https://github.com/HussainWorld/sweet-bahrain-frontend)

## Landing Page
![SweetBahrain Landing Page](./public/LandingPage.png)

## Dashboard Page
![SweetBahrain Landing Page](./public/DashboardPage.png)

## Description

Sweet Bahrain is a full-stack e-commerce platform designed for ordering sweets. The project consists of a frontend built with React and Bootstrap, and a backend built with Node.js and Express. The application allows users to browse products, place orders, and manage their accounts. Admin users have additional capabilities to create and edit products.

**Deployed Website:** [Sweet Bahrain](https://sweet-bahrain-frontend-git-main-fares-yusufs-projects.vercel.app/)

---

## Project Structure

### Frontend

```
SWEET-BAHRAIN-FRONTEND/
├── node_modules/
├── public/
│ └── images/
│ └── HomePage.png
├── src/
│ ├── components/
│ │ ├── CreateProduct/
│ │ ├── Dashboard/
│ │ ├── EditProduct/
│ │ ├── HomePage/
│ │ ├── Landing/
│ │ ├── NavBar/
│ │ ├── SignInForm/
│ │ ├── SignUpForm/
│ │ └── ViewOrders/
│ ├── contexts/
│ ├── services/
│ │ ├── authService.js
│ │ ├── orderService.js
│ │ ├── productService.js
│ │ └── userService.js
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vercel.json
└── vite.config.js
```


### Backend


```
├── controllers/
│ ├── auth.js
│ ├── orders.js
│ ├── products.js
│ └── users.js
├── middleware/
├── models/
│ ├── Order.js
│ ├── Product.js
│ └── User.js
├── node_modules/
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```
---


---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Components](#components)
- [Services](#services)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repositories:

    ```bash
    git clone https://github.com/HussainWorld/sweet-bahrain-frontend.git
    git clone https://github.com/HussainWorld/sweet-bahrain-backend.git
    ```

2. Install dependencies for both frontend and backend:

    ```bash
    cd sweet-bahrain-frontend
    npm install
    cd ../sweet-bahrain-backend
    npm install
    ```

3. Start the development servers:

    - Frontend:

        ```bash
        cd sweet-bahrain-frontend
        npm start
        ```

    - Backend:

        ```bash
        cd sweet-bahrain-backend
        node server.js
        ```

    The frontend will be available at `http://localhost:3000` and the backend at ` http://localhost:5173/`.

## Usage

- Navigate to the homepage to view the list of products.
- Sign in to place orders and manage your account.
- Admin users can create and edit products via the "Create Product" and "Edit Product" pages.

## Features

- **User Authentication**: Secure sign-in and sign-up functionality.
- **Product Management**: Admin users can create, edit, and delete products.
- **Responsive Design**: The application is responsive and works on various devices.

## Components

### CreateProduct

The `CreateProduct` component allows admin users to create new products. It includes form validation and error handling.

### EditProduct

The `EditProduct` component allows admin users to edit existing products.

## Services

### productService

The `productService` contains functions to interact with the product-related API endpoints.

- `create(product)`: Creates a new product.
- `update(productId, product)`: Updates an existing product.
- `delete(productId)`: Deletes a product.

### orderService

The `orderService` contains functions to interact with the order-related API endpoints.

- `getOrders()`: Fetches all orders.
- `createOrder(order)`: Creates a new order.

### authService

The `authService` handles user authentication.

- `login(credentials)`: Authenticates a user.
- `register(user)`: Registers a new user.

## Technologies Used

- **Frontend**:
  - **React**: A JavaScript library for building user interfaces.
  - **Bootstrap**: A CSS framework for responsive design.
  - **Vite**: A build tool for modern web development.

- **Backend**:
  - **Node.js**: A JavaScript runtime for building server-side applications.
  - **Express.js**: A web framework for Node.js.
  - **Mongoose**: An ODM library for MongoDB.

- **Database**:
  - **MongoDB**: A NoSQL database for storing application data.

- **Other Tools**:
  - **Git**: Version control system.
  - **Vercel**: Deployment platform for frontend.
  - **Morgan**: HTTP request logger for Node.js.

---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

---

Happy Shopping! 🍫 🛍️