
import {TweetRepository, HashtagRepository} from "../repository/index.js"

class TweetService{
    
    constructor()
    {
          this.tweetRepository=new TweetRepository();
          this.hashtagRepository=new HashtagRepository();
    }

    async create(data)
    {
         const  content=data.content;
         let tags=content.match(/#[A-Za-z0-9_]+/g)
         .map((tag)=>tag.substring(1))
         .map((tag)=>tag.toLowerCase());
         
       
         const tweet= await this.tweetRepository.create(data);

         let alreadyPresentTags=await this.hashtagRepository.findByname(tags);
        let titleOfPresenttags=alreadyPresentTags.map((tag)=>tag.title);

         let newTags=tags.filter(tag=>!alreadyPresentTags.includes(tag));
         newTags=newTags.map((tag)=>{
             
             return {title:tag,tweets:[tweet.id]}
         });

         await this.hashtagRepository.bulkCreate(newTags);
       
         alreadyPresentTags.forEach((tag)=>{
            tag.tweets.push(tweet.id);
            tag.save();
         });

         return tweet;

    }

}

export default TweetService;