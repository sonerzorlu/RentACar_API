"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/user:
const user = require("../controllers/user");

//URL : /users
router.route("/")
    .get(user.list)
    .post(user.create);

router.route("/:id")
  .get("/", user.list)
  .post("/", user.create)
  .get("/:id", user.read)
  .put("/:id", user.update)
  .delete("/:id", user.delete);
