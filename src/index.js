
import express from "express";
import {connect} from './config/database.js';
import apiRoutes from './routes/index.js';
import bodyParser from "body-parser";

import {UserRepository,TweetRepository } from "./repository/index.js";
import LikeService from "./services/like-service.js";

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiRoutes);




app.listen(3000,async()=>{
  console.log(`Server is start at port ${3000}`);
   await connect();
    console.log("mongodb connected");

   
      

    
});