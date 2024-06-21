window.addEventListener('DOMContentLoaded', (evt) => {
    // let windowWidth = 0;
    // let isPhoneSize = false;

    // NAV MENU FUNCTIONALITY
    // let isNavOpen = false;
    const navMenu = document.querySelector('.nav-menu');

    // CREATE AN LI ELEMENT THAT WILL BE USED TO CLOSE THE HAMBUGER MENU
    const closeNavMenuBtn = document.createElement('li');
    closeNavMenuBtn.appendChild(document.createTextNode('X'));
    closeNavMenuBtn.classList.add('nav-close');

    // CONVERT TO ARRAY SO WE CAN MAP CHILD ELEMENTS
    const navChilds = Array.from(navMenu.children); 

    const globalVariables = {
        windowWidth: getWindowWidth(),
        isPhoneSize: false,
        isNavOpen: false,
        navMenu: document.querySelector('.nav-menu'),
        closeNavMenuBtn,
        navChilds,
    }

    setWindowWidth();


    /***************************************************
    *********** RESIZE EVENT LISTENER *****************
    ****************************************************/
    window.addEventListener('resize', setWindowWidth);


    /***************************************************
    *********** NAV MENU FUNCTIONALITY *****************
    ****************************************************/


    let menuClick = e => {
        // Don't render hamburger menu
        if (!globalVariables.isPhoneSize) return; 

        // Render hamburger menu
        globalVariables.closeNavMenuBtn.classList.add('flex-center');
        globalVariables.navMenu.appendChild( globalVariables.closeNavMenuBtn );
        if (globalVariables.isNavOpen === false) {
            globalVariables.isNavOpen = true;
            navMenuToggleStyles(globalVariables.navChilds);
            return;
        }
        const target = e.target;

        switch (target.tagName) {
            case 'LI':
                if(!isNavCloseElement(target)) target.firstChild.click();
                break;
            case 'A':
                target.click();
                break;
            default:
                console.log('default');
            }
            globalVariables.isNavOpen = defaultHamburgerMenu();
    }

    globalVariables.navMenu.addEventListener('click', menuClick );


    /***************************************************
    *********** UTILITY FUNCTIONS **********************
    ****************************************************/
    // nav -> VOID
    function navMenuToggleStyles(navItems) {
        toggleClassElem(globalVariables.navMenu, 'active-phone-nav');
        navItems.map( child => {
            if (isNavCloseElement(child)) return;
            toggleClassElem(child, 'active-phone__children');
        })
    }
    // default nav -> BOOLEAN
    function defaultHamburgerMenu() { 
        removeClass(globalVariables.navMenu, 'active-phone-nav');
        globalVariables.navChilds.map( child => removeClass(child, 'active-phone__children'));
        if (globalVariables.navMenu.contains(globalVariables.closeNavMenuBtn)) globalVariables.navMenu.removeChild(globalVariables.closeNavMenuBtn);
        return false;
    }
    // resize -> VOID
    function setWindowWidth() {
        globalVariables.windowWidth = getWindowWidth();
        globalVariables.windowWidth <= 600 ? globalVariables.isPhoneSize = true : globalVariables.isPhoneSize = false;
        // windowWidth = getWindowWidth;
        // windowWidth <= 600 ? isPhoneSize = true : isPhoneSize = false;
        
        // IF USER DECIDES TO CHANGE PHONE WIDTH TO LANDSCAPE OR WINDOW RESIZED BIGGER
        if(!globalVariables.isPhoneSize || globalVariables.isPhoneSize === 'undefined') {
            globalVariables.isNavOpen = defaultHamburgerMenu();
            // isNavOpen = defaultHamburgerMenu()
        }
    }

    // element nav close functionality -> BOOLEAN
    function isNavCloseElement(ele) {
        const isNavCloseElement = !!ele.classList.contains('nav-close');
        return isNavCloseElement;
    }
    // toggle class -> VOID
    function toggleClassElem(ele, classStyle) {
        ele.classList.toggle(classStyle);
    }

    // remove class -> VOID
    function removeClass(ele, classStyle) {
        ele.classList.remove(classStyle);
    }

    // getter -> NUMBER
    function getWindowWidth() {
        return window.innerWidth;
    }
});


