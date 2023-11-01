const MinimalButton = ({ className, children, onClick, disabled = false }) => {
  return (
    <div className={`minimal-button ${className}`}>
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </div>
  );
};

export default MinimalButton;
