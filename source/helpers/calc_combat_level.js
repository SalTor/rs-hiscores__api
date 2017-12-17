const { max } = require('lodash')

module.exports = function (stats) {
    const skill = (skill) => stats.filter((s) => s.skill === skill)

    const [attack]    = skill('attack')
    const [strength]  = skill('strength')
    const [defence]   = skill('defence')
    const [hitpoints] = skill('hitpoints')
    const [ranged]    = skill('ranged')
    const [magic]     = skill('magic')
    const [prayer]    = skill('prayer')

    return (
        0.25 * (defence.level + hitpoints.level + Math.floor(prayer.level / 2))
        +
        max([
            0.325 * (attack.level + strength.level),
            max([
                0.325 * (Math.floor(ranged.level / 2) + ranged.level),
                0.325 * (Math.floor(magic.level / 2) + magic.level)
            ])
        ])
    ).toFixed(2)
}
