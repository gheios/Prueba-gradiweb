import React, { useState, useEffect } from "react";
/* Importing the icons from the react-icons library. */
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

const Slider = ({ data }) => {
  /* Destructuring the data.images array. */
  const images = [data.images];
  const img = images[0];
  const gallery = img?.slice(1);

  /* A state hook that is used to set the current index of the image. */
  const [currentIndex, setcurrentIndex] = useState(0);

  /**
   * If the current index is 0, then set the current index to the last index of the array, otherwise, set
   * the current index to the current index minus 1.
   */
  const prev = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? img.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };
  /**
   * If the current index is equal to the length of the array minus one, then set the current index to
   * zero, otherwise, set the current index to the current index plus one.
   */
  const next = () => {
    const lastSlide = currentIndex === img.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };
  /**
   * When the user clicks on a thumbnail, the currentIndex is set to the index of the thumbnail that
   * was clicked.
   */
  const goToSlide = (slideIndex) => {
    setcurrentIndex(slideIndex);
  };

  return (
    <div className="slider_Container">
      <div className="slider_carousel">
        {/* /* Setting the background image of the div to the current index of the
        array. */ }
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
          {/* /* Mapping through the images array and creating a button for each
          image. */ }
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
        {/* /* Setting the background image of the div to the featured image of the
        product. */ }
        <div
          className="slider_featurImage"
          style={{ backgroundImage: `url(${data?.featured_image}) ` }}
        ></div>
        <div className="slider_imagesContainer">
          {/* /* Mapping through the gallery array and creating an image for each
          image in the array. */}
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
