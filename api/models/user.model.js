import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String,
        unique: true,
    },
    email: {
        required: true,
        type: String,
        unique: true,
    },
    password: {
        required: true,
        type: String,
    },
}, {timestamps:true});

const User =  mongoose.model('User', UserSchema);

export default User;