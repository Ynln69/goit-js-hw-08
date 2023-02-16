// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const containerGallery = document.querySelector('.gallery');
const itemsMarkup = createGalleryItems(galleryItems);

containerGallery.insertAdjacentHTML('beforeend', itemsMarkup);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
  </li>
    `;
    })
    .join('');
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'galleryItems.description',
});
