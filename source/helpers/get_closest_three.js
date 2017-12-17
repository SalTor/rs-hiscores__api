const { orderBy } = require('lodash')

module.exports = (skills) => {
    return orderBy(
        skills.filter((s) => s.skill !== 'overall' && s.exp_to_level !== 0),
        ['level_progress'], ['desc']
    ).filter((s, i) => i < 3)
}