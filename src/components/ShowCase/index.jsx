import PreviewContainer from "components/PreviewContainer";
import { previewAll } from "data";

const ShowCase = () => {
  return (
    <div className="showcase-container">
      {previewAll.length > 0
        ? previewAll.map((preview, idx) => {
            return (
              <>
                {preview?.heading && (
                  <div className="heading-container">
                    <h5>{preview.heading}</h5>
                    <div className="hr"></div>
                  </div>
                )}
                <PreviewContainer
                  index={idx}
                  type={preview.type}
                  className={preview.type}
                  heading={preview.heading}
                  title={preview.title}
                  description={preview.description}
                  icon={preview.icon}
                  toolbar={preview.toolbar}
                  swapOrder={preview.type === "whale" ? true : false}
                />
              </>
            );
          })
        : ""}
    </div>
  );
};

export default ShowCase;
