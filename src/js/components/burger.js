const menuButton = document.querySelector('.icon__menu');
const navBlock = document.querySelector('.menu__nav');
const bodyBlock = document.querySelector('body');

const onClickMenu = (menu, nav, body) => menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('lock');
});

onClickMenu(menuButton, navBlock, bodyBlock)
