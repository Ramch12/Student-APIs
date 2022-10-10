const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/Student')
.then(()=>{
    console.log("Connected".green);
})
.catch((err)=>{
    console.log("Not connected".red);
});