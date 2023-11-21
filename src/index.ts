import mongoose from "mongoose";

const express = require('express')
const app = express()
const port = 5000


// database connection
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log('Connected to MongoDB');
    
  };

  main();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})