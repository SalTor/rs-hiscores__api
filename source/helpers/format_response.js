'use strict';

let add_details = require("./add_details.js"),
    _ = require("lodash")

module.exports = function (args) {
    try {
        let calc_cb = require("./calc_combat_level.js"),
            _ = require("lodash")

        let skill_stats = _.values(args.skills),
            skill_names = _.keys(args.skills)

        let stats = skill_stats.map((stat, stat_index) => {
            let formatted_skill = _.assign({ skill: skill_names[stat_index], experience: stat.exp }, stat)
            _.unset(formatted_skill, "exp")

            return formatted_skill
        })

        return add_details(stats)
    } catch(error) {
        console.log(error)
    }
}
