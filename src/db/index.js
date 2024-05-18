const mongoose = require('mongoose')

const connectToDB = async(url) => {
  try {
    let connection = await mongoose.connect(`${url}`)
    console.log(`Connected to MongoDB's Database Name : `, connection.connection.name)
  } catch (error) {
    console.error("MongoDB Connection Error : ", error)
    process.exit(1)
  }
}

module.exports = connectToDB