const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema(
    {
        userId: {type: Number, required:true},
        firstname: {type:String, required:true},
        lastname: {type:String, required:true},
        roll: {type:String, required:true},
        photo: {type: String, required:true},
        username: {type: String, required:true, unique:true},
        email: {type:String, required:true, unique:true},
        password: {type:String, required:true},
        createdAt: {type:Date, required:true},
        updatedAt: {type:Date, required:true}
    });

const UserModel = new mongoose.model('users', dataSchema);
module.exports = UserModel;
