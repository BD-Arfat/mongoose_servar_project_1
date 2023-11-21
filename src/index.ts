import mongoose from "mongoose";
import app from "./app";

// this is server port
const port:number = 5000;

// database connection
async function main() {
    
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  }
  catch(err){
    console.log(err);
  }
    
  };

  main();



