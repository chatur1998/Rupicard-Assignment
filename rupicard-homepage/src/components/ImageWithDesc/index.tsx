import React from "react";
import "./index.less";

type PropTypes = {
  name: string;
  desc: string;
  greyDesc: string;
};

const ImageWithDesc = ({ name, desc, greyDesc }: PropTypes) => {
  return (
    <div className="image-desc-container">
      <img src={`/assets/${name}.png`} className="feature-image" />
      <p className="desc">
        {desc}
        <span className="grey-desc">{greyDesc}</span>
      </p>
    </div>
  );
};

export default ImageWithDesc;
