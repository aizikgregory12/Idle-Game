let total = 0;
let goldPerClick = 100;
let autoGold = 0;

let currentExp = 0;
let currentLevel = 1;
let expNeededValue = 100;

let upgradeCost = 10;
let autoCost = 10;

var skillCost = 100;


const clickForGold = document.querySelector('#clickForGold');
const upgradeButton = document.querySelector('#upgrade');
const autoClick = document.querySelector('#autoClick');
const temp = document.querySelector('#temp');

const totalGold = document.getElementById('total');
const goldPerClickDisplay = document.getElementById('goldPerClick');
const autoClickDisplay = document.getElementById('goldPerSecond');

const expFill = document.getElementById('expFill');
const levelNumber = document.getElementById('level');
const expNeeded = document.getElementById('expNeeded');

clickForGold.addEventListener('click', () => {
    currentExp += goldPerClick;
    total += goldPerClick;
    levelUp();
    adjustExpBar();
    totalGold.innerText = `${total} gold`
});


upgradeButton.addEventListener('click', () => {
    if (total >= upgradeCost) {
        total -= upgradeCost;
        upgradeCost = Math.round((upgradeCost ** 1.02) + 1);
        goldPerClick++;
        goldPerClickDisplay.innerText = `${goldPerClick} gold/click`;
    }
    totalGold.innerText = `${total} gold`;
});

autoClick.addEventListener('click', () => {
    if (total >= autoCost) {
        total -= autoCost;
        autoCost = Math.round((autoCost ** 1.02) + 1);
        autoGold++;
        autoClickDisplay.innerText = `${autoGold} gold/sec`;
    }
    totalGold.innerText = `${total} gold`;
})

function levelUp() {
    while (currentExp >= expNeededValue) {
        currentExp -= expNeededValue;
        currentLevel++;
        expNeededValue = Math.round(expNeededValue * 1.2);
        levelNumber.textContent = currentLevel;
    }
}

function adjustExpBar() {
    let ratio = currentExp / expNeededValue;
    expFill.style.width = `${ratio * 100}%`;
    expNeeded.textContent = `${currentExp}/${expNeededValue}`;
}

function addGold() {
    total += autoGold;
    totalGold.innerText = `${total} gold`;
}

const interval = setInterval(addGold, 1000);

temp.addEventListener('click', () => {
    console.log(skillCost);
})