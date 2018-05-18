import mongoose from 'mongoose';

const Schema = mongoose.Schema

const schema = new Schema({
    id: {type: Number},
    caption: {type: String, required: true}
}) 