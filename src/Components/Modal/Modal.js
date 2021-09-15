export const Modal = ({ img, alt, cl }) => {
  document.addEventListener('keydown', cl);

  return (
    <div className="Overlay" onClick={cl}>
      <div className="Modal">
        <img className="img" width="600" src={img} alt={alt} />
      </div>
    </div>
  );
};
