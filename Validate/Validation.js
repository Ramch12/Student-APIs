const joi=require('joi');
exports.validateUser=function(data)
{
    const schema=joi.object({
        name:joi.string().min(3).max(30).required(),
        email:joi.string().min(10).max(50).email().required(),
        phone:joi.string().min(10).max(12).required(),
        password:joi.string().min(5).max(255).required(),
        favTeacher:joi.string().min(5).max(50)
    })
    return schema.validate(data)
}

exports.Authvalidate=function(data)
{
const schema=joi.object({
    email:joi.string().min(10).max(50).email().required(),
    password:joi.string().min(5).max(255).required()
});

return schema.validate(data);
}