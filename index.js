const express = require('express')
const player  = require('./source/routes/player')
const cors    = require('cors')
const app     = express()

app.use(cors())
app.use('/player', player)

app.listen(2007, () => {})