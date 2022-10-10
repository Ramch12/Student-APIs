const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');
require('dotenv').config({ path: '../config/.env' });

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true
    },
    email: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        minlength: 5,
        maxlength: 15,
        required: true
    },
    password: {
        type: String,
        minlength: 5,
        maxlength: 255,
        required: true
    },
    favTeacher: {
        type: String,
        minlength: 5,
        maxlength: 50,
    }
});
studentSchema.methods.authgentoken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.privatekey);
    return token;
}

module.exports = mongoose.model('List', studentSchema);