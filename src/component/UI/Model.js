import "./Model.css";

function Model({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="backdrop" onClick={onClose}>
      <div className="model" onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Model;
