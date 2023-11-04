import { useEffect, useState } from "react";

const SkeletonImg = ({ className, src, alt }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoading(false);
    };
  }, [src]);

  if (loading)
    return <div className={`skeleton ${className}`} style={{ width: "100%", minHeight: "200px", background: "#f0f0f0" ,opacity:"0.5"}} />;

  return <img className={className} src={src} alt={alt} loading="lazy" />;
};

export default SkeletonImg;
