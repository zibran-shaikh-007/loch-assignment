import React, { useEffect, useState, useRef } from "react";

const TestCarousel = ({ data = [], cardRender, isAutoPlay = false }) => {
  useEffect(() => {
    let carousel = document.querySelector(".carousel");
    let carouselChildren = [...carousel.children];
    console.log("carouselChildren", carouselChildren);
    let wrapper = document.querySelector(".wrapper");

    let cardWidth = carousel.querySelector(".card").offsetWidth;
    let isDragging = false,
      startX,
      startScrollLeft,
      timeoutId;

    let cardsPerView = Math.round(carousel.offsetWidth / cardWidth);
    console.log("cardsPerView", cardsPerView);
    carouselChildren
      .slice(-cardsPerView)
      .reverse()
      .forEach((card) => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
      });
    if (data.length % 2 !== 0) {
      let view = cardsPerView - 1;
      carouselChildren.slice(0, view).forEach((card) => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
      });
    }

    let dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };

    let dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    let dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    let infiniteScroll = () => {
      if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }
      clearTimeout(timeoutId);
      if (!wrapper.matches(":hover")) autoPlay();
    };

    let autoPlay = () => {
      if (window.innerWidth < 800 || !isAutoPlay) return;
      timeoutId = setTimeout(() => {
        carousel.scrollLeft += cardWidth;
      }, 2500);
    };

    autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);

    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);

    return () => {
      // Clean up event listeners when the component unmounts
      carousel.removeEventListener("mousedown", dragStart);
      carousel.removeEventListener("mousemove", dragging);
      document.removeEventListener("mouseup", dragStop);
      carousel.removeEventListener("scroll", infiniteScroll);
      wrapper.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
      wrapper.removeEventListener("mouseleave", autoPlay);
    };
  }, []); // Empty dependency array ensures the effect runs only on mount and unmount

  return (
    <div className="testcarousel-container wrapper">
      <div className={`carousel`}>
        {data?.map((item, index) => (
          <div key={index} className={`card`}>
            {cardRender(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestCarousel;
