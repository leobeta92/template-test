const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation
function navAnimation(direction1, direction2) {
    navItems.forEach((nav,i) => {
        console.log(nav.classList);
        nav.classList.replace(`slide-${direction1}-${i + 1}`,`slide-${direction2}-${i + 1}`);
    })
}

//Toggle Navigation Open/Closed
function toggleNav() {
    menuBars.classList.toggle('change');
    // Active Menu
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate in - overlay
        overlay.classList.replace('overlay-slide-left','overlay-slide-right');
        // Animate in - Nav Items
        navAnimation('out','in');
    }
    else {
        // Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right','overlay-slide-left');

        // Animate Out - Nav Items
        navAnimation('in','out');

    }
}

// Event Listener
menuBars.addEventListener('click',toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click',toggleNav); 
})