const express = require('express');
const cors = require('cors');
const bodyParser =require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(cors());

var loginRoutes = require('./routes/login');
var signupRoutes = require('./routes/signup');
var searchBookRoutes = require('./routes/searchBook');
var updateUserDataRoutes = require('./routes/updateUserData');
var bookDetailsRoutes = require('./routes/bookDetails');
var ratingRoutes = require('./routes/rating');
var fetchByStatusRoutes = require('./routes/fetchByStatus');
var updateStatusRoutes = require('./routes/updateStatus');

app.use('/login',loginRoutes);
app.use('/signup',signupRoutes);
app.use('/searchbook',searchBookRoutes);
app.use('./update',updateUserDataRoutes);
app.use('./bookdetails',bookDetailsRoutes);
app.use('./rating',ratingRoutes);
app.use('./status',fetchByStatusRoutes);
app.use('./updatestatus',updateStatusRoutes);

app.listen(3002,() =>{
    console.log("Server started on port 3002");
});
