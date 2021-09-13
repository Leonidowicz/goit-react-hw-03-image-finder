export const ImageGalleryItem = ({ images }) =>
  images.map(({ id, webformatURL, largeImageURL, tags }) => (
    <li key={id} className="ImageGalleryItem">
      <img
        id={id}
        src={webformatURL}
        alt={tags}
        largeImageURL={largeImageURL}
        className="ImageGalleryItem-image"
      />
    </li>
  ));
