const skillTree = document.getElementById('skillContainer');

const skillTrees = {
    manualSkills: {
        manualSkill1: {
            name: 'Skill 1',
            level: 0,
            maxLevel: 500,
            cost: 100,
            costMultiplier: 1.05,
            effect() {
                goldUpgrade.multiplier++;
                gold.goldPerClick = (goldUpgrade.level * goldUpgrade.multiplier) + exp.goldFromLevel;
                updateDisplays();
            }
        },

        manualSkill2: {
            name: 'Skill 2',
            level: 0,
            maxLevel: 100,
            cost: 100,
            costMultiplier: 20,
            effect() {
                goldUpgrade.costMultiplier = goldUpgrade.costMultiplier ** 0.9;
            }
        },

        manualSkill3: {
            name: 'Skill 3',
            level: 0,
            maxLevel: 10,
            cost: 500,
            costMultiplier: 3,
            effect() {
                gold.critChance += 10;
            },
        },
    },

    autoSkills: {
        autoSkill1: {
            name: 'Skill 1',
            level: 0,
            cost: 100,
            maxLevel: 500,
            costMultiplier: 1.05,
            effect() {
                autoClick.multiplier++;
                gold.goldPerSecond = autoClick.level * autoClick.multiplier;
            }
        },

        autoSkill2: {
            name: 'Skill 2',
            level: 0,
            cost: 100,
            maxLevel: 100,
            costMultiplier: 20,
            effect() {
                autoClick.costMultiplier = autoClick.costMultiplier ** 0.9;
            }
        },

        autoSkill3: {
            name: 'Skill 3',
            level: 0,
            cost: 10000,
            maxLevel: 10,
            costMultiplier: 15,
            effect() {
                autoClick.interval -= 100;
                updateAutoClickInterval();
            }
        }

    },
    fightSkills: {
        fightingSkill1: {
            level: 0,
            cost: 100,
        }
    },
    extraSkills: {
        extraSkill1: {
            level: 0,
            cost: 100,
        }
    }
}

skillTree.addEventListener('click', (e) => {
    const button = {
        parent: e.target.parentElement.id,
        skill: e.target.id,
    }

    const id = document.getElementById(button.skill);

    if (gold.total >= skillTrees[button.parent][button.skill].cost && skillTrees[button.parent][button.skill].level < skillTrees[button.parent][button.skill].maxLevel) {
        gold.total -= skillTrees[button.parent][button.skill].cost;
        skillTrees[button.parent][button.skill].level++;
        skillTrees[button.parent][button.skill].cost = Math.round(skillTrees[button.parent][button.skill].cost * skillTrees[button.parent][button.skill].costMultiplier);
        skillTrees[button.parent][button.skill].effect();
        id.innerText = `${skillTrees[button.parent][button.skill].name} (${skillTrees[button.parent][button.skill].level}/${skillTrees[button.parent][button.skill].maxLevel})`
    }
    updateDisplays();
})

