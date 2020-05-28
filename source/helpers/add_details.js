const calc_cb = require('./calc_combat_level')
const calc_progress = require('./calc_progress')

module.exports = (list) => {
    const stats = []
    const cbStats = {}
    const [overall, ...skills] = list

    for (const stat of skills) {
        stats.push(calc_progress(stat))

        if (stat.skill.match(/(attack|strength|defence|constitution|magic|ranged|prayer)/i)) {
            cbStats[stat.skill] = stat.level
        }
    }

    overall.combat_level = calc_cb(cbStats)

    return {
        stats,
        overall,
    }
}