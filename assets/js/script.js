const navMenu = document.querySelector('.nav_menu')
const btnToggle = document.querySelector('.menu_toggle')
 
btnToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show')
   
});
 
window.addEventListener('click', (e) =>{
    if(!btnToggle.contains(e.target)){
        navMenu.classList.remove('show')
    }
    navMenu.classList.toggle("active");
    btnToggle.classList.toggle("active");
})
 