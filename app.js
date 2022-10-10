const express=require('express');
const colors=require('colors');
require('dotenv').config({path:'./config/.env'});
const router=require('./Router/router');
require('./mongoconnect/connect');

const app=express();
app.use(express.json());
app.use('/',router);




app.listen(process.env.PORT,()=>{
    console.log(`Your server is running in ${process.env.NODE_ENV} at port ${process.env.PORT}`.blue.underline)
})