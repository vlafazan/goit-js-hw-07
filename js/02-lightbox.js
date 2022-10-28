import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerEl = document.querySelector('.gallery')
const imagesGalleryMarkup = createGalleryMarkup(galleryItems)
galleryContainerEl.insertAdjacentHTML('beforeend',imagesGalleryMarkup)


function createGalleryMarkup(image) {
        return image.map(({ preview, original, description }) => {
            return `<a class="gallery__item" href="${original}"> <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>`
        }).join('')
    }

const lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt"
});

