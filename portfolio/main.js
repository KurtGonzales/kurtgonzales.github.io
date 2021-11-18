const toggle = document.getElementById('hamburger');
const nav = document.getElementById('nav-links');

toggle.addEventListener("click", function(){
    nav.classList.toggle('show-nav');
})