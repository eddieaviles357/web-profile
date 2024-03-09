// window.addEventListener('load', () => {
const GALL_TOP = 'gallery--top';
const GALL_BOTTOM = 'gallery--bottom';
const ACTIVE = 'active';
const GALLERY = document.getElementById('gallery');
const GALLERY_IMAGES = document.getElementsByClassName('gallery__item--img');

let activeImg = document.getElementsByClassName(ACTIVE)[0];
let topImg = document.getElementsByClassName(GALL_TOP)[0];
let bottomImg = document.getElementsByClassName(GALL_BOTTOM)[0];

GALLERY.addEventListener('click', (ele) => {
  const target = ele.target;

  if (target === undefined) return;

  switch (target.tagName) {
    case 'IMG': {
      const PARENT = target.parentElement;
      const IS_ACTIVE = PARENT.classList.contains(ACTIVE);

      if (IS_ACTIVE) return;
      if (PARENT.classList.contains(GALL_TOP)) {
        topImg.classList.replace(GALL_TOP, ACTIVE);
        activeImg.classList.replace(ACTIVE, GALL_TOP);

        // swap elements
        [activeImg, topImg] = [topImg, activeImg];
      } else {
        bottomImg.classList.replace(GALL_BOTTOM, ACTIVE);
        activeImg.classList.replace(ACTIVE, GALL_BOTTOM);

        // swap elements
        [activeImg, bottomImg] = [bottomImg, activeImg];
      }
      break;
    }
    default:
      console.log('NO_EVENTS_EXIST');
  }
});

GALLERY.addEventListener('mouseover', (ele) => {
  const target = ele.target;
  // console.log('MOUSE_OVER:::TARGET', target)
  let isActive = target.parentElement.classList.contains('active');
  if (target.tagName !== 'IMG' || target.tagName === undefined) return;

  if (!isActive) {
    // console.log('OPACITY-100 ADDED')
    target.classList.replace('opacity-50', 'opacity-100');
  };
});

for (img of GALLERY_IMAGES) {
  img.addEventListener('mouseleave', (ele) => {
    const target = ele.target;

    if (target.tagName !== 'IMG' || target.tagName === undefined) return;

    const topImg = target.parentElement.classList.contains(GALL_TOP);
    const bottomImg = target.parentElement.classList.contains(GALL_BOTTOM);

    if (topImg || bottomImg) target.classList.replace('opacity-100', 'opacity-50');

  });
}
// })