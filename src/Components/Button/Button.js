import './Button.css';
export const Button = ({ showMore }) => (
  <button className="button" onClick={showMore}>
    Load more
  </button>
);
