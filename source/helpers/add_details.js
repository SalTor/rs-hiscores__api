const calc_cb = require('./calc_combat_level')
const calc_progress = require('./calc_progress')
const getClosestThree = require('./get_closest_three')

const sum = (arr, attr) => {
    return arr.reduce((a, b) => a + b[attr], 0)
}

module.exports = (stats) => {
    const skills    = stats.filter((s) => s.skill !== 'overall').map(calc_progress)
    const [overall] = stats.filter((s) => s.skill === 'overall')
    const cb_stats  = stats.filter((s) => s.skill.match(/(attack|strength|defence|hitpoints|magic|ranged|prayer)/i))

    overall.combat_level = calc_cb(cb_stats)
    overall.level = sum(skills, 'level')
    overall.virtual_level =  sum(skills, 'virtual_level')
    overall.exp = sum(skills, 'exp')

    return {
        stats: skills.concat(overall),
        closest: getClosestThree(skills)
    }
}