//Importing
const express = require('express');
const mongoose = require('mongoose');
const RestaurentRoutes = require('./Routes/restaurantRoutes');
const LocationRoutes = require('./Routes/locationRoutes')
const mealTypeRoutes = require("./Routes/mealTypeRoutes")
const bodyParser = require('body-parser')
const cors = require('cors')


// constant
const mongoDBLink = 'mongodb://localhost:27017/Zomato';
const PORT = 4500;

//Connect to mongoDB
mongoose.connect(mongoDBLink,()=>{
    console.log('Connected MongoDB');
},e=>console.log(e))

//Server Config
const app = express();

//Middleware
app.use(cors())
app.use(bodyParser.json())
app.use('/restaurant', RestaurentRoutes)
app.use('/location',LocationRoutes)
app.use('/mealType',mealTypeRoutes)

//Listner
app.listen(PORT, () => {
    console.log(`Server Running ${PORT}`);
})