const jwt=require('jsonwebtoken');
const User = require('../Model/model')
const { Authvalidate } = require('../Validate/Validation');
const bcrypt = require('bcrypt');
require('dotenv').config({path:'../config/.env'});


exports.AuthUser = async function (req, res, next) {
    const { error } = Authvalidate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const result = await User.findOne({ email: req.body.email });
    if (!result) return res.status(400).send("User is not registered");
    
    const user=await bcrypt.compare(req.body.password,result.password);
    
    const token=result.authgentoken();
    res.header('x-auth-token',token).send("Logged In");
}