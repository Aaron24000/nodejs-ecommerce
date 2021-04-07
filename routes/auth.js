const { getLogin, postLogin, postLogout } = require("../controllers/auth");

const express = require("express");

const router = express.Router();

router.get("/login", getLogin);

router.post('/login', postLogin);

router.post('/logout', postLogout);

module.exports = router;
