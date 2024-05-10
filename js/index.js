// // window.addEventListener('load', () => {
window.addEventListener('DOMContentLoaded', (evt) => {
    const options = {
        root: null,
        threshold: 0,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log(entry.isIntersecting)
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-in-view');
                // observer.unobserve(entry.target);
            }
        });
    }, options);


    const sections = Array.from(document.getElementsByClassName('container'));
    console.log(sections)
    for (let section of sections) {
        observer.observe(section);
    }

});
// // })