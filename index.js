'use strict';

const express = require('express')
const app     = express()
const player  = require("./source/routes/player")
const cors    = require("cors")

app.use(cors())
app.use('/player', player)

app.listen(2007, function() {})
