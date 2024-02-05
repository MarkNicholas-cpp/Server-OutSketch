// Every import at one Place required for my Project
const express = require('express');
const app =  express();
const cors = require('cors');
const bodyparser = require('body-parser');
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
const TaskOracle  = require('./Task-oracle')
app.use('/Task-oracle',TaskOracle)
const TaskSql  = require('./Task-SQL.js')
app.use('/Task-SQl',TaskSql)


module.exports = app;   