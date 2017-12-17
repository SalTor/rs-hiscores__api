const calc_progress = require('../calc_progress')

describe('Calculating skill progress', () => {
    it('Should distinguish virtual levels', () => {
        const exp = 15000000
        const stat = calc_progress({ exp, rank: 500 })

        expect(stat).toEqual({
            level_progress: 40.644908471516715,
            exp_to_level: 889109,
            virtual_level: 100,
            rank: 500,
            exp
        })
    })

    it('Should distinguish maxed skills', () => {
        const exp = 200000000
        const stat = calc_progress({ exp })

        expect(stat).toEqual({
            virtual_level: 127,
            exp_to_level: 0,
            level_progress: 100,
            exp
        })
    })

    it('Should distinguish level 1 skills', () => {
        const exp = 0
        const stat = calc_progress({ exp })

        expect(stat).toEqual({
            virtual_level: 1,
            exp_to_level: 83,
            level_progress: 0,
            exp
        })
    })
})