const Router = require("express").Router();
const Query = require("./database");

Router.get('/', (req, res) => res.send("Welcome to Our server Impliment the Apis Here "))

module.exports = Router;
