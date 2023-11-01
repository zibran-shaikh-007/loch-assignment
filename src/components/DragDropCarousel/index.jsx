import React, { useState, useRef, useEffect } from "react";

const DragDropCarousel = ({ data = [], cardRender }) => {
  const wrapperRef = useRef(null);
  const [pressed, setPressed] = useState(false);
  const [startX, setStartX] = useState(0);


  const handleMouseDown = (e) => {
    setPressed(true);
    setStartX(e.clientX);
    wrapperRef.current.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    setPressed(false);
    
  };

  const handleMouseUp = () => {
    setPressed(false);
    wrapperRef.current.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    if (!pressed) {
      return;
    }
    wrapperRef.current.scrollLeft += startX - e.clientX;
  };


  return (
    <div
      className="dragdrop-carousel"
      ref={wrapperRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {data?.map((item, index) => (
        <div key={index} className={`carousel-item`}>
          {cardRender(item, index)}
        </div>
      ))}
    </div>
  );
};

export default DragDropCarousel;
