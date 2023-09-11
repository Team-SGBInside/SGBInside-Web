import React, { useRef, useState } from "react";
import "./PrizeImage.css";
const PrizeImage = ({ src, parentFunction }) => {
  const [image, setImage] = useState(src);
  const onChange = (e) => {
    setImage(e.target.files[0]);
    parentFunction(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
      <div id="image-input-label">상장 이미지 수정</div>
      <img src={image}></img>
      <br />
      <input
        id="image-input"
        type="file"
        accept="image/*"
        name="profile_img"
        onChange={onChange}
      />
    </>
  );
};

export default PrizeImage;
