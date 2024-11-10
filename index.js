let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');

menu.addEventListener('click',()=>{
    menu.classList.toggle('box-menu');
    navlist.classList.toggle('open');
    
})
