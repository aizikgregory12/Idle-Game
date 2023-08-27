const skillTree = document.getElementById('skillContainer');

const skillTrees = {
    manualSkills: {
        skill1: {
            level: 0,
            maxLevel: 500,
            cost: 100,
            costMultiplier: 1.05,
            effect() {
                goldUpgrade.multiplier++;
                gold.goldPerClick = goldUpgrade.level * goldUpgrade.multiplier;
            }
        },

        skill2: {
            level: 0,
            maxLevel: 100,
            cost: 100,
            costMultiplier: 20,
            effect() {
                goldUpgrade.costMultiplier = goldUpgrade.costMultiplier ** 0.9;
            }
        },
    },
    autoSkills: {
        skill1: {
            level: 0,
            cost: 100,
            effect() {
                autoClick.multiplier++;
                gold.goldPerSecond = autoClick.level * autoClick.multiplier;
            }
        },

        skill2: {
            level: 0,
            cost: 100,
            effect() {
                autoClick.costMultiplier -= 0.02;
            }
        }

    },
    fightSkills: {
        skill1: {
            level: 0,
            cost: 100,
        }
    },
    extraSkills: {
        skill1: {
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

    if (gold.total >= skillTrees[button.parent][button.skill].cost && skillTrees[button.parent][button.skill].level < skillTrees[button.parent][button.skill].maxLevel) {
        gold.total -= skillTrees[button.parent][button.skill].cost;
        skillTrees[button.parent][button.skill].level++;
        skillTrees[button.parent][button.skill].cost = Math.round(skillTrees[button.parent][button.skill].cost * skillTrees[button.parent][button.skill].costMultiplier);
        skillTrees[button.parent][button.skill].effect();
    }
    updateDisplays();
    console.log(skillTrees[button.parent][button.skill].cost);
})