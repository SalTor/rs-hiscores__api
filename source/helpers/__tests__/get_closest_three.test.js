const getClosestThree = require('../get_closest_three')

describe('Obtaining the three closest skills to leveling', () => {
    test('Subset of stats with "overall" in the mix, which shouldn\'t be included', () => {
        const closest = getClosestThree([
            { level_progress: .45 },
            { level_progress: .3  },
            { level_progress: .01 },
            { level_progress: .83, skill: 'overall' },
            { level_progress: .62 }
        ])

        expect(closest).toEqual([
            { level_progress: .62 },
            { level_progress: .45 },
            { level_progress: .3 }
        ])
    })

    test('Subset of stats with some whose xp is 200m, which shouldn\'t be included', () => {
        const closest = getClosestThree([
            { level_progress: .45 },
            { level_progress: .3  },
            { level_progress: .01 },
            { level_progress: 1, exp_to_level: 0 },
            { level_progress: .62 }
        ])

        expect(closest).toEqual([
            { level_progress: .62 },
            { level_progress: .45 },
            { level_progress: .3 }
        ])
    })

    test('Ordinary subset of stats', () => {
        const closest = getClosestThree([
            { level_progress: .45 },
            { level_progress: .3  },
            { level_progress: .01 },
            { level_progress: .83 },
            { level_progress: .62 }
        ])

        expect(closest).toEqual([
            { level_progress: .83 },
            { level_progress: .62 },
            { level_progress: .45 }
        ])
    })
})