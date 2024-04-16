
import './Modal.css';

const Modal2 = ({ isOpen, onClose, title, description, category}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>Descripción: {description}</p>
        <p>Categoria: {category}</p>

        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal2;


