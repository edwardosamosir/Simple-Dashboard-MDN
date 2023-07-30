if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const router = require('./routes')
const cors = require("cors");
const app = express()
const port = 3000;

// cross origin resource sharing
app.use(cors())

// body parse
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// use router
app.use(router)

// port server indicator 
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});