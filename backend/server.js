// bring in all dependencies
const dotenv = require('dotenv').config();//make sure dotenv exist in the package.json dependencies b/c it striggers the nodemon to crash
const express = require('express')
const PORT = process.env.PORT || 5000;

// Connect to the database
//const connectDB = require('../config/database.js');//connect database

// ------------create my app-----------
const app = express();


// -----------add the middleware----------
    app.use(express.json())
  app.use(express.urlencoded({extended: false}))

 app.use('/api/events', require('./controllers/eventController'));
// app.use('/api/users', require('./routes/userRoutes'));

//  =====  our first applications had all of the routes in the server like the one below...
// move routes into routes folder/file
// app.get('/api/goals', (req, res) => {
//     res.status(200).json({message: 'get goals'});
// })

//============create routes===================

//===NB===all routes are created in the routes folder following the below information =========

/*====the user admin should be able to create , update, read, and delete not only a user in the database but also the event=========*/


// We are going to create the 7 RESTful routes
// There is an order for them to listed in the code
// I - N - D - U - C - E - S
//  Action      HTTP Verb   CRUD 
// I - Index    GET         READ - display a list of elements
// N - New      GET         CREATE * - but this allows user input
// D - Delete   DELETE      DELETE
// U - Update   PUT         UPDATE * - this updates our database
// C - Create   POST        CREATE * - this adds to our database
// E - Edit     GET         UPDATE * - but this allows user input
// S - Show     GET         READ - display a specific element

// create route to get user data from the database using CRUD

// app.get('/api/users', (req, res) => {
//     res.status(200).json({message: 'this is the users root route'});
// });




app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
