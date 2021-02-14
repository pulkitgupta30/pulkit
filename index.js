burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
list = document.querySelector('.list')
burger.addeventListener('click', () => {
    // list.classList.toggle('opac');

    list.classList.toggle('opac');
    navbar.classList.toggle('height');


})