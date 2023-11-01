import React, { useState, useCallback, useMemo, useLayoutEffect } from "react";

const InfiniteCarousel = ({ data, autoflow = 2500, cardRender }) => {
  const [currentLoopIndex, setCurrentLoopIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const size = useMemo(() => data.length, [data]);

  const getStaticIndex = useCallback(
    (loopIndex) => {
      let rest = loopIndex % size;
      if (rest < 0) {
        rest += size;
      }
      return rest;
    },
    [size]
  );

  useLayoutEffect(() => {
    let intervalId;
    if (isAutoPlay) {
      intervalId = setInterval(() => {
        setCurrentLoopIndex(currentLoopIndex + 1);
      }, autoflow);
    }
    return () => clearTimeout(intervalId);
  }, [isAutoPlay, setCurrentLoopIndex, currentLoopIndex]);

  console.log("length of array", Array(size * 2 + 1))

  return (
    <div
      className="infiniteCarousel-container"
      onMouseOver={() => setIsAutoPlay(false)}
      onMouseOut={() => setIsAutoPlay(true)}
    >
      <div
        className="outer-wrapper"
        style={{
          transform: `translateX(${-9.35 * size - 10 * currentLoopIndex}vw)`,
        }}
      >
        <div
          className="inner-wrapper"
          style={{
            transform: `translateX(${10 * currentLoopIndex}vw)`,
          }}
        >
          {Array(size * 2 + 1)
            .fill(1)
            .map((_, index) => {
              const loopIndexToShow = currentLoopIndex + index - size;
              return {
                staticIndex: getStaticIndex(loopIndexToShow),
                loopIndexToShow,
              };
            })
            .map(({ staticIndex, loopIndexToShow }, index) => (
              <div key={loopIndexToShow} className="carousel-cards">
                {cardRender(staticIndex, loopIndexToShow)}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
