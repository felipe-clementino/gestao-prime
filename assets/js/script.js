const btnToggle = document.getElementById("menu-toggle");
const menuNav = document.querySelector(".nav_menu");

btnToggle.addEventListener('click', () => {
    menuNav.classList.toggle('show');
});

window.addEventListener('click', (e) =>{
    if(!btnToggle.contains(e.target)){
        menuNav.classList.remove('show');
    }
});