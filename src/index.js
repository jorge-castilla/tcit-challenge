const { sequelize } = require('../sequelize/models')
require('dotenv').config({path: '../.env'})
const express = require('express');
const path = require('path');
const app = express()
const cors = require('cors')
require("dotenv").config({ path: "./.env" })

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(express.static(__dirname + '/public'));

const connectDb = async () => {
    console.log('Checking database connection..')
    try {
        await sequelize.authenticate()
        console.log('Database connection established')
    } catch (error) {
        console.log('Database connection error', error)
        process.exit(1)
    }
}

// routes
app.use(require('./routes/index'))

const start = async () =>{
    await connectDb()
    app.listen(3000) 
    console.log('listening on port 3000')
}
start()