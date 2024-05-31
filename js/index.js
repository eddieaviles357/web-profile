// // window.addEventListener('load', () => {
window.addEventListener('DOMContentLoaded', (evt) => {

    // SCROLL FUNCTIONALITY
    const options = {
        root: null,
        threshold: 0,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-in-view');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    const sections = Array.from(document.getElementsByClassName('container'));
    for (let section of sections) {
        observer.observe(section);
    }

    const footerSections = Array.from( document.getElementsByClassName('footer__nav-links--item') );

    for (let footerSection of footerSections) {
        observer.observe(footerSection);
    } // END SCROLL FUNCTIONALITY







    
});
// NAV MENU FUNCTIONALITY
const navMenu = document.querySelector('.nav-menu');
// CONVERt TO ARRAY SO WE CAN MAP CHILD ELEMENTS
const navChilds = Array.from(navMenu.children); 
let isNavClicked = false;
let windowWidth; // IF WIDTH IS NOT PHONE WIDTH IGNORE MENU CLICKS

let menuClick = e => {
    navMenu.classList.toggle('active-phone-nav');
    navChilds.map( child => child.classList.toggle( 'active-phone__children') );
}

navMenu.addEventListener('click', menuClick );

// // })