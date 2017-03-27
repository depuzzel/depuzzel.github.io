(function () {
    'use strict';

    var closeMenuBtn = document.getElementById('close_menu'),
        mobileMenu = document.getElementById('mobile-menu'),
        openMenuBtn = document.getElementById('open_menu');

    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    function toggleMenu(event) {
        event.preventDefault();
        event.stopPropagation();
        mobileMenu.classList.toggle('hidden-xs-up');
    }

}());