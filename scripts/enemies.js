const enemies = [
    wolf = {
        name: "Wolf",
        baseHealth: 100,
        baseDefense: 10,
        src: "images/animal-2026286.svg",
    },

    zombie = {
        name: "Zombie",
        src: "images/zombie-156055.svg",
    },
]

const image = document.getElementById('enemyImage')

image.addEventListener('click', () => {
    const enemy = Math.floor(Math.random() * 2);
    image.src = enemies[enemy].src;
    console.log(enemy)
})