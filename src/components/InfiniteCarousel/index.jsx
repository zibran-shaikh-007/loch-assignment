import { useState, useCallback, useMemo, useLayoutEffect, useRef } from "react";

const InfiniteCarousel = ({ data = [], cardRender, isAutoPlay = true, speed = 2500 }) => {
  const carouselRef = useRef(null);
  const cardRef = useRef(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [currentLoopIndex, setCurrentLoopIndex] = useState(0);

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

  const autoPlay = (carousel, cardWidth) => {
    if (window.innerWidth < 800 || !isAutoPlay) return;
    const id = setTimeout(() => {
      carousel.scrollLeft += cardWidth;
    }, speed);
    setTimeoutId(id);
  };

  useLayoutEffect(() => {
    let intervalId;
    const carousel = carouselRef.current;
    const cardWidth = carousel.querySelector(".card").offsetWidth;

    if (isAutoPlay) {
      autoPlay(carousel, cardWidth);
      intervalId = setInterval(() => {
        setCurrentLoopIndex(currentLoopIndex + 1);
      }, speed + 500);
    }
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(intervalId);
    };
  }, [isAutoPlay, currentLoopIndex]);

  return (
    <div className="infiniteCarousel-container" ref={carouselRef}>
      {Array(size * 2 + 1)
        .fill(1)
        .map((_, index) => {
          const loopIndexToShow = currentLoopIndex + index - size;
          return {
            staticIndex: getStaticIndex(loopIndexToShow),
            loopIndexToShow,
          };
        })
        .map(({ staticIndex, loopIndexToShow }) => (
          <div key={loopIndexToShow} className="card" ref={cardRef}>
            {cardRender(staticIndex, loopIndexToShow)}
          </div>
        ))}
    </div>
  );
};

export default InfiniteCarousel;
