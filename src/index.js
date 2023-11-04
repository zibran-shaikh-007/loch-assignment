import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LoaderSpinner from "components/Loader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<LoaderSpinner fullScreen={true} />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
