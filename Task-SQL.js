const connection =  require("./sql-connect")
const Router = require("express").Router()
Router.get('/',(req,res)=>res.send("Welcome --- Backend with Xampp SQL --- "))

module.exports = Router;