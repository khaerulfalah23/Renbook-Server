const mongoose = require('mongoose');

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@renbook.3bx7hzh.mongodb.net/?retryWrites=true&w=majority&appName=Renbook`
    );
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB', error.message);
  }
};

module.exports = connectToMongoDB;
