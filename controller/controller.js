const bcrypt = require('bcrypt');
const User = require('../Model/model');
const _ = require('lodash');
const { validateUser } = require('../Validate/Validation');

exports.createStudent = async function (req, res, next) {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const result = await User.findOne({ email: req.body.email });
    if (result) return res.status(400).send("the student is already registered");
    try {
        const Gensalt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, Gensalt);
        const data = await User.create(
            {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                password: password,
                favTeacher: req.body.favTeacher
            }
        );
        const token=data.authgentoken();
        res.status(200).header('x-auth-token',token).send(_.pick(data, ['_id', 'name', 'phone']));
    }
    catch (err) {
        res.status(500).send(err);
    }
}


exports.updateTeacher = async function (req,res,next){ 
    try{
      const data=await User.findByIdAndUpdate(req.user._id,{$set:{favTeacher:req.body.favTeacher}});
    }
    catch(err)
    {
        res.status(500).send("Server Error");
    }   
}


exports.getstudents=async function(req,res,next)
{
  try{
    const data=await User.find();
    res.status(200).send(data);
  }
  catch(err)
  {
    res.status(500).send("internal Server Error");
  }
}