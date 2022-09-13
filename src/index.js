
const menu = document.querySelector('.nav-bar')
const btnMenu= document.querySelector('.btn-menu')
const menuNavbar =document.querySelector('.nav-bar-text-2')
const overlay =document.querySelector('.overlay')
// const menuNavbar =document.querySelector('.nav-bar-text')




btnMenu.addEventListener('click',(e)=>{
    e.preventDefault()
    overlay.classList.toggle('visible')
})

