'use strict';

const express = require('express')
const app     = express()
const player  = require("./routes/player")
const cors    = require("cors")

app.use(cors())
app.use('/player', player)

app.listen(3030, function() {})
