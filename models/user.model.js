import mongoose from "mongoose";

const userSchema = new mongoose.Schema( {
    userMail: String,
    password: String
})

export const User = mongoose.model('User', userSchema);
