const add_details = require('../helpers/add_details')
const api = require('runescape-api')
const express = require('express')
const { keys, values: vals } = require('lodash')
const router = express.Router()

module.exports = router.get('/:username', ({ params }, res) => {
    const { username } = params
    console.log(`[ username requested ] ${ username }`)

    api.osrs.hiscores.player(username)
        .then((response) => {
            const formatted_response = (response) => {
                try {
                    const skill_stats = vals(response.skills)
                    const skill_names = keys(response.skills)

                    return add_details(
                        skill_stats.map((current_stat, index) => {
                            return Object.assign({}, { skill: skill_names[index] }, current_stat)
                        })
                    )
                } catch (error) {
                    console.log(error)

                    return {}
                }
            }

            res.send(formatted_response(response)).status(200)
        })
        .catch(() =>
            res.status(404).send('Error with API, check with administrator.')
        )
})