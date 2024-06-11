window.addEventListener('DOMContentLoaded', (evt) => {
    let windowWidth = window.innerWidth;
    let isPhoneSize;
    // NAV MENU FUNCTIONALITY
    let isNavOpen = false;
    const navContainer = document.querySelector('.navigation__container');
    const navMenu = document.querySelector('.nav-menu');
    // CREATE AN LI ELEMENT THAT WILL BE USED TO CLOSE THE HAMBUGER MENU
    const closeNavMenuBtn = document.createElement('li');
    closeNavMenuBtn.appendChild(document.createTextNode('X'));
    closeNavMenuBtn.classList.add('nav-close');
    navMenu.appendChild( closeNavMenuBtn );

    // CONVERT TO ARRAY SO WE CAN MAP CHILD ELEMENTS
    const navChilds = Array.from(navMenu.children); 
    setWindowWidth();


    /***************************************************
    *********** RESIZE EVENT LISTENER *****************
    ****************************************************/
    window.addEventListener('resize', setWindowWidth);


    /***************************************************
    ******* SCROLL EVENT, INTERSECTION OBSERVER ********
    ****************************************************/
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
    }


    /***************************************************
    *********** NAV MENU FUNCTIONALITY *****************
    ****************************************************/


    let menuClick = e => {
        closeNavMenuBtn.classList.add('flex-center');
        if (!isPhoneSize) return; 
        if (isNavOpen === false) {
            isNavOpen = true;
            navMenuToggleStyles();
            return;
        }
        const target = e.target;
        console.log(target);

        switch (target.tagName) {
            case 'UL': 
                isNavOpen = false;
                defaultHamburgerMenu();
                break;
            case 'LI':
                console.log('LI HIT IS NAV OPEN', isNavOpen)
                isNavOpen = false;
                target.firstChild.click();
                defaultHamburgerMenu();
                break;
            case 'A':
                console.log('A HIT IS NAV OPEN', isNavOpen)
                isNavOpen = false;
                target.click();
                defaultHamburgerMenu();
                break;
            case 'DIV':
                console.log('DIV HIT IS NAV OPEN', isNavOpen)
            default:
                console.log('default');
            }
                
    }

    navMenu.addEventListener('click', menuClick );


    /***************************************************
    *********** UTILITY FUNCTIONS **********************
    ****************************************************/
    // nav
    function navMenuToggleStyles() {
        navMenu.classList.toggle('active-phone-nav');
        navChilds.map( child => child.classList.toggle('active-phone__children') );
    }
    // default nav
    function defaultHamburgerMenu() {
        isNavOpen = false;
        navMenu.classList.remove('active-phone-nav');
        navChilds.map( child => child.classList.remove('active-phone__children') );
    }
    // resize
    function setWindowWidth() {
        windowWidth = window.innerWidth;
        windowWidth <= 600 ? isPhoneSize = true : isPhoneSize = false;
        
        // IF USER DECIDES TO CHANGE PHONE WIDTH TO LANDSCAPE OR WINDOW RESIZED BIGGER
        if(!isPhoneSize || isPhoneSize === 'undefined') {
            defaultHamburgerMenu()
        }
    }

});


