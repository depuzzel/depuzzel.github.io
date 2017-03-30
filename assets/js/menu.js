// responsive menu
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

// active menu item
(function () {
    'use strict';
    var cssClass = 'main-nav__tabs--active',
        index,
        menuItems = document.querySelectorAll('[data-menu-active]'),
        length = menuItems.length,
        item,
        attribute;

    for (index = 0; index < length; index += 1) {
        item = menuItems[index];
        attribute = item.getAttribute('data-menu-active');

        if (document.URL.indexOf(attribute) >= 0 || (attribute === 'index' && document.URL.indexOf('html') === -1)) {
            item.classList.toggle(cssClass);
        }
    }
}());