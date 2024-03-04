# Medicine Delivery App

Medicine Delivery App is a web application that allows users to order medicines
for delivery. It consists of two main pages: the shops page and the shopping
cart page. Users can browse through available drug stores, add medicines to
their cart, and proceed to checkout by providing their contact information and
delivery address.

## How to Run the Application

### Frontend

1. Clone the repository: `git clone [repository-url]`
2. Navigate to the frontend directory: `cd frontend`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Access the application in your browser at `http://localhost:3000`

### Backend

1. Clone the backend repository:
   [drugShopBackend](https://github.com/IrinaHusieva/drugShopBackend)
2. Navigate to the backend directory: `cd backend`
3. Install dependencies: `npm install`
4. Set up your database connection in a `.env` file
5. Start the backend server: `npm start`

## Technologies Used

- Frontend: JavaScript, React.js
- Backend: Node.js, Express.js, Mongoose, Joi
- Database: MongoDB
- Styling: Module CSS

## Features

### Shops Page

- Displays a list of available drug stores
- Allows users to browse through stores and view available medicines
- Users can add medicines to their cart

### Shopping Cart Page

- Shows all added products in the cart
- Users can remove items from the cart or adjust the quantity
- Provides input fields for users to enter their email, phone number, and
  delivery address
- Allows users to submit the order, which will be saved in the database
