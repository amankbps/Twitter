
import express from "express";
import {connect} from './config/database.js';

const app=express();
import service from "./services/tweet-service.js"



app.listen(3000,async()=>{
  console.log(`Server is start at port ${3000}`);
   await connect();
    console.log("mongodb connected");

    let ser=new service();
    //await ser.create({content:"remove #HASHTAG"});
     
    
});