let exp = {
    currentExp: 0,
    currentLevel: 0,
    expNeededValue: 100,
    goldFromLevel: 0,
}

const expFill = document.getElementById('expFill');
const levelNumber = document.getElementById('level');
const expNeeded = document.getElementById('expNeeded');

function levelUp() {
    while (exp.currentExp >= exp.expNeededValue) {
        exp.currentExp -= exp.expNeededValue;
        exp.currentLevel++;
        exp.expNeededValue = Math.round(exp.expNeededValue * 1.5);
        levelNumber.textContent = exp.currentLevel;
        exp.goldFromLevel += exp.currentLevel;
        gold.goldPerClick = (goldUpgrade.level * goldUpgrade.multiplier) + exp.goldFromLevel;
    }
    updateDisplays();
}

function adjustExpBar() {
    let ratio = exp.currentExp / exp.expNeededValue;
    expFill.style.width = `${ratio * 100}%`;
    expNeeded.textContent = `${exp.currentExp}/${exp.expNeededValue}`;
}