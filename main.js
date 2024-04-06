document.title = "project-js-12";
// Get Elements From Html

let card = document.querySelector(".card");
let btnOne = document.getElementById("btn_one");
let btnTwo = document.getElementById("btn_two");
// Yanni Is The Best pianist

let audio = new Audio("song.mp4")
setTimeout(() => {
    card.style.display = "block";
}, 2000);
btnOne.onclick = function (params) {
    audio.play();
    card.remove();
    console.log("User Want To Play Music.");
};
btnTwo.onclick = function (params) {
    card.remove();
    console.log("User Don't Want To Play Music.");
};
audio.addEventListener('ended', () => {
    console.log("Audio Has Finished Playing.");
    console.log("Play It Again");
    audio.play();
});