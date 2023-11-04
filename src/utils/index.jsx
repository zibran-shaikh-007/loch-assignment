import React, { useState, useMemo } from "react";

export const useOptimisedImage = (path) => {
  const [optimisedImg, setOptimisedImg] = useState(null);
  //Returns memoized image
  useMemo(() => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      setOptimisedImg(img);
    };
  },[path]);

  return optimisedImg;
};

export const isValidEmail = (email) => {
  // Regular expression to match a basic email format
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};
