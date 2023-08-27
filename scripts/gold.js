const totalGold = document.getElementById('total');
const goldPerClick = document.getElementById('goldPerClick');
const goldPerSecond = document.getElementById('goldPerSecond');

const goldUpgradeButton = document.querySelector('#upgrade');
const clickHere = document.querySelector('#clickForGold');
const autoClicker = document.querySelector('#autoClick');
const upgradeCost = document.querySelector('#upgradeCost');
const autoClickCost = document.querySelector('#autoCost');

let interval = 1000;

let gold = {
    total: 0,
    goldPerClick: 1,
    goldPerSecond: 0,
    addGold() {
        this.total += this.goldPerClick;
        updateDisplays();
    }
};

let goldUpgrade = {
    cost: 10,
    costMultiplier: 1.2,
    level: 1,
    multiplier: 1,
    upgrade() {
        if (gold.total >= this.cost) {
            gold.total -= this.cost;
            this.level++;
            this.cost = Math.round(this.cost * this.costMultiplier) + 1;
            gold.goldPerClick = this.level * this.multiplier;
        }
        updateDisplays();
    }
};

let autoClick = {
    cost: 10,
    costMultiplier: 10,
    level: 0,
    multiplier: 1,
    upgrade() {
        if (gold.total >= this.cost) {
            gold.total -= this.cost;
            this.level++;
            this.cost = this.level * this.costMultiplier;
            gold.goldPerSecond = this.level * this.multiplier;
        }
        updateDisplays();
    }
};

clickHere.addEventListener('click', () => {
    gold.addGold();
    exp.currentExp += gold.goldPerClick;
    levelUp();
    adjustExpBar();
});

goldUpgradeButton.addEventListener('click', () => {
    goldUpgrade.upgrade();
    updateCostDisplays();
});

autoClicker.addEventListener('click', () => {
    autoClick.upgrade();
    updateCostDisplays();
});

function updateDisplays() {
    totalGold.innerText = `${gold.total} gold`;
    goldPerClick.innerText = `${gold.goldPerClick} gold/click`;
    goldPerSecond.innerText = `${gold.goldPerSecond} gold/sec`;
};

function updateCostDisplays() {
    upgradeCost.innerText = `${goldUpgrade.cost} gold`;
    autoClickCost.innerText = `${autoClick.cost} gold`;

}

function autoClickerInterval() {
    gold.total += gold.goldPerSecond;
    updateDisplays();
}

setInterval(autoClickerInterval, interval);