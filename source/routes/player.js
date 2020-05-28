const add_details = require('../helpers/add_details')
const { hiscores } = require('runescape-api/osrs')
const express = require('express')
const { keys, values: vals } = require('lodash')
const router = express.Router()

module.exports = router.get('/:username', ({ params }, res) => {
    const { username } = params

    hiscores.getPlayer(username)
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
                } catch  {
                    return {}
                }
            }

            res.status(200).send(formatted_response(response))
        })
        .catch((error) => res.status(404).send('Error with API, check with administrator.'))
})