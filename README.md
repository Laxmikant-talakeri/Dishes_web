# Dishes_web
---

# Full-Stack Dish Management Application

## Introduction

Welcome to our quick guide on building a full-stack application to manage and display dish information. In this project, we use Node.js, Express.js, MongoDB, and React.js to create a system where you can view, add, and toggle the publication status of various dishes.

## Project Structure

### Backend

The backend is built using Express.js and MongoDB, with Mongoose for database interactions.

1. **Server Setup (`server.js`)**
   - Connects to MongoDB.
   - Sets up API routes.

2. **Database Schema (`models/Dish.js`)**
   - Defines the dish schema with fields: `dishId`, `dishName`, `imageUrl`, and `isPublished`.

3. **API Routes (`routes/dishes.js`)**
   - Fetch all dishes.
   - Toggle the publication status of a dish.

4. **Database Population (`populate.js`)**
   - Script to populate the database with mock data.

### Frontend

The frontend is built with React.js, providing a simple dashboard to interact with the dishes.

1. **Main App (`App.js`)**
   - Fetches dishes from the backend.
   - Passes data to `DishList.js`.

2. **Dish List Component (`components/DishList.js`)**
   - Renders each dish.
   - Includes a button to toggle publication status.

## Running the Project

### Backend

1. Start MongoDB.
2. Navigate to the backend directory:
   ```bash
   cd backend
   npm install
   node populate.js
   node server.js
   ```

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   npm install
   npm start
   ```

## Application Overview

- **Backend**: Express.js server connected to MongoDB, with API routes for managing dishes.
- **Frontend**: React.js application displaying dishes and allowing publication status toggling.

## Conclusion

You've built a full-stack application to manage and display dish information. Thank you for following along!

---

## Additional Information

For more details, please refer to the following files:

- `server.js`: Sets up the Express server and connects to MongoDB.
- `models/Dish.js`: Defines the Mongoose schema for dishes.
- `routes/dishes.js`: Contains API endpoints for fetching and updating dish data.
- `populate.js`: Populates the database with initial mock data.
- `App.js`: Main React component fetching data from the backend.
- `DishList.js`: React component rendering the list of dishes and handling status toggling.

## License

This project is licensed under the MIT License.

---
