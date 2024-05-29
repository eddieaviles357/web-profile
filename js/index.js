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
const navChilds = Array.from(navMenu.children)

let windowWidth;

let menuClick = e => {
    navMenu.classList.add('active-phone-nav');
    for (let child of navChilds) {
        child.classList.add('.active-phone-children');
    }
    console.log('hit');
}
navMenu.addEventListener('click', menuClick );

// // })