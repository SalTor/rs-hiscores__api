module.exports = stats => (
    0.25 * (stats.defence + stats.constitution + Math.floor(stats.prayer / 2))
    +
    Math.max(
        0.325 * (stats.attack + stats.strength),
        Math.max(
            0.325 * (Math.floor(stats.ranged / 2) + stats.ranged),
            0.325 * (Math.floor(stats.magic / 2) + stats.magic)
        )
    )
).toFixed(2)