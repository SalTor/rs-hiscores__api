const calc_cb = require('../calc_combat_level')

describe('Calculating a combat level of', () => {
    test('lvl 3 skiller', () => {
        const cb = calc_cb([
            { skill: 'attack',    level: 1 },
            { skill: 'strength',  level: 1 },
            { skill: 'defence',   level: 1 },
            { skill: 'hitpoints', level: 10 },
            { skill: 'ranged',    level: 1 },
            { skill: 'magic',     level: 1 },
            { skill: 'prayer',    level: 1 }
        ])

        expect(cb).toBe('3.40')
    })

    test('Maxed defence pure', () => {
        const cb = calc_cb([
            { skill: 'attack',    level: 1 },
            { skill: 'strength',  level: 1 },
            { skill: 'defence',   level: 99 },
            { skill: 'hitpoints', level: 99 },
            { skill: 'ranged',    level: 1 },
            { skill: 'magic',     level: 1 },
            { skill: 'prayer',    level: 1 }
        ])

        expect(cb).toBe('50.15')
    })

    test('Maxed prayer tank pure', () => {
        const cb = calc_cb([
            { skill: 'attack',    level: 1 },
            { skill: 'strength',  level: 1 },
            { skill: 'defence',   level: 99 },
            { skill: 'hitpoints', level: 99 },
            { skill: 'ranged',    level: 1 },
            { skill: 'magic',     level: 1 },
            { skill: 'prayer',    level: 99 }
        ])

        expect(cb).toBe('62.40')
    })

    test('Maxed account', () => {
        const cb = calc_cb([
            { skill: 'attack',    level: 99 },
            { skill: 'strength',  level: 99 },
            { skill: 'defence',   level: 99 },
            { skill: 'hitpoints', level: 99 },
            { skill: 'ranged',    level: 99 },
            { skill: 'magic',     level: 99 },
            { skill: 'prayer',    level: 99 }
        ])

        expect(cb).toBe('126.10')
    })
})