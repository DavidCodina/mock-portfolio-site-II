/* =============================================================================
                                variables
============================================================================= */


//Select DOM Items
const menuBtn      = document.querySelector('.menu-btn');
const menu         = document.querySelector('.menu');
const menuNav      = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems     = document.querySelectorAll('.nav-item');


//Set Initial State Of Menu
let showMenu = false;


/* =============================================================================
                                functions
============================================================================= */


function toggleMenu() {
  if (!showMenu){
    showMenu = true;

    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');

    setTimeout(() => {
      navItems.forEach(item => item.classList.add('show'));
    }, 175);

  } else {
    showMenu = false; 

    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
  }
}


/* =============================================================================
                                Event Listeners
============================================================================= */


menuBtn.addEventListener('click', toggleMenu);
