const toogleBtn = document.querySelector('.toogle_btn')
const toogleBtnIcon = document.querySelector('.toogle_btn i')
const dropMenu = document.querySelector('.drop_menu')

toogleBtn.onclick = function ()
{
    dropMenu.classList.toggle('open')
    const isOpen = dropMenu.classList.contains('open')

    toogleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}
