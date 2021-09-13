export const ImageGalleryItem = ({ images }) =>
  images.map(({ id, webformatURL, largeImageURL, tags }) => (
    <li key={id} className="ImageGalleryItem">
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  ));
