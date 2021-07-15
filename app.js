// import functions and grab DOM elements
const animalNameDisplay = document.getElementById('animal-name');

const horseEl = document.getElementById('horse-image');
const dogEl = document.getElementById('dog-image');
const catEl = document.getElementById('cat-image');
const horseSound = document.getElementById('horse-sound');
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');
// initialize state

// set event listeners 

horseEl.addEventListener('click', () => {
    horseSound.play();
    animalNameDisplay.textContent = 'This is a horse';
});

dogEl.addEventListener('click', () => {
    dogSound.play();
    animalNameDisplay.textContent = 'This is a dog';
});

catEl.addEventListener('click', () => {
    catSound.play();
    animalNameDisplay.textContent = 'This is a cat. If it were as big as a dog or horse, it would kill you.';
});

// trying key stuff 

document.addEventListener("keydown", function(event) {
  if (event.code === "KeyD") {
      dogSound.play();
  animalNameDisplay.textContent = 'D is for Dog';
}});

document.addEventListener("keydown", function(event) {
    if (event.code === "KeyH") {
        horseSound.play();
    animalNameDisplay.textContent = 'H is for Horse';
}});

document.addEventListener("keydown", function(event) {
    if (event.code === "KeyC") {
        catSound.play();
    animalNameDisplay.textContent = 'C is for Cat';
}});