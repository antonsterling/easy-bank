const menu = document.getElementById('menu');

menu.addEventListener('click', () => {

    let menuD = menu.nextElementSibling;
    console.log(menuD);


    if (menu.getAttribute('src') == "./assets/icons/icon-hamburger.svg") {
        menu.setAttribute('src', "./assets/icons/icon-close.svg");
        menuD.style.opacity = 1;
    }
    else {
        menu.setAttribute('src', "./assets/icons/icon-hamburger.svg");
        menuD.style.opacity = 0;
    }

});