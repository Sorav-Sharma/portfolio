
const headerBtn = document.querySelector('.header__bars');
const mobileNav = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-nav__link')
let mobile_nav_state = false;
// we need to add an event of click


// object.addEventListener('Event', () => {CODE HERE})
headerBtn.addEventListener('click', () => {
    // we need to change the display of mobile nav from none to flex and vice-versa
    mobile_nav_state = !mobile_nav_state
    if (mobile_nav_state) {
        mobileNav.style.display = 'flex';
        // as some of the body is below the menu now , if we scroll down while menu is opened , we can still see the website, we dont want that SO :
        document.body.style.overflow = 'hidden';
    }
    else {
        mobileNav.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log("DEBUGGING");
            mobile_nav_state = false;
            mobileNav.style.display = 'none';
            document.body.style.overflow = 'auto';
        })
    })
});


// now we need to make website normal after any of the link is clicked

