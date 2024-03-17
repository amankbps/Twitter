
const express=require('express');

const app=express();

const TweetRepository=require('./repository/tweet-repository');
const Comment=require('./models/comments');

const connect=require('./config/database');

app.listen(3000,async()=>{
  console.log(`Server is start at port ${3000}`);
   await connect();
    console.log("mongodb connected");
    // const tweet=await Tweet.create({
    //   content:'Third tweet',
      
    //   });

     const tweetsRepo=new TweetRepository();
     
     const tweet=await tweetsRepo.create({content:'testing hooks'});
     console.log(tweet);
    
    
});