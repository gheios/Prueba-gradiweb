import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

const Slider = ({ data }) => {
  const images = [data.images];
  const img = images[0];
  const gallery = img?.slice(1);

  const [currentIndex, setcurrentIndex] = useState(0);

  const prev = () => {
    f;
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? img.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };
  const next = () => {
    const lastSlide = currentIndex === img.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setcurrentIndex(slideIndex);
  };

  return (
    <div className="slider_Container">
      <div className="slider_carousel">
        <div
          className="slider_slide"
          style={{ backgroundImage: `url(${img?.[currentIndex]}) ` }}
        />
        <div className="slider_leftArrow" onClick={prev}>
          <FiChevronLeft size={30} />
        </div>
        <div className="slider_rightArrow" onClick={next}>
          <FiChevronRight size={30} />
        </div>
        <div className="slider_dotsContainer">
          {img?.map((slide, slideIndex) => (
            <button
              className="slider_dots"
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              <FaCircle />
            </button>
          ))}
        </div>
      </div>
      <div className="slider_gallery">
        <div
          className="slider_featurImage"
          style={{ backgroundImage: `url(${data?.featured_image}) ` }}
        ></div>
        <div className="slider_imagesContainer">
          {gallery?.map((e, index) => (
            <img
              className="slider_galleryImages"
              key={index}
              src={`${e}`}
              alt="default"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
