import { resources } from "Constants";
import SkeletonImg from "components/SkeletonImg";
import { useOptimisedImage } from "utils";

const WhaleActivityPreview = () => {
  const optimisedImg = useOptimisedImage(resources.img.whalesDetail);

  return (
    <div className="whaleActivityPreview-container">
      <SkeletonImg src={optimisedImg?.src} alt="whale-activites" />
    </div>
  );
};

export default WhaleActivityPreview;
