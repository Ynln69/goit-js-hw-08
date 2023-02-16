// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const containerGallery = document.querySelector('.gallery');
const itemsMarkup = createGalleryItems(galleryItems);

containerGallery.insertAdjacentHTML('beforeend', itemsMarkup);
containerGallery.addEventListener('click', onContainerGalleryClick);

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

function onContainerGalleryClick(event) {
  event.preventDefault();
  const isItemLink = event.target.classList.contains('gallery__image');

  if (!isItemLink) {
    return;
  }

  const onCloseModal = event => {
    const ESC_KEY = 'Escape';

    if (event.code === ESC_KEY) {
      instance.close();
    }
  };

  const instance = SimpleLightbox.create(
    `
      <img src="${event.target.dataset.source}" width="1240" height="800">`,
    {
      onShow: instance => {
        window.addEventListener('keydown', onCloseModal);
      },

      onClose: instance => {
        window.removeEventListener('keydown', onCloseModal);
      },
    }
  );
  instance.show();
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
