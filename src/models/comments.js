

import mongoose from "mongoose";

const commentsSchema=new mongoose.Schema(
    {
        comments:
            {
                content:{
                    type:String,
                    retuired:true
                }
            },

            userId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'User',
                required:true
            },
            onModel:{
                type:String,
                required:true,
                enum:['Tweet','Comment']
             },
             commentable:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                refPath:'onModel'
             }
        
    },
    {
        timestamps:true
    }
);

const Comment=mongoose.model('Comment',commentsSchema);
export default Comment;