import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainerEl = document.querySelector(".gallery");
const imagesGalleryMarkup = createGalleryMarkup(galleryItems);
galleryContainerEl.addEventListener("click", onContainerClick);
galleryContainerEl.insertAdjacentHTML("beforeend", imagesGalleryMarkup);

function createGalleryMarkup(image) {
  return image
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}
function onContainerClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG'){
        return;
    };

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">`,

);

instance.show();

}





