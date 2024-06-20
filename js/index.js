window.addEventListener('DOMContentLoaded', (evt) => {
    let windowWidth;
    let isPhoneSize;

    // NAV MENU FUNCTIONALITY
    let isNavOpen = false;
    const navMenu = document.querySelector('.nav-menu');

    // CREATE AN LI ELEMENT THAT WILL BE USED TO CLOSE THE HAMBUGER MENU
    const closeNavMenuBtn = document.createElement('li');
    closeNavMenuBtn.appendChild(document.createTextNode('X'));
    closeNavMenuBtn.classList.add('nav-close');

    // CONVERT TO ARRAY SO WE CAN MAP CHILD ELEMENTS
    const navChilds = Array.from(navMenu.children); 
    setWindowWidth();


    /***************************************************
    *********** NAV MENU FUNCTIONALITY *****************
    ****************************************************/
    function menuClick(e) {
        closeNavMenuBtn.classList.add('flex-center');

        navMenu.appendChild( closeNavMenuBtn );
        
        if (!isPhoneSize) return; 

        if (isNavOpen === false) {
            isNavOpen = true;
            navMenuToggleStyles();
            return;
        }

        const target = e.target;

        switch (target.tagName) {
            case 'UL': 
                isNavOpen = false;
                break;
            case 'LI':
                isNavOpen = false;
                if(!isNavCloseElement(target)) target.firstChild.click();
                break;
            case 'A':
                isNavOpen = false;
                target.click();
                break;
            default:
                console.log('default');
            }
            defaultHamburgerMenu();
    }
});


