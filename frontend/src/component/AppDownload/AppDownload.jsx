import React from "react";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better <span style={{color:"crimson" , textDecoration : "underline"}}>Experience Download</span> <br /> <span style={{color : "crimson" , textDecoration :"underline"}}>B</span>lack <span style={{color : "crimson" , textDecoration: "underline"}}>C</span>afe App
      </p>
      <div className="app-download-platform">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Google Play Store"
          className="app-store-button"
        />
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="App Store"
          className="app-store-button"
        />
      </div>
    </div>
  );
};

export default AppDownload;