const { maxExperience, levels } = require('./global-vars')

module.exports = (stat) => {
    const skill_xp = stat.experience
    const skill_maxed = skill_xp === maxExperience

    if (skill_maxed) {
        stat.virtual_level = 127
        stat.exp_to_level = 0
        stat.level_progress = 100
    } else if (stat.rank < 0) {
        stat.virtual_level = stat.level
        stat.exp_to_level = -1
        stat.level_progress = 0
    } else {
        const { level = 1 } = stat
        const subset = levels.slice(level - 1)

        for (let index = 0; index < subset.length; index++) {
            const curr_bracket = subset[index]
            const prev_bracket = subset[index - 1] || curr_bracket
            const { exp: prev_lvl_xp, level: prev_level } = prev_bracket
            const { exp: next_lvl_xp } = curr_bracket
            const matches_bracket = skill_xp <= next_lvl_xp && skill_xp > prev_lvl_xp

            if (matches_bracket) {
                stat.virtual_level = prev_level
                stat.exp_to_level = next_lvl_xp - skill_xp
                stat.level_progress = (1 - ((next_lvl_xp - skill_xp) / (next_lvl_xp - prev_lvl_xp))) * 100
                return stat
            }
        }
    }

    return stat
}