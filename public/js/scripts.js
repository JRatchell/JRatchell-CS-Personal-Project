confirm("the ejs is working if you can see this")
function WIP (msg) {
    alert(msg);
}

function accountIntent (msg) {
    alert(msg)
}

function getStartedIntent (msg) {
    alert(msg)
}

function indexIntent (msg) {
    alert(msg)
}

// Hamburger Menu
// DOM Event Steps:

// 1. select hamburger icon --> event target
const hamburgerIcon = document.querySelector(".menu");
const navUl = document.querySelector(".nav-bar");

// 2. event handler --> show/hide

// 3. bind with event listener --> attach hamburger icon to event listener, NOT Menu Items
hamburgerIcon.addEventListener("click", () => {
    console.log("this has been clicked");
    navUl.classList.toggle("open-sesame");
});