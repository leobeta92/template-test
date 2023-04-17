const header = document.querySelector(".main-nav");

// Scroll Direction Variable
let scrollPositionY = 0;

window.addEventListener("scroll",(e) => {
    // header.classList.toggle("sticky",window.scrollY > 0);
    console.log("Current Position:",window.scrollY,"& Original Position:",scrollPositionY);
    if (window.scrollY < scrollPositionY) {
        header.classList.toggle("sticky",window.scrollY > 0);
        header.classList.toggle("sticky-remove",window.scrollY < 0);
        console.log("Going Up");
    }
    else if (window.scrollY === scrollPositionY) {
        console.log("Same Position");
    }
    else if (window.scrollY > scrollPositionY + 10) {
        header.classList.toggle("sticky",window.scrollY < 0);
        header.classList.toggle("sticky-remove",window.scrollY > 0);
        console.log("Going Down");
    }
    scrollPositionY = window.scrollY;

    // console.log(window.scrollY);
    // console.log("Scroll Position:",scrollPositionY);

    
    // console.log(header.getBoundingClientRect());
});