'use strict'

let format = require("../helpers/format_response.js")

let api = require('runescape-api'),
    express = require('express'),
    router = express.Router()

router.get('/:username', function (req, res) {
    let username = req.params.username

    console.log(`[ username requested ] ${username}`)

    api.osrs.hiscores.player(username)
        .then(response => {
            res.send({ stats: format(response) }).status(200)
        })
        .catch(() => {
            res.status(404).send("Error with API, check with administrator.")
        })
})

module.exports = router
