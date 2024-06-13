const hamburger = document.querySelector(".hamburger")
hamburger.onclick = function () {
    const navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("active")
}