const calc_cb = require('../calc_combat_level')

describe('Calculating a combat level of', () => {
    test('lvl 3 skiller', () => {
        const cb = calc_cb({
            attack: 1,
            strength: 1,
            defence: 1,
            constitution: 10,
            ranged: 1,
            magic: 1,
            prayer: 1,
        })

        expect(cb).toBe('3.40')
    })

    test('Maxed defence pure', () => {
        const cb = calc_cb({
            attack: 1,
            strength: 1,
            defence: 99,
            constitution: 99,
            ranged: 1,
            magic: 1,
            prayer: 1,
        })

        expect(cb).toBe('50.15')
    })

    test('Maxed prayer tank pure', () => {
        const cb = calc_cb({
            attack: 1,
            strength: 1,
            defence: 99,
            constitution: 99,
            ranged: 1,
            magic: 1,
            prayer: 99,
        })

        expect(cb).toBe('62.40')
    })

    test('Maxed account', () => {
        const cb = calc_cb({
            attack: 99,
            strength: 99,
            defence: 99 ,
            constitution: 99,
            ranged: 99,
            magic: 99,
            prayer: 99,
        })

        expect(cb).toBe('126.10')
    })
})