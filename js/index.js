window.addEventListener('DOMContentLoaded', (evt) => {
    let windowWidth = window.innerWidth;
    let isPhoneSize;

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
    // NAV MENU FUNCTIONALITY
    const navMenu = document.querySelector('.nav-menu');

    // CONVERT TO ARRAY SO WE CAN MAP CHILD ELEMENTS
    const navChilds = Array.from(navMenu.children); 
    let isNavClicked = false;


    let menuClick = e => {
        if (!isPhoneSize) return; 
        isNavClicked = !isNavClicked;
        const target = e.target;

        // console.dir(target);
        console.log(`%cisNavClicked: ${isNavClicked}`, 'color: yellow; font-size: 1.4rem');
        switch (target.tagName) {
            case 'UL': 
                console.log(`%ctarget tagname === ${target.tagName}`, 'color: green; font-size: 1.4rem ');
                break;
            case 'LI':
                console.log(`%ctarget tagName === ${target.tagName}`, 'color: blue; font-size: 1.4rem')
            default:
                console.log('default');
        }
        

        navMenuToggleStyles();
    }

    navMenu.addEventListener('click', menuClick );


    /***************************************************
    *********** UTILITY FUNCTIONS **********************
    ****************************************************/
    // nav
    function navMenuToggleStyles() {
        navMenu.classList.toggle('active-phone-nav');
        navChilds.map( child => child.classList.toggle( 'active-phone__children') );
    }
    // default nav
    function removeNavStyles() {
        navMenu.classList.remove('active-phone-nav');
        navChilds.map( child => child.classList.remove( 'active-phone__children') );
    }
    // resize
    function setWindowWidth() {
        windowWidth = window.innerWidth;
        console.log('WINDOW WIDTH: ', windowWidth);
        windowWidth <= 600 ? isPhoneSize = true : isPhoneSize = false;
        
        // IF USER DECIDES TO CHANGE PHONE WIDTH TO LANDSCAPE OR WINDOW RESIZED BIGGER
        if(!isPhoneSize || isPhoneSize === 'undefined') {
            removeNavStyles()
        }
    }

});


