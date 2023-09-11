import React, { useRef, useState } from "react";
import "./PrizeImage.css";
import refresh from "./img/refresh.png";
const PrizeImage = ({ src, parentFunction }) => {
  // const [originalImg, setOriginalImg] = useState(src);
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
  // const handleCanceler = () => {
  //   console.log("originalImg: ", originalImg);
  //   setImage(originalImg);
  //   console.log("image: ", image);
  // };
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
      <br />
      {/* <img id="refresh-icon" onClick={handleCanceler} src={refresh} /> */}
    </>
  );
};

export default PrizeImage;
