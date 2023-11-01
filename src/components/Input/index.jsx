const Input = ({
    key,
    name,
    label,
    id,
    value,
    placeholder,
    onChange,
    onClick,
    type,
    onFocus,
    onBlur,
    min,
    max,
    step,
    accept,
    maxLength,
    disabled,
    readOnly,
    rows,
    defaultChecked,
    onChangeValue,
    className = "",
  }) => {
    let input = (
      <input
        key={key}
        id={id}
        name={name}
        defaultValue={value}
        value={onChangeValue}
        onChange={onChange}
        onClick={onClick}
        placeholder={placeholder}
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
        min={min}
        max={max}
        step={step}
        accept={accept}
        maxLength={maxLength}
        disabled={disabled}
        readOnly={readOnly}
        checked={value}
        defaultChecked={defaultChecked}
      />
    );
    if (type == "area") {
      input = (
        <textarea
          key={key}
          id={id}
          name={name}
          defaultValue={value}
          value={onChangeValue}
          onChange={onChange}
          onClick={onClick}
          placeholder={placeholder}
          type={type}
          onFocus={onFocus}
          onBlur={onBlur}
          min={min}
          max={max}
          step={step}
          accept={accept}
          maxLength={maxLength}
          disabled={disabled}
          readOnly={readOnly}
          rows={rows}
        />
      );
    }
    return (
      <div className={`input-container ${className}`}>
       {label && <div className="label">{label}</div>}
        {input}
      </div>
    );
  };
  
  export default Input;
  