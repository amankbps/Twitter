
const express=require('express');

const app=express();



const connect=require('./config/database');

app.listen(3000,async()=>{
  console.log(`Server is start at port ${3000}`);
   await connect();
    console.log("mongodb connected");

    
     
    
});