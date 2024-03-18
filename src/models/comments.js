

import mongoose from "mongoose";

const commentsSchema=new mongoose.Schema(
    {
        comments:[
            {
                content:{
                    type:String,
                    retuired:true
                }
            }
        ]
    },
    {
        timestamps:true
    }
);

const Comment=mongoose.model('Comment',commentsSchema);
export default Comment;