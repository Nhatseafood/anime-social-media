import mongoose from 'mongoose';

const Schema = mongoose.Schema

const schema = new Schema({
    id: {type: Number},
    userName: {type: String, required: true},
    email: {type: String, required: true},
    password:{type: String + Number, required: true},
    firstName: {type: String, required: true },
    lastName: {type: String},
    addedDate: {type: Number},
    phoneNumber: {type:String},
    // type: 
}) 