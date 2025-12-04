import mongoose, {Schema} from "mongoose";

const postSchema = new Schema (
    {
        name : {
            type : String,
            require : true,
            trim : true
        },

        description : {
            type : String,
            require : true,
            trim : true
        },

        age : {
            type : Number,
            min : 0,
            max : 120,
        }

    },
    {
        timestamps: true
    }
)

export const Post = mongoose.model("Post", postSchema);