"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
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

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      trim: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: false,
    },
    lastName: {
      type: String,
      required: true,
      trim: false,
    },
    isActive: {
      type: String,
      required: true,
      trim: true,
    },
    isAdmin: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "users", timestamps: true }
);

const passwordEncrypt = require("../helpers/passwordEncrypt");

UserSchema.pre("save", function (next) {
  const isEmailValidated = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    data.email
  );

  if (isEmailValidated) {
    this.email = emailEncrypted(this.email);
  }

  const isPasswordValidated = Regexp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&].{8,}$"
  ).test(this.password);
  if (isPasswordValidated) {
    this.password = passwordEncrypt(this.password);
    next();
  }else{
    next(new Error("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."));
  }
});

module.exports = mongoose.model("User", UserSchema);