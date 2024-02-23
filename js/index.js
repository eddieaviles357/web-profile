// window.addEventListener('load', () => {
  const gallery = document.getElementsByClassName('gallery')[0];
  const galleryItems = document.getElementsByClassName('gallery__item');
  
  /* HTMLCollection [
    <figure class="gallery__item">
      <img 
        class="gallery__item--img" 
        src="img/jeopardy.jpeg" 
        alt="Jeopardy image" 
        />
      <figcaption class="gallery__description">Jeopardy</figcaption>
    </figure> ]
    */
  
gallery.addEventListener('click', (ele) => { 
  const target = ele.target;
  let imgEl;

  
  if(target === undefined) return;

  switch(target.tagName) {
    case 'IMG' : {
      console.log('IMAGE HIT');
      console.log(Array.from(galleryItems));
      break;
    }
    default: 
      console.log('NO_EVENTS_EXIST');
  }
});
  // console.log('GALLERY', gallery);
  // console.log('GALLERY_ITEMS >>> ', galleryItems);
// })