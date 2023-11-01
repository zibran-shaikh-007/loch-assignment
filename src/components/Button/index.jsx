const Button = ({ className = "", onClick, children, disabled = false }) => {
  return (
    <div className={`button-container ${className}`}>
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </div>
  );
};

export default Button;
