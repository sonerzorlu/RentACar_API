"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    "username": "admin",
    "password": "1234",
    "email": "admin@site.com",
    "firstName": "admin",
    "lastName": "admin",
    "isActive": true,
    "isAdmin": true
}
{
    "username": "test",
    "password": "1234",
    "email": "test@site.com",
    "firstName": "test",
    "lastName": "test",
    "isActive": true,
    "isAdmin": false
}
/* ------------------------------------------------------- */
// User Model:

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
        unique: true,
        trim: false,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    firstName:{
        type: String,
        required: true,
        trim: false,
    },
    lastName:{
        type: String,
        required: true,
        trim: false,
    },
    isActive:{
        type: String,
        required: true,
        trim: true,
    },
    isAdmin:{
        type: String,
        required: true,
        trim: true,
    },



},{})