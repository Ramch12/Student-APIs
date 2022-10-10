const express=require('express');
const {createStudent,updateTeacher,getstudents}=require('../controller/controller');
const {AuthUser}=require('../AuthenticateUser/auth');
const {Userautherize}=require('../middleware/Authorize');
const router=express.Router();

// Endpoint for creating a Student
router
.route('/api/student')
.post(createStudent);

// Endpoint for Authenticating a Student
router
.route('/api/auth')
.post(AuthUser)

// Endpoint to add or remove a favourite teacher
router
.route('/api/update')
.post(Userautherize,updateTeacher);

// Endpoint to Get all Student 
router
.route('/api/getstudents')
.get(getstudents)

module.exports=router;