// First we require all the things we're going to need
const express = require('express')
const cors = require('cors')
// This will help us connect to our mongoDB database
const mongoose = require('mongoose')

require('dotenv').config();

// Then how we're going to create our express server
const app = express();
const port = process.env.PORT || 5000;

// Our middleware
app.use(cors())
app.use(express.json())

// Connect to our database
const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully!")
})

// This starts the server and begins listening on a certain port
app.listen(port, () => {
    console.log(`Server is running on port: ${port} mon`)
})

// Now to run things all we have to do is type in the console
// /backend/ $ nodemon server