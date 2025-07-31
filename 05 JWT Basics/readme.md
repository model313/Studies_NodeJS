# 🪑 JWT Basics

> Mini project built as part of John Smilga's Node.js & Express course.

A simple implementation of JWT authentication using Node.js, Express, and MongoDB.

## 🚀 Project Overview



### ✨ Features

- Return product data in JSON format
- Filter by product name, company, or featured status (boolean)
- Apply numeric filters (e.g., price and rating ranges)
- Sort by any field (e.g., price, rating)
- Select specific fields to include/exclude in the response
- Paginate results with customizable limit and page number
- Built-in async error handling using `express-async-errors`

## 🛠️ Tech Stack

- Node.js
- Express.js
- Mongoose
- MongoDB Atlas (cloud-hosted)
- Postman (for testing API endpoints)

## 📚 Learning Focus

- Structuring RESTful APIs with Express
- Implementing advanced query parameters in API routes
- Working with Mongoose operators for filtering and sorting
- Using middleware for error handling and async operations
- Organizing project files for scalability and readability
- Handling environment variables securely with dotenv

## 💡 How to Run

1. Clone the entire repo ('Studies_NodeJS')
2. Navigate to folder '04 Store API' using the terminal of your choice
3. Install dependencies 
    `npm install`
    
4. Set up your `.env` file with your MongoDB URI
    `MONGO_URI=your_mongodb_connection_string`
    
5. Start the server  
    `npm start`
    
6. Use Postman and interact with the API!

Please note that it is crucial to navigate to the specified folder **before** running npm commands!

If you want, you can **import the Postman collection** that I provided in this folder. The get request includes query parameters you can add and remove with a single click.

## 📦 Project Status

✅ Completed core functionality  
🧪 Tested using Postman  
📚 Used for learning and reference

## 🙌 Credits

Built as part of [John Smilga’s](https://www.johnsmilga.com/) Node/Express course.
