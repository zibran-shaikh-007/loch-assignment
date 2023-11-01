import {resources} from "Constants"

const LoaderSpinner = ({ fullScreen = false }) => {
    return (
      <div className={`loader-container ${fullScreen ? "fullHeight" : ""}`}>
        <img src={resources.img.logo} alt={"loader"}/>
      </div>
    );
  };
  
  export default LoaderSpinner;