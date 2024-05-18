require('dotenv').config()
const express = require('express')
const connectToDB = require('./db/index.js')
const uri = process.env.MONGO_URI
const port = process.env.PORT

// App
const app = express()

// Server
const server = async() => {
  try {
    // Connecting to MongoDB Database
    await connectToDB(uri)
    // Listening Server
    app.listen( port, (err) => {
      if(err){
        console.log('Server Listening Error : ', err)
        process.exit(1)
      }
      console.log(`Successfully listening at http://localhost:${port}`)
    })
  } catch (error) {
    console.error("Starting Server Error : ", error)
  }
}

// Starting the server
server()
