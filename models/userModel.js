// const mongoose = require('mongoose');
//OR
// import mongoose from "mongoose";
import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a username tanga!']
    },
    author: {
        type: String,
        required: [true, 'Please provide a username tanga!']
    },
    qoutes: {
        type: String,
        required: [true, 'Please provide a username tanga!']
    },
    published: {
        type: String,
        required: [true, 'Please provide a username tanga!']
    }
})

export default mongoose.model('User', userSchema)