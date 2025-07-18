const UserRroute= require('express').Router();

const { getResult } = require("../Controller/UserController.js")

UserRroute.post('/getResult',getResult)


module.exports = UserRroute;