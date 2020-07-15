burger = document.querySelector('.burger')
Menu = document.querySelector('.menu-items')


burger.addEventListener('click', ()=>{
    Menu.classList.toggle('hide-menu');
})