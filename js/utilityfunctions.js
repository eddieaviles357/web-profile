/***************************************************
*********** UTILITY FUNCTIONS **********************
****************************************************/
// nav -> VOID
function navMenuToggleStyles() {
  navMenu.classList.toggle('active-phone-nav');
  navChilds.map( child => {
      if (isNavCloseElement(child)) return;
      child.classList.toggle('active-phone__children')
  })
}
// default nav -> VOID
function defaultHamburgerMenu() { 
  isNavOpen = false;
  navMenu.classList.remove('active-phone-nav');
  navChilds.map( child => child.classList.remove('active-phone__children') );
  console.log('CONTAINS_CLOSE_NAV_MENU_BTN',navMenu.contains(closeNavMenuBtn))
  if (navMenu.contains(closeNavMenuBtn)) navMenu.removeChild(closeNavMenuBtn);
}
// resize -> VOID
function setWindowWidth() {
  windowWidth = window.innerWidth;
  windowWidth <= 600 ? isPhoneSize = true : isPhoneSize = false;
  
  // IF USER DECIDES TO CHANGE PHONE WIDTH TO LANDSCAPE OR WINDOW RESIZED BIGGER
  if(!isPhoneSize || isPhoneSize === 'undefined') {
      defaultHamburgerMenu()
  }
}

// element nav close functionality -> BOOLEAN
function isNavCloseElement(ele) {
  const isNavCloseElement = !!ele.classList.contains('nav-close');
  return isNavCloseElement;
}