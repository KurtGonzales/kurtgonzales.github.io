const nav = document.getElementById('flex-nav');
const toggle = document.getElementById('hamburger');

toggle.addEventListener('click', function(){
    nav.classList.toggle('show-nav');
})