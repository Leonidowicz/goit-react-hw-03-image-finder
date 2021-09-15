export const ImageGalleryItem = ({ images, handlerOnClick }) =>
  images.map(({ id, webformatURL, largeImageURL, tags }) => (
    <li
      key={id}
      className="ImageGalleryItem"
      onClick={() => handlerOnClick(largeImageURL, tags)}
    >
      <img
        id={id}
        src={webformatURL}
        alt={tags}
        largeImageURL={largeImageURL}
        className="ImageGalleryItem-image"
      />
    </li>
  ));
