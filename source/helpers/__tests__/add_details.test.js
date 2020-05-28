const add_details = require('../add_details')

describe('Modify default response from API...', () => {
    test('Adding details', () => {
        const new_stats = add_details([
            {
                skill: 'overall',
                level: 16,
                experience: 1154
            },
            {
                level: 10,
                experience: 1154,
                skill: 'constitution'
            },
            { level: 1, experience: 0, skill: 'attack'   },
            { level: 1, experience: 0, skill: 'strength' },
            { level: 1, experience: 0, skill: 'defence'  },
            { level: 1, experience: 0, skill: 'ranged'   },
            { level: 1, experience: 0, skill: 'magic'    },
            { level: 1, experience: 0, skill: 'prayer'   }
        ])

        expect(new_stats).toMatchObject({
            stats: [
                {
                    skill: 'constitution',
                    virtual_level: 10,
                    level: 10,
                    experience: 1154,
                    exp_to_level: 204,
                    level_progress: 0
                },
                { level: 1, experience: 0, skill: 'attack',   virtual_level: 1, exp_to_level: 83, level_progress: 0 },
                { level: 1, experience: 0, skill: 'strength', virtual_level: 1, exp_to_level: 83, level_progress: 0 },
                { level: 1, experience: 0, skill: 'defence',  virtual_level: 1, exp_to_level: 83, level_progress: 0 },
                { level: 1, experience: 0, skill: 'ranged',   virtual_level: 1, exp_to_level: 83, level_progress: 0 },
                { level: 1, experience: 0, skill: 'magic',    virtual_level: 1, exp_to_level: 83, level_progress: 0 },
                { level: 1, experience: 0, skill: 'prayer',   virtual_level: 1, exp_to_level: 83, level_progress: 0 },
            ],
            overall: {
                skill: 'overall',
                virtual_level: 16,
                level: 16,
                combat_level: '3.40',
                experience: 1154,
            },
        })
    })
})