const gallery = document.querySelector('.gallery');
const lightboxImage = document.querySelector('#lightbox-image');
const lightBox = document.querySelector('.lightbox');
const closeBtn = document.querySelector('#close-btn');

gallery.addEventListener('click', (event) => {
  if(event.target.classList.contains('gallery-item')){
    
  const newUrl = event.target.src.replace('-thumbnail', '');

  lightboxImage.src = newUrl;

  lightBox.style.display = 'flex';

  }
});

closeBtn.addEventListener('click', () => lightBox.style.display = 'none')

lightBox.addEventListener('click', () => lightBox.style.display = 'none')