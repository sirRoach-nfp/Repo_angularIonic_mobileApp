const mongoose = require("mongoose");


const blogSchema = new mongoose.Schema(

    {   

        cover:{
            type: String,
            unique: false,
            required: false,

        },

        desc:{
            type: String,
            unique: false,
            require: true,
        },

        title:{
            type: String,
            unique: false,
            require: true,
        },
        content:{
            type: String,
            unique: false,
            required: true,
        },

        images: {
            type: [String], // Array of strings for image URLs
            required: false, // Make it optional if not every blog post needs images
        },

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Blog",blogSchema)

