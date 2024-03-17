
const express=require('express');

const app=express();

const TweetRepository=require('./repository/tweet-repository');
const Comment=require('./models/comments');

const connect=require('./config/database');

app.listen(3000,async()=>{
  console.log(`Server is start at port ${3000}`);
   await connect();
    console.log("mongodb connected");
     
});