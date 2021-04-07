const { getLogin, postLogin } = require("../controllers/auth");

const express = require("express");

const router = express.Router();

router.get("/login", getLogin);

router.post('/login', postLogin);

module.exports = router;
