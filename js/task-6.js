const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

document.addEventListener("DOMContentLoaded", () => {
    boxesContainer.style.display = 'none';
});

createButton.addEventListener('click', () => {
    const amount = Number(input.value.trim());

    if (amount < 1 || amount > 100 || isNaN(amount)) {
        alert('Please enter a number between 1 and 100');
        return;
    }

    createBoxes(amount);
    boxesContainer.setAttribute("style", "display: flex !important;");
});

destroyButton.addEventListener('click', () => {
    destroyBoxes();
    boxesContainer.style.display = 'none';
});

function createBoxes(amount) {
    destroyBoxes();

    const fragment = document.createDocumentFragment();
    let size = 30;

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        fragment.appendChild(box);
        size += 10;
    }

    boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
