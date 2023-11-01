import React from "react";

const PreviewContainer = ({
  index,
  className,
  title,
  description,
  type,
  icon,
  toolbar = <></>,
  swapOrder = false,
}) => {
  return (
    <div key={index} className={`preview-container ${className}`}>
      {swapOrder ? (
        <>
          {toolbar && <div className="toolbar">{toolbar}</div>}
          <div className="info-wrapper">
            <img src={icon} alt={type} />
            {title && <h4>{title}</h4>}
            {description && <p>{description}</p>}
          </div>
        </>
      ) : (
        <>
          <div className="info-wrapper">
            <img src={icon} alt={type} />
            {title && <h4>{title}</h4>}
            {description && <p>{description}</p>}
          </div>
          {toolbar && <div className="toolbar">{toolbar}</div>}
        </>
      )}
    </div>
  );
};

export default PreviewContainer;
